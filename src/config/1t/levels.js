import one from '../../images/levels/1t/1.png';
import two from '../../images/levels/1t/2.png';
import three from '../../images/levels/1t/3.png';
import four from '../../images/levels/1t/4.png';
import five from '../../images/levels/1t/5.png';
import six from '../../images/levels/1t/6.png';
import seven from '../../images/levels/1t/7.png';
import eight from '../../images/levels/1t/8.png';
import nine from '../../images/levels/1t/9.png';
import ten from '../../images/levels/1t/10.png';
import eleven from '../../images/levels/1t/11.png';
import twelve from '../../images/levels/1t/12.png';
import thirteen from '../../images/levels/1t/13.png';
import fourteen from '../../images/levels/1t/14.png';
import fifteen from '../../images/levels/1t/15.png';
import blackhole from '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: '1t-elev',
    score: 0,
    text: 'Nybegynner',
  },
  { 
    value: 'Kule',
    score: 500,
    imageSource: one,
    text: 'En kule er en perfekt symmetrisk figur som ofte omtales som en sfære. Kjente eksempler på kuler er klinkekuler, baller og planeter. Det er derimot svært vanskelig å lage en perfekt kule, så vi finner de ikke i naturen.'
  },
  { 
    value: 'Halvkule',
    score: 1300,
    imageSource:  eight,
    text: 'En halvkule, også kalt hemisfære, oppstår når en kule deles i to like store deler. Det mest brukte eksemplet på halvkuler er inndelingen av jorda i den nordlige og sørlige halvkulen.'
  },
  { 
    value: 'Ellipsoide',
    score: 2300,
    imageSource:  three,
    text: 'En ellipsoide er en tredimensjonal geometrisk figur som kan sees på som den tredimensjonale utgaven av en ellipse. Det er mer korrekt å kalle jorda og andre planeter for ellipsoider, siden de er litt større ved ekvator enn det en kule ville vært.'
  },
  {
    value: 'Kjegle',
    score: 4500,
    imageSource:  four,
    text: 'Kjegler finner vi mange varianter av i naturen, selv om ingen objekter i naturen er perfekte kjegler. Grantrær, fjell og skjell danner ofte former som ligner på kjegler. Den mest vanlige kjeglen å observere om sommeren, er kjeksen på en kroneis.'
  },
  {
    value: 'Kube',
    score: 7000,
    imageSource:  five,
    text: 'Kuber forbindes ofte med terninger, men du trenger ikke se deg rundt lenge før du finner andre eksempler på kuber. Både isbiter og sukkerbiter er ofte formet som kuber. En kube har 6 like store sider, og alle disse er perfekte kvadrater.'
  },
  {
    value: 'Parallellepiped',
    score: 10000,
    imageSource:  six,
    text: 'Parallellepipeder finner vi ikke i naturen, men de har blitt brukt som inspirasjon av mennesker for å lage ulike gjenstander i lang tid. For elever er det nok viskelæret som minner om denne strukturen. I moderne tid har denne formen blitt brukt til å lage hus, men da av estetiske årsaker fremfor arkitektoniske.'
  },
  {
    value: 'Sylinder',
    score: 15000,
    imageSource:  seven,
    text: 'Sylinder er en form som dukker ofte opp i naturen. Trestammer og stilker er nok de mest kjente eksemplene. Sylinderformen dukker ofte opp i gjenstander skapt av mennesker. Brusbokser, glass, søppelbøtter og Pringles-bokser har ofte sylinderform.'
  },
  {
    value: 'Pyramide',
    score: 20000,
    imageSource:  two,
    text: 'Pyramider er lette å kjenne igjen, da de ble brukt av mennesker i det gamle Eqypt som gravkamre for faraoene. Vi har funnet over 130 pyramider i Eqypt og minst 300 til rundt omkring i verden. Årsaken til at pyramidestrukturen ble valgt, er mest sannsynlig for at den døde faraoen lettere skulle kunne stige opp mot himmelen.'
  },
  {
    value: 'Rektangulært prisme',
    score: 25000,
    imageSource:  nine,
    text: 'Rektangulære prismer er figurer vi kan kjenne igjen fra hverdagen, som for eksempel et akvarie eller esken til en frokostblanding. Andre former for rektangulære prismer er høyblokker eller containere.'
  },
  {
    value: 'Trekantet prisme',
    score: 30000,
    imageSource:  ten,
    text: 'Prismer brukes svært ofte i optikk. Et kjent eksperiment er å sende lys gjennom et prisme slik at prismet bryter lyset, og gir oss alle de synlige fargene i regnbuen. I hverdagen ser vi et trekantet prisme hver gang vi er i godteriavdelingen og plukker opp en Toblerone.'
  },
  { 
    value: 'Tetraeder',
    score: 37000,
    imageSource:  eleven,
    text: 'Tetraeder forekommer i naturen, men oftest på steder der vi ikke ser dem. I molekyler med elektronparbindinger, som for eksempel i metan, er strukturen et perfekt tetraeder. Dette er for å få mest mulig avstand mellom alle hydrogenatomene.'
  },
  { 
    value: 'Oktaeder',
    score: 45000,
    imageSource:  twelve,
    text: 'Oktaeder er en form som svært verdifulle diamanter, krystaller og juveler har. De kan se ut som to pyramider satt sammen. Et kjent eksempel er en variant av Rubiks kube formet som et oktaeder, som er mye mer komplisert enn en standard Rubiks kube.'
  },
  { 
    value: 'Dodekaeder',
    score: 60000,
    imageSource:  thirteen,
    text: 'Dodekaeder finner vi i naturen i enkelte frukter. Det mest kjente eksempelet er granateplefrø og kvartsstener. Et tilfelle man muligens opplever hver dag er strukturen vi ser hos såpebobler. Disse har faktisk en klassisk dodekaeder struktur.'
  },
  { 
    value: 'Ikosaeder',
    score: 75000,
    imageSource:  fourteen,
    text: 'Vi finner både naturlige og syntetiske ikosaeder. Ikosaeder-formede spillterninger er vanlig i mange rollespill, blant annet det kjente spillet Dungeons & Dragons. Mange virus, som for eksempel herpesviruset, har skall som er formet som et ikosaeder.'
  },
  { 
    value: 'Torus',
    score: 90000,
    imageSource:  fifteen,
    text: 'Mange forskere antar at universet er formet som en torus. Gratulerer med å ha oppnådd det høyeste nivået i 1T-appen, dette bør feires med et torus-formet bakverk – en donut!'
  },
  { 
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
