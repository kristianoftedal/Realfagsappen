import one from '../../images/levels/bio2/1.png';
import two from '../../images/levels/bio2/2.png';
import three from '../../images/levels/bio2/3.png';
import four from '../../images/levels/bio2/4.png';
import five from '../../images/levels/bio2/5.png';
import six from '../../images/levels/bio2/6.png';
import seven from '../../images/levels/bio2/7.png';
import eight from '../../images/levels/bio2/8.png';
import nine from '../../images/levels/bio2/9.png';
import ten from '../../images/levels/bio2/10.png';
import eleven from '../../images/levels/bio2/11.png';
import twelve from '../../images/levels/bio2/12.png';
import thirteen from '../../images/levels/bio2/13.png';
import fourteen from '../../images/levels/bio2/14.png';
import fifteen from '../../images/levels/bio2/15.png';
import blackhole from '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: 'Bio2-elev',
    score: 0,
    text: 'Nybegynner',
  },
  {
    value: 'Cellen',
    score: 500,
    imageSource: one,
    text: 'I 1665 ga den engelske fysikeren og matematikeren Robert Hooke ut sitt arbeid Micrographia. Her beskriver han for første gang en plantecelle han har sett igjennom et selvbygd mikroskop. Planteceller lærer du mer om i «Celleånding og fotosyntese».',
  },
  {
    value: 'Klassifikasjonssystemet',
    score: 1300,
    imageSource:  two,
    text: 'I 1735 ga den svenske botanikeren og systematikeren Carl von Linné ut boken Systema Naturae. Han bestemte at vitenskapelige artsnavn skulle skrives «Slekt art», med stor bokstav i slekt, og liten bokstav i art. Vitenskapelige artsnavn skal alltid skrives i kursiv. Linné klassifiserte over 16.000 plante- og dyrearter. Taksonomi lærer du mer om i «Økologi og taksonomi».',
  },
  {
    value: 'Vaksiner',
    score: 2300,
    imageSource:  three,
    text: 'Edward Jenner var en engelsk lege som utviklet en vaksine mot kopper. Han la merke til at mennesker som hadde hatt kukopper ikke fikk vanlige kopper, og brukte dette til å utvikle den første vaksinen i 1796. Ordet vaksine kommer fra det franske ordet for ku: vache. Utviklingen av vaksiner er en av de største gjennombruddene i medisin. Dessverre trues vaksineringsprogrammene nå av uvitenhet og dårskap. Vaksiner lærte du om i «Immunologi» i Biologi 1.',
  },
  {
    value: 'Evolusjonsteorien',
    score: 4500,
    imageSource:  four,
    text: 'Charles Darwin anses av mange som den største biologen som noen sinne har levd. I 1859 ga han ut sitt verk «Om Artenes Opprinnelse» (originaltittel: «On the Origin of Species») som forklarer hvordan alle artene vi ser i dag har utviklet seg fra en felles stamfar. Darwin er evolusjonsteoriens-far. Darwin lærer du mer om i all biologi, fordi evolusjonsbiologi gjennomsyrer hele vår forståelse av naturen og livet som befinner seg der.',
  },
  {
    value: 'Genetikk',
    score: 7000,
    imageSource:  five,
    text: 'Den østeriske munken og vitenskapsmannen Gregor Mendel er grunnleggeren av den moderne genetikken. Han gjorde uendelige krysningsforsøk på erteblomster og oppdaget at det var et system bak hvordan forskjellige egenskaper ble nedarvet. Dette systemet kalles for Mendels arvelover. Han presenterte sine resultater i 1866, men ble aldri en berømt vitenskapsmann i sin samtid. Genetikk kan du lære mer om i kapitlet om «DNA», «Genetikk» og «Evolusjon».'
  },
  {
    value:'Antibiotika',
    score: 10000,
    imageSource:  six,
    text: 'I 1928 oppdaget den engelske legen Alexander Fleming at muggsoppen «Penicillium notatum», hadde bakteriedrepende egenskaper. Han lyktes like etterpå i å fremstille den første antibiotikaen – penicellin. Oppdagelsen av antibiotika står som en av de største oppdagelsene i medisin, og Alexander Fleming fikk 1945 Nobelprisen for sitt arbeid. Anitbiotika kan du lese mer om i «Bioteknologi».'
  },
  {
    value:'DNA',
    score: 15000,
    imageSource:  seven,
    text: 'I 1953 oppdaget James Watson og Francis Crick DNA-strukturen. En dobbel heliks bestående av 4 nitrogenbaser: A, T C og G. Watson og Crick ville antageligvis aldri klart å oppdage DNA-strukturen uten å ha tatt utgangspunkt i arbeidet til den britiske biofysikeren Rosalind Franklin. Watson og Crick fikk i 1962 Nobelprisen i medisin og fysiologi for sin oppdagelse, en av de aller største oppdagelsen i biologi. DNA-strukturen leser du mer om i kapittelet «DNA».'
  },
  {
    value:'Liv',
    score: 20000,
    imageSource:  eight,
    text: 'I 1953 gjorde amerikanerne Stanley Miller og Harold Urey eksperimenter med stoffer man tror var tilstede tidlig i Jordas historie. De blandet ammoniakk, hydrogen, metan og vanndamp sammen i en slags «ursuppe», og tilsatte elektriske ladninger som skulle tilsvare lynnedslag. Dette viste seg å danne livsnødvendige molekyler som nukleinsyrer og aminosyrer. Miller-Urey-eksperimentet viser at liv kan ha oppstått på denne måten. Ursuppe-hypotesen kan du lese mer om i kapitlet om «Evolusjon».'
  },
  {
    value:'Rekombinasjon',
    score: 25000,
    imageSource:  nine,
    text: 'I 1978 genmodifiserte amerikaneren Herbert Boyer en bakterie til å lage syntetisk insulin. Han hadde oppdaget genetisk rekombinasjon, og for første gang klart å rekombinere plasmider i bakterier noen år tidligere. Nøkkelen til rekombinasjonsteknikken fant han da han begynte å benytte restriksjonsenzymer fra E.coli til å «klippe» i plasmider. Rekombinasjon kan du lese mer om i kapittelet «Bioteknologi».',
  },
  {
    value:'Virusutryddelse',
    score: 30000,
    imageSource:  ten,
    text: 'Den siste personen som hadde kopper ble diagnostisert i Somalia i 1977. Dette var etter at Verdens Helseorganisasjon (WHO) systematisk hadde satt i gang et verdensomspennende prosjekt med mål om å utrydde kopper gjennom vaksinering. For at dette skulle virke måtte alle tilfeller av kopper isoleres, og alle i området rundt vaksineres. Arbeidet holdt på i nesten 30 år. Utryddelsen av kopper står som en av de største milepælene i medisinsk historie. Befolkninger kan du lese mer om i «Populasjonsbiologi og stoffenes kretsløp».'
  },
  {
    value: 'PCR',
    score: 37000,
    imageSource:  eleven,
    text: 'PCR, polymerasekjedereaksjon, er en bioteknologisk metode som benyttes for å kopiere opp mangfoldige kopier av en gitt DNA-sekvens. PCR er kanskje en av de mest brukte metodene i moderne bioteknologi, og brukes i nesten alle typer forskning. PCR-metoden fikk sitt gjennombrudd i 1983, og amerikaneren Kary Mullins fikk Nobelprisen i kjemi i 1993 for oppdagelsen.',
  },
  {
    value: 'Kloning',
    score: 45000,
    imageSource:  twelve,
    text: 'Det første vellykkede forsøket på å klone et pattedyr skjedde ved Rosalin instituttet i Edinburgh i 1996. Der lyktes forskerne å overføre en cellekjerne fra en jurcelle til en ubefruktet eggcelle, hvor cellekjernen hadde blitt fjernet. Denne eggcellen ble plantet i livmoren til en surrogatmor, som senere bar frem den verdenskjente sauen Dolly.',
  },
  {
    value: 'Sekvensering',
    score: 60000,
    imageSource:  thirteen,
    text: 'The Human Genom Project (HGP) er det største biologiske samarbeidsprosjektet som noen gang har eksistert, og ble påbegynt i 1990. Prosjektet gikk ut på å sekvensere hele det menneskelige DNA, samt identifisere og kartlegge alle genene som utgjør det menneskelige genom. Arbeidet ble avsluttet i 2003. Sekvensering av DNA kan du lese mer om i «Bioteknologi».',
  },
  {
    value: 'HIV-kur',
    score: 75000,
    imageSource:  fourteen,
    text: 'Amerikaneren Timothy Ray Brown (the Berlin patient) ble diagnostisert med HIV i Berlin i 1995. I 2006 ble han diagnostisert med leukemi, og måtte foreta en beinmargstransplantasjon. Donoren han matchet med viste seg å være en person med beinmarg immun mot HIV. The Berlin paptient er den første og eneste personen som har blitt kurert for HIV, og behandlingen av han kan kanskje holde nøkkelen til HIV-gåten? Gener som kan gi immunitet i befolkningen kan du lese mer om i «Evolusjon».',
  },
  {
    value: 'CRISPR',
    score: 90000,
    imageSource:  fifteen,
    text: 'CRISPR-metoden er en metode der man kan gjøre endringer i DNA på nitrogenbasenivå, og er en metode som har utviklet seg ved flere universiteter samtidig på starten av 2010-tallet. Det er kanskje ingen som forstår hvilke muligheter dette vil gi menneskeheten i fremtiden. Teknologien kan brukes til å utrydde all sykdom, men kan få fatale konsekvenser i gale hender. Gratulerer med å ha oppnådd det høyeste nivået i Biologi 2-appen!',
  },
  {
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
