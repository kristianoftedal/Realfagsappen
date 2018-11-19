import one from '../../images/levels/geografi/1.png';
import two from '../../images/levels/geografi/2.png';
import three from '../../images/levels/geografi/3.png';
import four from '../../images/levels/geografi/4.png';
import five from '../../images/levels/geografi/5.png';
import six from '../../images/levels/geografi/6.png';
import seven from '../../images/levels/geografi/7.png';
import eight from '../../images/levels/geografi/8.png';
import nine from '../../images/levels/geografi/9.png';
import ten from '../../images/levels/geografi/10.png';
import eleven from '../../images/levels/geografi/11.png';
import twelve from '../../images/levels/geografi/12.png';
import thirteen from '../../images/levels/geografi/13.png';
import fourteen from '../../images/levels/geografi/14.png';
import fifteen from '../../images/levels/geografi/15.png';
import blackhole from '../../images/levels/kjemi1/sorthull.png';

const levels = [
  {
    value: 'n00b',
    score: 0,
    text: 'Nybegynner',
  },
  { 
    value: 'Kornproduksjon',
    score: 500,
    imageSource: one,
    text: 'Korn dyrkes for å kunne benyttes som føde for mennesker og dyr. I 2018 dyrket Norge ca. 200.000 tonn matkorn. Åkerlandskapet er synlig, særlig på flatbygdene i Norge og er en del av primærnæringen. Færre mennesker jobber i landbruket, men mekaniseringen har gjort at selvforsyningsgraden i Norge ligger på 50%.'
  },
  { 
    value: 'Husdyrhold',
    score: 1300,
    imageSource: two,
    text: 'Husdyr er dyr som har blitt domestisert for å tilfredsstille menneskelige behov, primært gjennom avl. Typiske eksempler er gårdsdyr som ku, sau, geit, gris, osv. Disse brukes hovedsakelig til henholdsvis kjøtt- og melkeproduksjon. Slik type produksjon finner vi i fjell- og dalstrøk, og i andre områder der det er ugunstig å drive med kornproduksjon.'
  },
  { 
    value: 'Fiskerinæring',
    score: 2300,
    imageSource: four,
    text: 'Norsk fiskerihistorie går tilbake til steinalderen. De første innvandrerne til Norge oppdaget tidlig at det utenfor kysten, fantes rike forekomster av fisk, sel, og hval. På 1100-tallet startet eksporten av tørket torsk og sild til England. Norge fikk et eget fiskeridepartement i 1946, og i dag eksporterer fiskerinæringen fisk til hele verden. Mange steder i verden anses norsk laks som den fineste råvare. Fiske er fortsatt en av Norges største eksportnæringer, og er en del av primærnæringen.'
  },
  {
    value: 'Hogst- og tømmerindustri',
    score: 4500,
    imageSource: three,
    text: 'Skogen har fra de eldste tider vært en viktig del av næringsgrunnlaget i Norge. Den gav mat, brensel, redskaper og hus. Allerede på 1300-tallet startet eksporten av trelast fra Norge til andre land i Europa. I dag antas det at ca. 30.000 mennesker er involvert i hogst- og tømmerindustrien i Norge, og dette er en del av primærnæringen.'
  },
  {
    value: 'Kobbergruver',
    score: 7000,
    imageSource: six,
    text: 'Kobber har blitt brukt i de eldste av sivilisasjoner, og kan spores over 10.000 år tilbake. Kobber er et viktig krigsmetall, brukt til framstilling av for eksempel kanoner. C14-dateringer fra Meråker i Nord-Trøndelag viser at kobbergruver har eksistert i Norge siden slutten av 1100-tallet. Et av de mest kjente kobberverkene i Norge ligger på Røros, og regnes som en del av det som kalles for Trondheimfeltet.'
  },
  {
    value: 'Sølvgruver',
    score: 10000,
    imageSource: seven,
    text: 'De første forsøkene på å utvinne sølv fra gruver er 6.000 år gamle. Bevisene tyder på at dette startet i Anatolia ved Middelhavet. I Norge derimot, startet sølvjakten rundt år 1600. Kongen av Norge og Danmark, Christian IV, etablerte byen Kongsberg i Buskerud etter oppdagelsen av sølv i 1623.  I dag er 300 gruvesjakter fortsatt intakt.'
  },
  {
    value:'Kullgruver',
    score: 15000,
    imageSource: eight,
    text: 'En frodig landvegetasjon er et krav for dannelsen av kull. De største ansamlingene av kull har blitt dannet når jorden har hatt et varmt og fuktig klima, hovedsakelig i de geologiske periodene karbon og kritt. I Norge er det svært begrensede mengder kull. De første kullfunnene ble gjort på 1800-tallet, men kommersielt utvinnbare reserver finnes kun på Svalbard.'
  },
  {
    value: 'Papir- og pappindustri',
    score: 20000,
    imageSource: eleven,
    text: 'På slutten av 1800-tallet ble det etablert en rekke tresliperier, celluloseanlegg og papirfabrikker i landet. I Norge har det meste av papirindustrien vært lokalisert på Østlandet og i Trøndelag. Områder som også har de mest imponerende skogsarealene. Mye av produksjonen har skjedd ved elvenes utløp, særlig der Drammensvassdraget og Glomma renner ut. Dette fordi man ville fløte tømmer direkte til fabrikken og eksportere det ferdige produktet ut i verden. Norske Skog er verdens nest største produsent av avispapir.'
  },
  {
    value: 'Turistnæring',
    score: 25000,
    imageSource: thirteen,
    text: 'I 1868 ble Den Norske Turistforening stiftet for å arbeide med fotturismens utbredelse i Norge. Dette var starten på en storsatsning innen norsk turisme. Etterhvert kom det cruise-skip som reiste langs Vestlandet, samtidig som turister på bil- og campingferier i Norge vokste. Etter 1945 har det vært en eksplosiv vekst i reiselivet, dette gjelder både turisme innlands og utenlands.'
  },
  {
    value: 'Aluminiumsverk',
    score: 30000,
    imageSource: ten,
    text: 'Norge er blant verdens største aluminiumprodusenter. Mye av aluminiumen som utvinnes i Norge kommer fra gruveselskaper i Brasil som utvinner aluminiumoksid. På grunn av den rikelig tilgangen på elektrisk energi, som i Norge hovedsakelig kommer fra vannkraft, fremstilles aluminiumen ved aluminiumsverkene på Vestlandet. Norsk Hydro, Alcoa og Alcan har til sammen sju smelteverk fra Lista i sør, til Mosjøen i nord. Produksjon av aluminium startet i Norge i 1908. Ca. 3.000 mennesker jobber i aluminiumsnæringen.'
  },
  { 
    value: 'Vannkraft',
    score: 37000,
    imageSource: five,
    text: 'Vannkraft har vært hovedkilden til produksjonen av energi og strøm i Norge de siste 100 årene. På grunn av fjellandskapet og den store nedbørsmengder i Norge, har utbygging av vannkraft vært spesielt gunstig her til lands. Dette var en forutsetting for industrialiseringen av Norge på begynnelsen av 1900-tallet. I Norge kommer mellom 95% og 99% av all elektrisk energiproduksjon fra den fornybare energikilden vannkraft.'
  },
  { 
    value: 'Kunstgjødsel',
    score: 45000,
    imageSource: twelve,
    text: 'Norsk Hydro har siden 1930-årene vært en av verdens største produsenter av kunstgjødsel. De norske vitenskapsmennene Kristian Birkeland og Sam Eyde utviklet en metode for å høste nitrogen fra luft, og denne metoden dannet grunnlaget for selskapet. Ammoniakk dannes fra nitrogen og brukes til å produsere næringssalter som plantene trenger for å vokse. Dette har revolusjonert matproduksjonen, og dermed bidratt til befolkningsvekst.'
  },
  { 
    value: 'Gassutvinning',
    score: 60000,
    imageSource: nine,
    text: 'I 1959 ble det gjort et stort naturgassfunn i Nederland. Dette funnet gjorde at store foretak kontaktet Norge med ønske om å lete etter gass utenfor norskekysten. Gass ble funnet, og det viste seg å være snakk om enorme gassreserver. De fleste felt som produserer gass, produserer også olje. I dag er det 56 gassfelt i produksjon, eller under utbygging i Norge. Åtte av disse drives kun som gassfelt.'
  },
  { 
    value: 'Oljeproduksjon',
    score: 75000,
    imageSource: fourteen,
    text: 'Norsk oljehistorie handler om funn og utvinning av petroleum på norsk sokkel fra 1960-årene og frem til i dag. Oljevirksomheten ble en dominerende faktor i norsk økonomi, og er i dag Norges største næring målt i verdiskaping, statlige inntekter, investeringer og eksportverdi. Totalt er det om lag 50 store og små oljefelt i produksjon, eller under utbygging.'
  },
  { 
    value: 'Teknologi og forskning',
    score: 90000,
    imageSource: fifteen,
    text: 'Norge bruker rundt 50 milliarder kroner på forskning og utvikling i året. Det tilsvarer 1,65% av bruttonasjonalproduktet (BNP). Andelen har vært den samme i mange år. Om lag 70.000 ansatte jobber med forskning og utvikling i Norge. Norge bli mer og mer avhengig av forskning og inntektene fra dette, når det fossile brenslet tar slutt. Gratulerer med å ha oppnådd det høyeste nivået i Geografi-appen!'
  },
  { 
    value: 'Sort hull',
    score: 30000000000000,
    imageSource: blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
