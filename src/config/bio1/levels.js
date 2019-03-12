import vesikkel from '../../images/levels/bio1/1.png';
import mikrotubuli from '../../images/levels/bio1/2.png';
import flagell from '../../images/levels/bio1/3.png';
import ger from '../../images/levels/bio1/4.png';
import cellemembran from '../../images/levels/bio1/5.png';
import blackhole from '../../images/levels/kjemi2/sorthull.png';

const levels = [
  {
    value: 'Bio1-elev',
    score: 0,
    text: 'Nybegynner',
  },
  {
    value: 'Vesikkel',
    score: 500,
    imageSource: vesikkel,
    text: 'En vesikkel, også kalt en blære, er et lite sfæreformet struktur som flyter rundt i cytosol. Vesiklen er omgitt av et dobbelt fettlag, akkurat som cellemembranen. Det er fordi vesiklene er en del av endomembransystemet. Inni vesiklene er det viktige molekyler som fraktes rundt i cellen. Vesikler frakter også nødvendige molekyler ut av cellen ved en mekanisme som heter eksocytose, eller inn i cellen ved en mekanisme som heter endocytose. Vesikler lærer du mer om i «Cellens oppbygning og membrantransport», «Immunologi» og «Komparativ fysiologi og formering».',
  },
  {
    value: 'Mikrotubuli',
    score: 1300,
    imageSource:  mikrotubuli,
    text: 'Mikrotubuli er én av 3 kategorier som går inn under fellesbetegnelsen «cytoskjelettet». Cytoskjelletet er forskjellige strukturer som hjelper til med å bevege, forme og opprettholde strukturen til cellen. Mikrotubuli danner også et slags «veisystem» inn i cellen, som det utrolig fascinerende motorproteinet kinesin frakter vesiklene langs. Hvis du ikke har sett dette før må du søker det opp på Internett. Mikrotubuli er også hoved strukturen i eukaryote flageller. Miktrotubuli lærer du mer om i kapitlet «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Flagell',
    score: 2300,
    imageSource:  flagell,
    text: 'En flagell er en lang, tynn, hale som henger utenpå cellen, og brukes til bevegelse. Flagellen omtales som en organelle, og en celle som har en flagell er flagellert. Både prokarote og eukaryote celler kan han flageller. Den flagellerte cellen vi kjenner best er antaglivis sædcellen. Den bruker flagellen sin til å svømme til egget. Flagallerte celler kan du lese mer om i «Cellens oppbygning og membrantransport», «Planters formering» og «Komparativ fysiologi og formering».',
  },
  {
    value: 'Glatt Endoplasmatisk Retikulum',
    score: 4500,
    imageSource:  ger,
    text: 'Glatt endoplasmatisk retikulum er en del av endomembransystemet. Det vil si at den er satt sammen på samme måte som cellemembranen. Glatt ER er ikke bundet til ribosomer, noe som gjør overflaten glatt, og derav navnet. Glatt ER står for mye av transporten inn og ut av cellen. Vi finner mye glatt endoplasmatisk retikulum i leverceller der den hjelper til med utskillelsen av fettløslige stoffer, blant annet medisiner. Glatt ER kan du lese mer om i «Cellens oppbygning og membrantransport».',
  },
  {
    value: 'Cellemembran',
    score: 7000,
    imageSource:  cellemembran,
    text: 'Alle celler består av en cellemembran som skiller innsiden av cellen fra utsiden av cellen. Cellemembranen bestemmer hva som får komme inn i cellen, og hva som får slippe ut av cellen. Dette gjør det mulig for cellen å danne et miljø på innsiden, som er annerledes fra miljøet rundt. Cellemembranen består av et dobbelt fettlag som med mange forskjellige kanaler forskjellige stoffer kan gå inn og ut igjennom. Cellemembranen lærer du mye mer om i kapitlene «Cellens oppbygning og membrantransport» og «Nerver, hormoner og sansefysiologi.'
  },
  // {
  //   value:'Karbon',
  //   score: 10000,
  //   imageSource:  karbon,
  //   text: 'Karbon har seks protoner i kjernen og fire valenselektroner. Det gjør at karbon kan inngå i svært mange forbindelser og bli oksidert og redusert. Alle levende organismer på jorda er karbonbaserte. Karbon lærer du mer om under «Næringsstoffer og fordøyelsen» og «Redoksreaksjoner».'
  // },
  // {
  //   value:'Aminosyre',
  //   score: 15000,
  //   imageSource:  aminosyre,
  //   text: 'Aminosyrer består av karbon, hydrogen, oksygen, nitrogen og svovel. Noen aminosyrer kan kroppen lage selv, mens andre må den skaffe via kostholdet. Aminosyrer lærer du mer om under «Næringsstoffer og fordøyelsen» og «DNA, proteinsyntese og arv».'
  // },
  // {
  //   value:'Protein',
  //   score: 20000,
  //   imageSource:  protein,
  //   text: 'Proteiner er bygd opp av aminosyrer. Proteiner kan katalysere kjemiske reaksjoner, og da kalles de enzymer. Noen proteiner, for eksempel hemoglobin, frakter oksygen rundt i kroppen. Proteiner lærer du mer om under «Næringsstoffer og fordøyelsen» og «DNA, proteinsyntese og arv».'
  // },
  // {
  //   value:'DNA',
  //   score: 25000,
  //   imageSource:  dna,
  //   text: 'Deoksyribonukleinsyre er et stort molekyl bygd opp av et sukkermolekyl, et fosfatmolekyl og tilsammen fire forskjellige nitrogenbaser (adenin, cytosin, guanin og tymin). DNA er arvestoffet i alle cellene, og via proteinsyntesen gir de opphav til alle våre egenskaper. DNA lærer du mer om under «DNA, proteinsyntese og arv» og «Bioteknologi».',
  // },
  // {
  //   value:'Cellekjerne',
  //   score: 30000,
  //   imageSource:  cellekjerne,
  //   text: 'De fleste levende individer på planeten mangler en cellekjerne. De som har cellekjerne kalles eukaryoter, og her finner vi blant annet dyreceller og planteceller. Cellekjernen lærer du mer om under «DNA, proteinsyntese og arv» og «Bioteknologi».'
  // },
  // {
  //   value: 'Celle',
  //   score: 37000,
  //   imageSource:  celle,
  //   text: 'Alle levende organismer er bygd opp av celler. Eukaryote organismer består av over 200 ulike celletyper, mens bakterier kun består av én. Celler lærer du mer om under «DNA, proteinsyntese og arv» og «Bioteknologi».',
  // },
  // {
  //   value: 'Hjerte',
  //   score: 45000,
  //   imageSource:  hjerte,
  //   text: 'Hjertet er den største muskelen i kroppen og står flere millioner slag i løpet av et menneskeliv. I fremtiden vil det muligens være aktuelt å dyrke et nytt hjertet ved hjelp av stamcelleteknologi. Hjertet lærer du mer om under «DNA, proteinsyntese og arv» og «Bioteknologi».',
  // },
  // {
  //   value: 'Menneske',
  //   score: 60000,
  //   imageSource:  menneske,
  //   text: 'Mennesket, eller Homo Sapiens, er den arten på planeten som har kommet lengst i forståelsen av vitenskap. Mennesket er undrende, kreative, nysgjerrige og stadig på leting etter ny kunnskap. Mennesket lærer du om i alle temaer i Naturfag.',
  // },
  // {
  //   value: 'Kjernekraftverk',
  //   score: 75000,
  //   imageSource:  nuclear,
  //   text: 'Et kjernekraftverk benytter seg av radioaktiv stråling, og omdanner energien lagret i atomkjernene til elektrisk energi. Kjernekraft er mye omtalt i sosiale medier og politikk - selv om vi ikke har noe kjernekraft i Norge. Kjernekraft regnes som en fornybar energi. Kjernekraftverk lærer du mer om i «Økologi og bærekraftig utvikling» og «Radioaktiv stråling».',
  // },
  // {
  //   value: 'Månen',
  //   score: 90000,
  //   imageSource:  moon,
  //   text: 'Månen er jordas eneste naturlig satellitt. Selv om månen befinner seg like langt unna sola som jorda, er den ikke like varm. Dette kommer av den tynne atmosfæren som månen har. Månen lærer du mer om under «Elektromagnetisk stråling».',
  // },
  // {
  //   value: 'Jorda',
  //   score: 110000,
  //   imageSource:  jorda,
  //   text: 'Jorda er den tredje planeten fra sola, og den eneste planeten i solsystemet der vi vet det finnes liv. Jorda har eksistert i nesten 5 milliarder år, og har gjennomgått mange forandringer. Jorda lærer du mer om i «Elektromagnetisk stråling» og «Økologi og bærekraftig utvikling».',
  // },
  // {
  //   value: 'Sola',
  //   score: 140000,
  //   imageSource:  sol,
  //   text: 'Sola er vår egen stjerne. Sola fusjonerer hydrogen til helium og er ca. halvveis i sitt liv. Sola avgir mer energi på 1 time, enn det mennesket har brukt de siste 2 000 årene. Sola lærer du mer om under «Elektromagnetisk stråling», Økologi og bærekraftig utvikling» og «Energi for fremtiden».',
  // },
  // {
  //   value: 'Solsystem',
  //   score: 200000,
  //   imageSource:  planet,
  //   text: 'Solsystemet består av sola, planetene, kometene og alle legemer som går i bane rundt vår stjerne. Det finnes milliarder av solsystemer i galaksen, og de aller fleste av disse har planeter. Solsystemet lærer du mer om under «Elektromagnetisk stråling».',
  // },
  // {
  //   value: 'Melkeveien',
  //   score: 300000,
  //   imageSource:  milky,
  //   text: 'Melkeveien er vår egen galakse og inneholder over 100 milliarder stjerner. Melkeveien er en spiralgalakse, og har en diameter på nesten 100 000 lysår! Dette gjør at vi mennesker mest sannsynlig aldri vil kunne utforske galaksen slik vi har utforsket jorda. Melkeveien lærer du mer om i «Elektromagnetisk stråling».',
  // },
  // {
  //   value: 'Universet',
  //   score: 1000000,
  //   imageSource:  univers,
  //   text: 'Universet er alt som finnes, og alt som noensinne vil finnes. Universet består av mange milliarder galakser, og inneholder store gåter som sorte hull, mørk materie og mørk energi. Universet lærer du mer om under «Elektromagnetisk stråling». Gratulerer med å ha oppnådd det høyeste nivået i Naturfagsappen!',
  // },
  {
    value: 'Sort hull',
    score: 30000000000000,
    imageSource:  blackhole,
    text: 'Et sort hull eller svart hull er den fysiske effekten av et objekt som har en masse tilsvarende 3-4 ganger solens og oppover, og som har ekstremt høy tetthet. Yttergrensen til et sort hull kalles hendelseshorisont, og innenfor denne er gravitasjonskreftene så store at ingenting kan unnslippe - ikke engang lys.'
  },
];

export default levels;
