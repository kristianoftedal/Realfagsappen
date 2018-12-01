const one = '1.png';
const two = '2.png';
const three = '3.png';
const four = '4.png';
const five = '5.png';
const six = '6.png';
const seven = '7.png';
const eight = '8.png';
const nine = '9.png';
const ten = '10.png';
const eleven = '11.png';
const twelve = '12.png';
const thirteen = '13.png';
const fourteen = '14.png';
const fifteen = '15.png';
const blackhole = '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: 'S1-elev',
    score: 0,
    text: 'Nybegynner',
  },
  { 
    value: 'Thales',
    score: 500,
    imageSource: one,
    text: 'Thales er den første matematikeren vi kjenner til, men ingen av hans verk har overlevd frem til i dag, derfor er det vanskelig å være sikker på hans matematiske oppdagelser. Det antas at han bidro mye til geometrien. Han blir ofte sett på som den første vitenskapsmannen, og er berømt for å være den første til å forutse en solformørkelse i år 585 f.Kr.'
  },
  { 
    value: 'Pythagoras',
    score: 1300,
    imageSource:  two,
    text: 'Pythagoras mente at alle ting er grunnleggende matematisk, og kan forstås som tall. Han er en av de første matematikere til å påstå at Jorda er rund, men er mest kjent for arbeidet med rettvinklede trekanter. Han er også kjent for arbeidet med astronomi, og er en av de første til å mene at det var Jorda som dreiet og ikke himmelhvelvingen.'
  },
  { 
    value: 'Aristoteles',
    score: 2300,
    imageSource:  three,
    text: 'Aristoteles var en gresk filosof og naturforsker. Hans verk omfatter en rekke emner, blant annet matematikk, biologi, filosofi og poesi, samt logikk og etikk. Hans største bidrag til matematikken var hans evne til å angripe problemer systematisk og logisk, noe som la grunnlaget for videre matematiske oppdagelser.'
  },
  {
    value: 'Evklid',
    score: 4500,
    imageSource:  four,
    text: 'Evklid er mest kjent for verket; Elementene, som inneholder mange definisjoner, postulater og beviser i det som kalles euklidsk geometri. Målet med bøkene var å kunne bevise Pythagoras’ læresetning. Man er usikker om Evklid er en mann eller en samling av mange menn, da navnet Evklid betyr «stor respekt».'
  },
  {
    value: 'Arkimedes',
    score: 7000,
    imageSource:  five,
    text: 'Arkimedes var matematiker, fysiker og oppfinner. Ved å anta at noe var riktig, for å så gå frem for å motbevise det, ble han ført nærmere sannheten. Denne innsnevringsmetoden brukte han for å bestemme tallverdien til π (pi). Noen av Arkimedes’ matematiske bevisføringer inkluderer bruk av infinitesimaler som ikke er ulik dem vi finner i moderne integralregning.'
  },
  {
    value: 'Hipparkhos',
    score: 10000,
    imageSource:  six,
    text: 'Hipparkhos var astronom og matematiker. Han gjorde en presis beregning av årets lengde – 365 dager, 5 timer og 55 minutter. Han målte månedens lengde til 29 dager, 12 timer, 44 minutter og 2,5 sekunder – et avvik på ett sekund fra det korrekte. Han beregnet avstanden til sola, og fant at den er kortest 4. januar, og lengst 4. juli. For å gjøre disse beregningene måtte han gjøre forbedringer til trigonometrien.'
  },
  {
    value: 'Diofant',
    score: 15000,
    imageSource:  seven,
    text: 'Diofant arbeidet mye med tallteori, og regnes som algebraens far. Hans hovedverk, Arithmetica, inneholder de tidligste tilfellene av det vi kaller synkopert algebra. Synkopert algebra er bruken av forskjellige symboler for ukjente størrelser.'
  },
  {
    value: 'Liu Hui',
    score: 20000,
    imageSource:  eight,
    text: 'Liu Hui var matematiker i oldtidens Kina. Hans største prestasjon var beregningen av pi ved hjelp av en metode som senere er blitt kjent som Gauss-eliminasjon. I tillegg la han frem gode beregningsmetoder for volumer av prismer, pyramider, sylindere og andre romfigurer.'
  },
  {
    value: 'Hypatia',
    score: 25000,
    imageSource:  nine,
    text: 'Hypatia er regnet for å være den første store kvinnelige matematikeren og astronomen. Hun var lærer ved en av skolene i Alexandria, og bidro mye til det intellektuelle fellesskapet i byen. Hypatia ble myrdet, og årsaken til dette har vært mye diskutert. Det er foreslått at mordet på henne var politisk motivert, mens andre mener hun ble myrdet av en gruppe som påstod at hun drev med svart magi.'
  },
  {
    value: 'Aryabhata',
    score: 30000,
    imageSource:  ten,
    text: 'Aryabhata arbeidet med algebra og trigonometri. Dette arbeidet brukte europeerne 1.000 år senere som grunnlag for derivasjon og integrasjon. Han var den første i historien som fremla at verden var en kule, hele 1.000 år før Kopernikus. Aryabhata brukte de siste årene av livet sitt til å forstå planetbevegelse, og var den første til å gi gode forklaringer på måne- og solformørkelser.'
  },
  { 
    value: 'Brahmagupta',
    score: 37000,
    imageSource:  eleven,
    text: 'Brahmagupta var en indisk matematiker og astronom. Som matematiker er han mest kjent for å ha innført tallet null. Hans verk Brahma Sphuta Siddhanta fra omkring år 628, er det tidligst kjente verket som behandler null som et tall. I dette verket angir han også regneregler for negative tall. Han forsøkte også å definere divisjon med null.'
  },
  { 
    value: 'Muḥammad ibn Mūsā al-Khwārizmī',
    score: 45000,
    imageSource:  twelve,
    text: 'Muḥammad ibn Mūsā al-Khwārizmī var en persisk matematiker som bidro stort til forståelsen algebra.  Hans bok, Den kondenserte boken om regning ved sammensetning og balansering, var den første som handlet om systematisk løsning av lineære og kvadratiske ligninger. Al-Khwarizimi var muligens den første til å bruke tallet 0 til andre formål enn 0, som for eksempel i tallene 10 og 101.'
  },
  { 
    value: 'Isaac Newton',
    score: 60000,
    imageSource:  thirteen,
    text: 'Isaac Newton var en engelsk matematiker, fysiker, astronom, kjemiker, oppfinner, og naturfilosof. Han blir betraktet som en av tidenes største vitenskapsmenn og matematikere. Newton la grunnlaget for den klassiske mekanikken. I denne perioden klarte han å forklare tyngdekraften. Newton gjorde også store oppdagelser i matematikken. Han regnes han som grunnleggeren av matematisk analyse, kalt kalkulus.'
  },
  { 
    value: 'Niels Henrik Abel',
    score: 75000,
    imageSource:  fourteen,
    text: 'Niels Henrik Abel var en norsk matematiker kjent for å løse eldgamle matematiske gåter, samtidig som han stilte spørsmål som ennå diskuteres. For mange er det femtegradsligningen som forbindes med Niels Henrik Abel, men Abel har satt store spor etter seg i matematikken på flere områder. Arbeidene hans har hatt størst innvirkning på tre hovedområder: ligningsteori, teoriene om elliptiske funksjoner og uendelige rekker.'
  },
  { 
    value: 'Alan Turing',
    score: 90000,
    imageSource:  fifteen,
    text: 'Alan Turing var en britisk matematiker, logiker, kryptoanalytiker, og pionér innenfor informatikk. Han har bidratt vesentlig til informatikk, og la grunnlaget for en formalisering av konseptet algoritmer og databehandling med begrepet turingmaskin, som er en modell for en generell datamaskin. Turing regnes som grunnlegger av teoretisk datateknologi og kunstig intelligens. Gratulerer med å ha oppnådd det høyeste nivået i S1-appen!'
  },
  { 
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
