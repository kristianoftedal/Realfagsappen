import ammoniakk from '../../images/levels/kjemi1/AMMONIAKK.png';
import benzen from '../../images/levels/kjemi1/BENZEN.png';
import eddik from '../../images/levels/kjemi1/EDDIK.png';
import etanol from '../../images/levels/kjemi1/ETANOL.png';
import etylbutanat from '../../images/levels/kjemi1/ETYLBUTANAT.png';
import hcl from '../../images/levels/kjemi1/Hcl.png';
import hydrogen from '../../images/levels/kjemi1/HYDROGEN.png';
import karbon from '../../images/levels/kjemi1/KARBON.png';
import metan from '../../images/levels/kjemi1/METAN.png';
import nacl from '../../images/levels/kjemi1/NaCl.png';
import naoh from '../../images/levels/kjemi1/NaOH.png';
import o4 from '../../images/levels/kjemi1/O4.png';
import oksonium from '../../images/levels/kjemi1/OKSONIUM.png';
import oksygen from '../../images/levels/kjemi1/OKSYGEN.png';
import vann from '../../images/levels/kjemi1/VANN.png';
import blackhole from '../../images/levels/kjemi1/yarn-error.jpeg';

const levels = [
  {
    value: 'Kjemi1-noob',
    score: 0,
    text: 'Nybegynner',
  },
  { 
    value: 'Hydrogen',
    score: 300,
    imageSource: hydrogen,
    text: 'Hydrogen er det minste og letteste atomet, med en atommasse på 1,008 u. Hydrogen har ett valenselektron, og inngår dermed i flere millioner forbindelser. Når hydrogen har gitt fra seg et elektron, kalles det for et proton. Protoner avgis og tas opp, i de fleste syre-base-reaksjoner. Hydrogen lærer du mer om i alle kapitlene i Kjemi 1.'
  },
  { 
    value: 'Karbon',
    score: 1000,
    imageSource:  karbon,
    text: 'Karbon er grunnstoff nummer 6 i periodesystemet, og har en atommasse på 12,01 u. Karbon har fire valenselektroner. Det gjør at karbon har evnen til å ta opp og gi fra seg elektroner. Karbonatomet er det sentrale atomet i organisk kjemi – kjemien som inngår i alt liv. Karbon møter du på i flere kapitler i Kjemi 1.',
  },
  { 
    value: 'Oksygen',
    score: 2000,
    imageSource:  oksygen,
    text: 'Oksygen er grunnstoff nummer 8 i periodesystemet, og har en atommasse på 16,00 u. Dersom to oksygenatomer går sammen dannes det en upolar kovalent binding, og man får dannet oksygengass. Oksygengass er gassen vi puster inn, og gjør det mulig kroppen vår å forbrenne næringen vi inntar. Oksygen møter du på i flere kapitler i Kjemi 1.',
  },
  {
    value: 'Metan',
    score: 4000,
    imageSource:  metan,
    text: 'Metan består av ett karbonatom og fire hydrogenatomer. Metan har en atommasse på 16,04 u. Metan er den enkleste organiske forbindelsen, og regnes som et alkan. Metan regnes også som en drivhusgass. Metan møter du i kapitelet «Organisk kjemi».',
  },
  {
    value: 'Ammoniakk',
    score: 7000,
    imageSource:  ammoniakk,
    text: 'Ammoniakk består av ett nitrogenatom og tre hydrogenatomer, og har en atommasse på 17,03 u. Ammoniakk er en giftig gass med stinkende lukt. Den regnes som en svak base, og er en dipol. Ammoniakk har historisk sett vært sentral for norsk industri, da Norsk Hydro brukte ammoniakk i produksjonen av kunstgjødsel. Ammoniakk lærer du mer om i «Kjemisk likevekt» og «Syrer og baser».'
  },
  {
    value:'Vann',
    score: 10000,
    imageSource:  vann,
    text: 'Vann består av ett oksygenatom og to hydrogenatomer, og har en atommasse på 18,01 u. Alle kjenner til trivialnavnet vann, og svært få bruker det kjemiske navnet «Dihydrogenmonoksid». Vann utgjør mesteparten av vekten til de fleste levende organismer, og inngår i svært mange kjemiske reaksjoner. Vann møter du på i alle kapitler i Kjemi 1.'
  },
  {
    value:'Oksonium',
    score: 15000,
    imageSource:  oksonium,
    text: 'Oksonium har en atommasse på 19,00 u. Når en sterk eller svak syre gir fra seg et proton, kan dette bli tatt opp av et vannmolekyl (H2O), og danne oksonium (H3O+). Konsentrasjonen av oksonium i en løsningen forteller oss hvilken pH løsningen har. Oksonium møter du på i kapitlet «Syrer og baser».'
  },
  {
    value:'Saltsyre',
    score: 20000,
    imageSource:  hcl,
    text: 'Saltsyre, også kjent som hydrogenklorid, er en sterk syre med en atommasse på 36,46 u. Saltsyre finnes naturlig i magesekken, der den er ansvarlig for å drepe bakterier og aktivere enzymet pepsin. Saltsyre brukes mye i industrien. Ofte som katalysator i kjemiske reaksjoner. Saltsyre møter du i kapitelet «Syrer og baser».'
  },
  {
    value:'NaOH',
    score: 30000,
    imageSource:  naoh,
    text: 'Natriumhydroksid er bedre kjent under navnet lut. NaOH er en sterk base, med en atommasse på 40,00 u. Natriumhydroksid har svært mange bruksområder. Den brukes mye i industrien, blant annet i produksjonen av papir. NaOH er en så sterk base at den kan brukes til å løse opp metaller, og rense kjøtt fra dyreknokler. NaOH møter du i kapitelet «Syrer og baser».',
  },
  {
    value:'Etanol',
    score: 50000,
    imageSource:  etanol,
    text: 'Etanol er en enverdig, primær alkohol med atommasse 46,07 u. OH-gruppen i molekylet bidrar til at etanol er et godt, polart løsemiddel. Samtidig har etanol blitt brukt som rusmiddel de siste 5.000 årene. Etanol er også utgangsstoff for flere andre organiske stoffer, for eksempel etanal, eddiksyre og dietyleter. Etanol møter du i kapitelet «Organisk kjemi».'
  },
  { 
    value: 'NaCl',
    score: 100000,
    imageSource:  nacl,
    text: 'Natriumklorid er bedre kjent under navnet bordsalt, og har en atommasse på 58,44 u. Natriumklorid består av to ioner, det positivt ladde natriumkationet, og det negative kloranionet. Sammen danner disse en gitterstruktur som er typisk for salter. NaCl møter igjen i «Uorganisk kjemi» og «Kjemiske bindinger».',
  },
  { 
    value: 'Eddiksyre',
    score: 200000,
    imageSource:  eddik,
    text: 'Eddiksyre er en svak syre, med karakteristisk lukt, og en atommasse på 60,05 u. Eddiksyre finner vi både på kjøkkenbenken, i industrien, og til og med i kroppen. I en løsning av eddiksyre, er det så lite som 5% av eddiksyremolekylene som gir fra seg et proton, og blir til acetat. Resten befinner seg fremdeles som eddiksyre. Eddiksyre møter du i kapitelet «Syrer og baser».',
  },
  { 
    value: 'Benzen',
    score: 500000,
    imageSource:  benzen,
    text: 'Benzen er et aromatisk hydrokarbon med en atommasse på 78,11 u. Benzen skiller seg fra andre alkener ved at elektronene er delokaliserte. De befinner seg ikke på et spesifikt sted, men hopper fra karbonatom til karbonatom. Benzen brukes ofte som upolart løsemiddel. Benzener møter du i «Organisk kjemi».',
  },
  { 
    value: 'Svovelsyre',
    score: 750000,
    imageSource:  o4,
    text: 'Svovelsyre er en sterk, to-protisk syre, med atommasse 98,08 u. Svovelsyre er en oksosyre, og er kjent for sin evne til å trekke vann ut av kjemiske stoffer. Den brukes dermed mye i produksjonen av nye kjemiske forbindelser. Svovelsyre møter du i «Uorganisk kjemi» og «Syrer og baser».',
  },
  { 
    value: 'Etylbutanat',
    score: 1000000,
    imageSource:  etylbutanat,
    text: 'Etylbutanat er en ester, satt sammen av alkoholen etanol og karboksylsyren butansyre, og har en atommasse på 116,16 u. I likhet med de fleste estere har etylbutanat en god aroma – lukten av ananas. Etylbutanat møter du i «Organisk kjemi». Gratulerer med å ha oppnådd det høyeste nivået i Kjemi 2-appen!',
  },
  { 
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
