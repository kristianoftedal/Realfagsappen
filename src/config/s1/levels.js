import one from '../../images/levels/s1/1.png';
import two from '../../images/levels/s1/2.png';
import three from '../../images/levels/s1/3.png';
import four from '../../images/levels/s1/4.png';
import five from '../../images/levels/s1/5.png';
import six from '../../images/levels/s1/6.png';
import seven from '../../images/levels/s1/7.png';
import eight from '../../images/levels/s1/8.png';
import nine from '../../images/levels/s1/9.png';
import ten from '../../images/levels/s1/10.png';
import eleven from '../../images/levels/s1/11.png';
import twelve from '../../images/levels/s1/12.png';
import thirteen from '../../images/levels/s1/13.png';
import fourteen from '../../images/levels/s1/14.png';
import fifteen from '../../images/levels/s1/15.png';
import blackhole from '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: 'n00b',
    score: 0,
    text: 'Nybegynner',
  },
  { 
    value: 'Thales',
    score: 500,
    imageSource: one,
    text: '(født 624 f.Kr., død 547 f.Kr.) er den første matematikeren vi kjenner til, men ingen av hans verk har overlevd frem til i dag, derfor er det vanskelig å være sikker på hans matematiske oppdagelser. Det antas at han bidro mye til geometrien. Han blir ofte sett på som den første vitenskapsmannen, og er berømt for å være den første til å forutse en solformørkelse i år 585 f.Kr.'
  },
  { 
    value: 'Pythagoras',
    score: 1300,
    imageSource:  two,
    text: '(født 580 f.Kr., død 495 f.Kr.) mente at alle ting er grunnleggende matematisk, og kan forstås som tall. Han er en av de første matematikere til å påstå at Jorda er rund, men er mest kjent for arbeidet med rettvinklede trekanter. Han er også kjent for arbeidet med astronomi, og er en av de første til å mene at det var Jorda som dreiet og ikke himmelhvelvingen.'
  },
  { 
    value: 'Aristoteles',
    score: 2300,
    imageSource:  three,
    text: '(født 384 f.Kr., død 322 f.Kr.) var en gresk filosof og naturforsker. Hans verk omfatter en rekke emner, blant annet matematikk, biologi, filosofi og poesi, samt logikk og etikk. Hans største bidrag til matematikken var hans evne til å angripe problemer systematisk og logisk, noe som la grunnlaget for videre matematiske oppdagelser.'
  },
  {
    value: 'Evklid',
    score: 4500,
    imageSource:  four,
    text: '(antatt født 300 f.Kr., antatt død 275 f.Kr.) er mest kjent for verket; Elementene, som inneholder mange definisjoner, postulater og beviser i det som kalles euklidsk geometri. Målet med bøkene var å kunne bevise Pythagoras’ læresetning. Man er usikker om Evklid er en mann eller en samling av mange menn, da navnet Evklid betyr «stor respekt».'
  },
  {
    value: 'Arkimedes',
    score: 7000,
    imageSource:  five,
    text: '(født 287 f.Kr., død 212 f.Kr.) var matematiker, fysiker og oppfinner. Ved å anta at noe var riktig, for å så gå frem for å motbevise det, ble han ført nærmere sannheten. Denne innsnevringsmetoden brukte han for å bestemme tallverdien til π (pi). Noen av Arkimedes’ matematiske bevisføringer inkluderer bruk av infinitesimaler som ikke er ulik dem vi finner i moderne integralregning.'
  },
  {
    value: 'Hipparkhos',
    score: 10000,
    imageSource:  six,
    text: '(født 190 f.Kr., død ca. 120 f.Kr.) var astronom og matematiker. Hipparkhos gjorde en presis beregning av årets lengde – 365 dager, 5 timer og 55 minutter. Han målte månedens lengde til 29 dager, 12 timer, 44 minutter og 2,5 sekunder – et avvik på ett sekund fra det korrekte. Han beregnet avstanden til sola, og fant at den er kortest 4. januar, og lengst 4. juli. For å gjøre disse beregningene måtte han gjøre forbedringer til trigonometrien.'
  },
  {
    value: 'Diofant',
    score: 15000,
    imageSource:  seven,
    text: '(født ca. 200, død ca. 284) arbeidet mye med tallteori, og regnes som algebraens far. Hans hovedverk, Arithmetica, inneholder de tidligste tilfellene av det vi kaller synkopert algebra. Synkopert algebra er bruken av forskjellige symboler for ukjente størrelser.'
  },
  {
    value: 'Liu Hui',
    score: 20000,
    imageSource:  eight,
    text: '(født 220, død 280) var matematiker i oldtidens Kina. Hans største prestasjon var beregningen av pi ved hjelp av en metode som senere er blitt kjent som Gauss-eliminasjon. I tillegg la han frem gode beregningsmetoder for volumer av prismer, pyramider, sylindere og andre romfigurer.'
  },
  {
    value: 'Hypatia',
    score: 25000,
    imageSource:  nine,
    text: '(født 355, død 415) er regnet for å være den første store kvinnelige matematikeren og astronomen. Hun var lærer ved en av skolene i Alexandria, og bidro mye til det intellektuelle fellesskapet i byen. Hypatia ble myrdet, og årsaken til dette har vært mye diskutert. Det er foreslått at mordet på henne var politisk motivert, mens andre mener hun ble myrdet av en gruppe som påstod at hun drev med svart magi.'
  },
  {
    value: 'Aryabhata',
    score: 30000,
    imageSource:  ten,
    text: '(født 476, død 550) arbeidet med algebra og trigonometri i ung alder. Dette arbeidet brukte europeerne 1.000 år senere som grunnlag for derivasjon og integrasjon. Han var den første i historien som fremla at verden var en kule, hele 1.000 år før Kopernikus. Aryabhata brukte de siste årene av livet sitt til å forstå planetbevegelse, og var den første til å gi gode forklaringer på måne- og solformørkelser.'
  },
  { 
    value: 'Brahmagupta',
    score: 37000,
    imageSource:  eleven,
    text: '(født 598, død 668) var en indisk matematiker og astronom. Som matematiker er han mest kjent for å ha innført tallet null. Hans verk Brahma Sphuta Siddhanta fra omkring år 628, er det tidligst kjente verket som behandler null som et tall. I dette verket angir han også regneregler for negative tall. Han forsøkte også å definere divisjon med null.'
  },
  { 
    value: 'Muḥammad ibn Mūsā al-Khwārizmī',
    score: 45000,
    imageSource:  twelve,
    text: '(født 790, død 840) var en persisk matematiker som bidro stort til forståelsen algebra.  Hans bok, Den kondenserte boken om regning ved sammensetning og balansering, var den første som handlet om systematisk løsning av lineære og kvadratiske ligninger. Al-Khwarizimi var muligens den første til å bruke tallet 0 til andre formål enn 0, som for eksempel i tallene 10 og 101.'
  },
  { 
    value: 'Isaac Newton',
    score: 60000,
    imageSource:  thirteen,
    text: '(født 1643 død 1727) var en engelsk matematiker, fysiker, astronom, kjemiker, oppfinner, og naturfilosof. Han blir betraktet som en av tidenes største vitenskapsmenn og matematikere. I hans hovedverk, Philosophiae Naturalis Principia Mathematica, la Newton grunnlaget for den klassiske mekanikken. I denne perioden klarte han å forklare tyngdekraften. Newton gjorde også store oppdagelser i matematikken, og sammen med Gottfried Leibniz regnes han som grunnleggeren av matematisk analyse, kalt kalkulus.'
  },
  { 
    value: 'Niels Henrik Abel',
    score: 75000,
    imageSource:  fourteen,
    text: '(født 1802, død 1829) var en norsk matematiker kjent for å løse eldgamle matematiske gåter, samtidig som han stilte spørsmål som ennå diskuteres. For mange er det femtegradsligningen som forbindes med Niels Henrik Abel, men Abel har satt store spor etter seg i matematikken på flere områder. Arbeidene hans har nok hatt størst innvirkning på tre hovedområder: ligningsteori, teoriene om elliptiske funksjoner og uendelige rekker.'
  },
  { 
    value: 'Alan Mathison Turin',
    score: 90000,
    imageSource:  fifteen,
    text: '(født 1912, død 1954) var en britisk matematiker, logiker, kryptoanalytiker, og pionér innenfor informatikk. Han har bidratt vesentlig innen informatikk, og la grunnlaget for en formalisering av konseptet algoritmer og databehandling med begrepet turingmaskin, som er en modell for en generell datamaskin. Turing regnes som grunnlegger av teoretisk datateknologi og kunstig intelligens. Gratulerer med å ha oppnådd det høyeste nivået i S1-appen!'
  },
  { 
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
