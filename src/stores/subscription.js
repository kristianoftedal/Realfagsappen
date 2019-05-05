/**
 * IOS
 */
import { decorate, action, computed, observable } from 'mobx';
import { Platform, NativeModules, Alert } from 'react-native';
import iapReceiptValidator from 'iap-receipt-validator';
import { getReceipt, setReceipt } from '../services/subscriptionStorage';
import InAppBilling from 'react-native-billing';
import subjectStore from './subject';
import env from '../config/env';
const { InAppUtils } = NativeModules
const password = '018ed9158df247e7b96ab7df05693c3a'; // Shared Secret from iTunes connect
const production = !env.IS_ENV_DEVELOPMENT; // use sandbox or production url for validation
const validateReceipt = iapReceiptValidator(password, production);

class SubscriptionStore {
  hasSubscription = false;
  subscriptionId = null;

  init = async () => {
    if (Platform.OS === 'android') {
        await InAppBilling.close();
        await InAppBilling.open();
        await InAppBilling.loadOwnedPurchasesFromGoogle();
        this.hasSubscription = await InAppBilling.isSubscribed(subjectStore.getProduct());
        if (!this.hasSubscription) {
          InAppBilling.listOwnedSubscriptions().then(list => {
            this.hasSubscription = list.includes(subjectStore.getProduct());
          });
        }
        await InAppBilling.close();
    }
    if (Platform.OS === 'ios') {
      let receiptData = await getReceipt(subjectStore.getProduct());
      let isValid = await this.validate(receiptData);
      this.hasSubscription = isValid;
      if (!isValid) {
        InAppUtils.receiptData(async (error, receiptResponse) => {
          if (error) {
            // Alert.alert('iTunes feil', 'Kvittering ikke funnet.');
          } else {
            this.hasSubscription = await this.validate(receiptResponse);
            setReceipt(receiptResponse, subjectStore.getProduct());
          }
        });
      }
    }
    if (env.IS_ENV_DEVELOPMENT) {
      this.hasSubscription = true;
    }
  }

  restore = async () => {
    if (Platform.OS === 'ios') {
      InAppUtils.restorePurchases((error, response) => {
        if(error) {
          Alert.alert('En feil har dessverre oppstått ', 'Vi fikk ikke kontakt med iTunes.');
        } else {
          if (response.length === 0) {
            Alert.alert('Ingen kvittering funnet', "Abonnement ikke gjenopprettet-");
            return;
          }
          response.forEach((purchase) => {
            if (purchase.productIdentifier === subjectStore.product) {
              Alert.alert('Gjenopprettelse gikk fint', 'Vi har gjenopprettet dine kjøp.');
              // Handle purchased product.
              setReceipt(purchase.transactionReceipt);
              this.validate(purchase.transactionReceipt).then(isValid => {
                this.hasSubscription = isValid;
              });
            }
          });
        }
      });
    }
  }

  purchaseMade = purchase => {
    this.hasSubscription = true;
    setReceipt(purchase);
  }

  restoreMade = purchase => {
    this.validate(receiptData).then((isValid) => {
      this.hasSubscription = isValid;
      setReceipt(purchase);
    });
  }

  async validate(receiptData) {
    if (Platform.OS === 'ios') {
      try {
          const validationData = await validateReceipt(receiptData);
          const kjemiaReceipts = validationData['latest_receipt_info'].filter(e = e => e.product_id === subjectStore.getProduct());
          const expiresDate = parseInt(kjemiaReceipts[kjemiaReceipts.length - 1].expires_date_ms);
          const date = new Date();
          result = expiresDate > date.getTime();
          return result;
      } catch(err) {
          console.log(err.valid, err.error, err.message);
          return false;
      }
    }
  }
}

decorate(SubscriptionStore, {
  hasSubscription: observable,
  subscriptionId: observable,
  init: action,
  purchaseMade: action,
  restoreMade: action,
})

export default new SubscriptionStore();