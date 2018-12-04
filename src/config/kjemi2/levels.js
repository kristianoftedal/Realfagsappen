import one from '../../images/levels/kjemi2/1.png';
import two from '../../images/levels/kjemi2/2.png';
import three from '../../images/levels/kjemi2/3.png';
import four from '../../images/levels/kjemi2/4.png';
import five from '../../images/levels/kjemi2/5.png';
import six from '../../images/levels/kjemi2/6.png';
import seven from '../../images/levels/kjemi2/7.png';
import eight from '../../images/levels/kjemi2/8.png';
import nine from '../../images/levels/kjemi2/9.png';
import ten from '../../images/levels/kjemi2/10.png';
import eleven from '../../images/levels/kjemi2/11.png';
import twelve from '../../images/levels/kjemi2/12.png';
import thirteen from '../../images/levels/kjemi2/13.png';
import fourteen from '../../images/levels/kjemi2/14.png';
import fifteen from '../../images/levels/kjemi2/15.png';
import blackhole from '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: 'Kjemi2-elev',
    score: 0,
    text: 'Nybegynner',
  },
  { 
    value: 'Oksidasjon',
    score: 500,
    imageSource: one,
    text: 'En oksidasjon er en kjemisk reaksjon der et stoff avgir ett eller flere elektroner. Alkali- og jordalkalimetaller, er gode eksempler på stoffer som ofte blir oksidert i kjemiske reaksjoner. Dersom endringen i oksidasjonstallet hos et atom er positivt, har det skjedd en oksidasjon. Oksidasjoner møter du i «Redoksreaksjoner» og «Elektrokjemi».'
  },
  { 
    value: 'Reduksjon',
    score: 1300,
    imageSource:  two,
    text: 'En reduksjon er en kjemisk reaksjon der et stoff tar imot ett eller flere elektroner. En reduksjon er det motsatte av en oksidasjon. Vitenskapsmenn har rangert stoffers evne til å bli redusert i en tabell som kalles for spenningsrekken. Reduksjoner møter du i «Redoksreaksjoner» og «Elektrokjemi».'
  },
  { 
    value: 'Redoksreaksjon',
    score: 2300,
    imageSource:  three,
    text: 'En redoksreaksjon er en kombinasjonen av en oksidasjon og en reduksjon. Redoksreaksjoner kan enten regnes som spontane eller ikke-spontane redoksreaksjoner. Redoksreaksjoner leverer strøm i mye av den teknologien du bruker i hverdagen din, f.eks. når du regner på kalkulatoren eller lader telefonen. Redoksreaksjoner møter du i «Redoksreaksjoner» og «Elektrokjemi».'
  },
  {
    value: 'Ufullstendig forbrenning',
    score: 4500,
    imageSource:  four,
    text: 'En ufullstendig forbrenningsreaksjon, er en forbrenning der tilgangen på oksygengass er begrenset. Det dannes svært mange produkter under ufullstendige forbrenninger. Mange av disse er giftig. Ufullstendige forbrenningsreaksjoner møter du i «Redoksreaksjoner».'
  },
  {
    value: 'Fullstendig forbrenning',
    score: 7000,
    imageSource:  five,
    text: 'En fullstendig forbrenningsreaksjon, er en forbrenning der det er tilstrekkelig med tilgang på oksygengass. De eneste produktene som dannes er karbondioksid og vann. Det frigjøres òg store mengder energi under fullstendige forbrenningsreaksjoner. Fullstendige forbrenningsreaksjoner møter du i «Redoksreaksjoner».'
  },
  {
    value: 'Syre-base-reaksjon',
    score: 10000,
    imageSource:  six,
    text: 'En syre-base-reaksjon er en kjent reaksjonstype fra Kjemi 1. Syre-base-reaksjoner oppstår alltid parvis, der den ene virker som en syre og avgir protoner, mens den andre mottar protoner og virker som en base. En god forståelse for syre-base-reaksjoner er sentralt for å lykkes i kjemi. Syre-base-reaksjoner møter du i «Buffere».'
  },
  {
    value: 'Katalyserte reaksjon',
    score: 15000,
    imageSource:  seven,
    text: 'Svært mange reaksjoner har såpass høy aktiveringsenergi, at de trenger en ekstra dytt for å komme i gang. Et stoff som hjelper til med å starte opp, og drive frem en reaksjon uten og bli brukt opp selv, kalles en katalysator. Eksempler finner vi i dannelsen av etere, estere og alkener. Enzymer er også katalysatorer. Katalyserte reaksjoner møter du i mange temaer i Kjemi 2.'
  },
  {
    value: 'Enzym-substrat-reaksjon',
    score: 20000,
    imageSource:  eight,
    text: 'Enzym-substrat-reaksjoner er kjemiske reaksjoner der et enzym, som virker som en biokjemisk katalysator, endrer et substrat ved å plassere det i sitt aktive sete. Substrater er spesifikke for sitt enzym, og passer sjeldent inn i andre enzymer. Enzym-substrat-reaksjoner møter du i «Næringsstoffer og Biokjemi».'
  },
  {
    value: 'Kompleksdannelse',
    score: 25000,
    imageSource:  nine,
    text: 'En kompleksdanner-reaksjon er en kjemisk reaksjon der det dannes et stabilt stoff som har ladning. Komplekseforbindelser er dermed løselige i vann. Mange av de har sterke farger, fordi et innskuddsmetall ofte er det sentrale ionet. Kompleksdannere møter du i «Uorganisk Kjemi» og «Organisk Kjemi».'
  },
  {
    value: 'Fellingsreaksjon',
    score: 30000,
    imageSource:  ten,
    text: 'En fellingsreaksjon er når ioner i en vannløsning går sammen, forlater løsningen, og legger seg som et bunnfall. Dette er fordi kreftene som bringer sammen ionene er sterkere enn vannets evne til å rive dem fra hverandre. Fellinger brukes mye i påvisningsreaksjoner, og du møter fellingsreaksjoner i «Uorganisk Kjemi» og «Organisk Kjemi».'
  },
  { 
    value: 'Addisjonsreaksjon',
    score: 37000,
    imageSource:  eleven,
    text: 'Addisjonsreaksjoner er kjemiske reaksjoner der reaktanter går sammen og danner et produkt, med større molar masse. Det er nesten alltid alkener som adderer andre molekyler, og da er det viktig å huske på Markovnikovs regel. Addisjonsreaksjoner møter du i «Organisk Kjemi».'
  },
  { 
    value: 'Substitusjonsreaksjon',
    score: 45000,
    imageSource:  twelve,
    text: 'En substitusjonsreaksjon er en reaksjon der et atom eller en atomgruppe, bytter plass med et annet atom eller atomgruppe. Antall reaktanter er derfor likt som antall produkter, før og etter reaksjonen. Substitusjonsreaksjoner er en fin måte å endre funksjonelle grupper i et molekyl på. Substitusjonsreaksjoner møter du i «Organisk Kjemi».'
  },
  { 
    value: 'Eliminasjonsreaksjon',
    score: 60000,
    imageSource:  thirteen,
    text: 'Eliminasjonsreaksjoner kjennetegnes av at et mindre molekyl forlater et større molekyl. Det lille molekylet er ofte vann. Det store produktet som blir igjen, har nesten alltid blitt omgjort til et alken eller et alkyn. Det er lett å forveksle eliminasjonsreaksjoner med kondensasjonsreaksjoner, så se etter dobbel-, eller trippelbindinger. Eliminasjonsreaksjoner møter du i «Organisk Kjemi».'
  },
  { 
    value: 'Kondensasjonsreaksjon',
    score: 75000,
    imageSource:  fourteen,
    text: 'En kondensasjonsreaksjon er en kjemisk reaksjon der to molekyler går sammen og danner et større molekyl, samtidig som det spaltes av et lite molekyl, gjerne vann. Klassiske eksempler kondensasjonsreaksjoner er dannelsen av estere og etere, samt mange biokjemiske reaksjoner som dannelsen av proteiner og fett. Kondensasjonsreaksjoner møter du i «Organisk Kjemi» og «Næringsstoffer og Biokjemi».'
  },
  { 
    value: 'Hydrolysereaksjon',
    score: 90000,
    imageSource:  fifteen,
    text: 'En hydrolysereaksjon er en kjemisk reaksjon, der vann eller et annet lite molekyl, bryter opp et større molekyl og danner mindre produkter. Kjente eksempler er dannelsen av alkoholer og karboksylsyrer, fra estere. Hydrolysereaksjoner møter du i «Organisk Kjemi» og «Næringsstoffer og Biokjemi». Gratulerer med å ha oppnådd det høyeste nivået i Kjemi 2-appen!'
  },
  { 
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
