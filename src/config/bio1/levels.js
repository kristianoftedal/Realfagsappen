import one from '../../images/levels/bio1/1.png';
import two from '../../images/levels/bio1/2.png';
import three from '../../images/levels/bio1/3.png';
import four from '../../images/levels/bio1/4.png';
import five from '../../images/levels/bio1/5.png';
import six from '../../images/levels/bio1/6.png';
import seven from '../../images/levels/bio1/7.png';
import eight from '../../images/levels/bio1/8.png';
import nine from '../../images/levels/bio1/9.png';
import ten from '../../images/levels/bio1/10.png';
import eleven from '../../images/levels/bio1/11.png';
import twelve from '../../images/levels/bio1/12.png';
import thirteen from '../../images/levels/bio1/13.png';
import fourteen from '../../images/levels/bio1/14.png';
import fifteen from '../../images/levels/bio1/15.png';
import blackhole from '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: 'Bio1-elev',
    score: 0,
    text: 'Nybegynner',
  },
  {
    value: 'Lysosomer',
    score: 500,
    imageSource: one,
    text: 'Lysosomer finnes bare i dyreceller og er cellens «søppelkasse». Lysosomer er væskefylte vesikler som bryter ned organiske molekyler og skadde organeller. Miljøet i lysosomene er surt (pH 5), og inneholder en rekke enzymer som jobber best ved denne pH-verdien. Lysosomer leser du mer under «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Ribosomer',
    score: 1300,
    imageSource:  two,
    text: 'Ribosomer er organeller som består av 2 sammensatte enheter. Ribosomene er en viktig del av proteinsyntesen og bygger proteinene i cellen sammen med mRNA og tRNA. Veldig mange av oppgavene som utføres i cellene gjøres av proteiner, og ingen celler kan overleve uten. Ribosomer finnes derfor i både prokaryote og eukaryote celler. Ribosomer leser du mer om under «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Mikrotubuli',
    score: 2300,
    imageSource:  three,
    text: 'Mikrotubuli er en del av cytoskjelettet. Mikrotubuli danner et slags «veisystem» inni cellen, som det fascinerende motorproteinet kinesin frakter vesiklene langs. Hvis du ikke har sett dette før bør du søke det opp på YouTube. Mikrotubuli er også hovedstrukturen i eukaryote flageller. Miktrotubuli lærer du mer om i kapitlet «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Vesikkel',
    score: 4500,
    imageSource:  four,
    text: 'En vesikkel, også kalt en blære, er en liten sfæreformet struktur som flyter rundt i cytosol. Vesiklene er omgitt av et dobbelt fettlag, akkurat som cellemembranen. Inni vesiklene er det viktige molekyler som fraktes rundt i cellen. Vesikler lærer du mer om i «Cellens oppbygning og membrantransport», «Immunologi» og «Komparativ fysiologi og formering».',
  },
  {
    value: 'Flagell',
    score: 7000,
    imageSource:  five,
    text: 'En flagell er en lang, tynn, hale som henger utenpå cellen, og brukes til bevegelse. Flagellen omtales som en organelle. Den flagellerte cellen vi kjenner best er antaglivis sædcellen. Den bruker flagellen sin til å svømme til egget. Flagellerte celler kan du lese mer om i «Cellens oppbygning og membrantransport», «Planters formering» og «Komparativ fysiologi og formering».',
  },
  {
    value:'Cellevegg',
    score: 10000,
    imageSource:  six,
    text: 'Celleveggen er en solid «mur» som omgir planteceller, bakterier, sopp og noen protister. I planteceller er celleveggen laget av cellulose, mens hos bakterier er celleveggen laget av et stoff som heter peptidoglykan. Celleveggen er der for å beskytte cellen, og i planter hindrer celleveggen plantecellen i å ta opp så mye vann at den sprekker. Cellevegger kan du lese mer om i «Cellens oppbygning og membrantransport» og «Planteanatomi og -fysiologi».'
  },
  {
    value:'Cellemembran',
    score: 15000,
    imageSource:  seven,
    text: 'Alle celler består av en cellemembran som skiller innsiden av cellen fra utsiden av cellen. Cellemembranen bestemmer hva som får komme inn i cellen, og hva som får slippe ut av cellen. Dette gjør det mulig for cellen å danne et miljø på innsiden, som er annerledes fra miljøet rundt. Cellemembranen lærer du mer om i kapitlene «Cellens oppbygning og membrantransport» og «Nerver, hormoner og sansefysiologi.',
  },
  {
    value:'Glatt endoplasmatisk retikulum',
    score: 20000,
    imageSource:  eight,
    text: 'Glatt endoplasmatisk retikulum er en del av endomembransystemet. Glatt ER er ikke bundet til ribosomer, noe som gjør overflaten glatt, derav navnet. Glatt ER står for mye av transporten inn og ut av cellen. Glatt ER kan du lese mer om i «Cellens oppbygning og membrantransport».'
  },
  {
    value:'Røff enoplasmatisk retikulum',
    score: 25000,
    imageSource:  nine,
    text: 'Røft endoplasmatisk retikulum er også en del av endomembransystemet. Røft ER er bundet til ribosomer, og dette gjør overflaten «røff». Fordi røft ER er bundet til ribosomer driver den proteinsyntese, i tillegg til å transportere molekyler inn og ut av cellen. Røft ER kan du lese mer om i «Cellens oppbygning og membrantransport».',
  },
  {
    value:'Golgiapparatet',
    score: 30000,
    imageSource:  ten,
    text: 'Golgiapparatet er en organelle som ofte refereres til som cellens «postkontor». Dette er fordi en av golgiapparatets funksjoner er å sortere innkommende og utgående vesikler i cellen. Golgiapparatet regnes som en del av endomembransystemet. Golgiapparatet kan du lese mer om under «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Vakuoler',
    score: 37000,
    imageSource:  eleven,
    text: 'Vakuoler er store væskefylte rom vi finner inni planteceller som kan utgjøre opp mot 95% av cellens volum. Saften i vakuolen består hovedsakelig av vann, men kan også inneholde giftstoffer som skal hindre dyr i å spise planten. Vakuoler leser du mer om i «Cellens oppbygning og membrantransport» og «Planteanatomi og -fysiologi».',
  },
  {
    value: 'Kloroplaster',
    score: 45000,
    imageSource:  twelve,
    text: 'Kloroplaster er organeller vi bare finner i planteceller. Det er i kloroplastene fotosyntesereaksjonen skjer. Kloroplastene inneholder et pigment som heter klorofyll. Klorofyll kan ved hjelp av sollys, karbondioksid og vann danne energi i plantene. Oksygen dannes som et biprodukt. Kloroplaster kan du lese mer om i «Cellens oppbygning og membrantransport» og «Planteanatomi og -fysiologi».',
  },
  {
    value: 'Mitokondrier',
    score: 60000,
    imageSource:  thirteen,
    text: 'Mitokondriene er organeller i eukaryote celler som ofte omtales som cellenes «kraftverk». Oksygenet vi puster inn brukes i mitokondriene til å danne det energirike molekylet ATP. Mitokondrier kan du hovedsakelig lese mer om i «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Plasmider',
    score: 75000,
    imageSource:  fourteen,
    text: 'Plasmider er små ringformede DNA-molekyler som vi hovedsakelig finner i prokaryote celler. Vi finner også plasmider i de eukaryote cellenes mitokondrier og kloroplaster. Dette er noen av funnene som støtter endosymbioseteorien. Endosymbioseteorien som du kan lese mer om i «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Cellekjernen',
    score: 90000,
    imageSource:  fifteen,
    text: 'Cellekjernen er en organelle vi bare finner hos eukaryote celler. Prokaryote celler har ikke cellekjerne. Eukaryot betyr «ekte kjerne», og inni cellekjernen ligger DNA-molekylet godt beskyttet mot ytre påvirkninger. DNA-molekylet inneholder alle organismens gener og må ikke ødelegges. Gratulerer med å ha oppnådd det høyeste nivået i Biologi 1-appen!',
  },
  {
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
