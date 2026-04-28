import krystian from "@/assets/specialist-krystian.jpg";
import anna from "@/assets/specialist-anna.jpg";
import karolina from "@/assets/specialist-karolina.jpg";
import marek from "@/assets/specialist-marek.jpg";
import annaAntoniewicz from "@/assets/specialist-anna-antoniewicz.jpg";
import tomasz from "@/assets/specialist-tomasz-karczewski-new.jpeg";
import annaMarciniak from "@/assets/specialist-anna-marciniak.jpg";
import ulaPalczewska from "@/assets/specialist-ula-palczewska.jpg";

export type SpecialistCategory =
  | "psycholog"
  | "psychiatra"
  | "psychoterapeuta"
  | "joga"
  | "taniec"
  | "coaching"
  | "dzieci";

export type Specialist = {
  slug: string;
  name: string;
  role: string;
  category: SpecialistCategory;
  /** mind = turkus, body = róż — używane w stylach kart */
  space: "mind" | "body";
  image: string;
  /** Optional CSS object-position for circular crops (e.g. "center 20%"). */
  imagePosition?: string;
  /** Optional zoom for circular crops. */
  imageScale?: number;
  imageTransformOrigin?: string;
  phone: string;
  about: string;
  education?: string[];
  courses?: string[];
  specializations: string[];
  methods: string[];
  pricing: { name: string; price: string; duration: string }[];
};

export const categoryMeta: Record<
  SpecialistCategory,
  { label: string; space: "mind" | "body" }
> = {
  psycholog: { label: "Psycholog", space: "mind" },
  psychiatra: { label: "Psychiatra", space: "mind" },
  psychoterapeuta: { label: "Psychoterapeuta", space: "mind" },
  dzieci: { label: "PSYCHOLOG DZIECI I MŁODZIEŻY I RODZICÓW", space: "mind" },
  coaching: { label: "Coaching", space: "mind" },
  joga: { label: "Joga", space: "body" },
  taniec: { label: "TERAPIA TAŃCEM I RUCHEM (DMT)\nTANIEC INTUICYJNY", space: "body" },
};

export const specialists: Specialist[] = [
  {
    slug: "krystian-antoniewicz",
    name: "Krystian Antoniewicz",
    role: "SPECJALISTA PSYCHIATRA",
    category: "psychiatra",
    space: "mind",
    image: krystian,
    phone: "+48 792 997 337",
    about:
      "Prowadzę praktykę lekarską od 20 lat. Od 2003 roku pracuję w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych w Bolesławcu.\n\nPoszerzyłem moje kompetencje, kończąc w 2014 roku szkolenie z zakresu psychoterapii psychodynamicznej w Krakowskim Centrum Psychodynamicznym.\n\nSpecjalizuję się w diagnostyce i leczeniu szerokiego spektrum zaburzeń, m.in. depresji, zaburzeń lękowych, schizofrenii oraz innych psychoz. W swojej praktyce łączę wiedzę medyczną z podejściem psychoterapeutycznym, wspierając pacjentów w odzyskiwaniu zdrowia i powrocie do ról społecznych. Rejestracja czynna od poniedziałku do piątku w godzinach 13:00–15:00.",
    education: ["Specjalista psychiatra", "Szkolenie z psychoterapii psychodynamicznej — Krakowskie Centrum Psychodynamiczne"],
    courses: ["Psychoterapia psychodynamiczna", "Wieloletnia praktyka szpitalna i ambulatoryjna"],
    specializations: [
      "Depresja i zaburzenia nastroju",
      "Zaburzenia lękowe i napady paniki",
      "Choroba afektywna dwubiegunowa",
      "Zaburzenia snu",
      "Farmakoterapia",
    ],
    methods: [
      "Pełna ocena psychiatryczna",
      "Farmakoterapia oparta na dowodach",
      "Konsultacje integracyjne z terapeutami",
      "Plan długoterminowej opieki",
    ],
    pricing: [
      { name: "Konsultacja psychiatryczna", price: "300 zł", duration: "" },
      { name: "Zaświadczenie lekarskie", price: "150 zł", duration: "" },
      { name: "Recepta ", price: "50 zł", duration: "" },
    ],
  },
  {
    slug: "aksana-gogulska",
    name: "Aksana Gogulska",
    role: "Psycholog — Diagnosta ADHD",
    category: "psycholog",
    space: "mind",
    image: anna,
    phone: "+48 781 028 389",
    about:
      "Swoją pracę opieram na autentycznym zaangażowaniu i wieloletnim doświadczeniu w bezpośredniej pracy z pacjentem. Głównymi obszarami mojej specjalizacji są interwencja kryzysowa oraz diagnoza ADHD. Oferuję szerokie wsparcie psychologiczne osobom dorosłym, towarzysząc im zarówno w rozwoju osobistym, jak i w skutecznym radzeniu sobie z trudami codzienności.\n\nW ramach mojej praktyki prowadzę poradnictwo psychologiczne obejmujące konsultacje i doradztwo. W pracy wykorzystuję również techniki Mindfulness (uważności) oraz psychoedukację, dzieląc się wiedzą w zakresie zdrowia psychicznego. Dbam o najwyższą jakość swoich usług, dlatego stale podnoszę kwalifikacje poprzez udział w specjalistycznych szkoleniach i kursach.",
    specializations: [
      "Stres i wypalenie",
      "Samoocena i rozwój osobisty",
      "Trudności w relacjach",
      "Żałoba i kryzysy życiowe",
      "Diagnoza psychologiczna",
    ],
    methods: [
      "Podejście poznawczo-behawioralne",
      "Podejście humanistyczne",
      "Interwencje oparte na uważności",
      "Psychoedukacja",
    ],
    pricing: [
      { name: "Sesja indywidualna", price: "180 zł", duration: "60 min" },
      { name: "Konsultacja diagnostyczna", price: "600 - 800 zł", duration: "60 min" },
      { name: "Interwencja Kryzysowa", price: "180 zł", duration: "60 min" },
    ],
  },
  {
    slug: "karolina-ferensowicz",
    name: "Karolina Ferensowicz",
    role: "Psycholog, psychoterapeuta, specjalista w dziedzinie seksuologii",
    category: "psychoterapeuta",
    space: "mind",
    image: karolina,
    phone: "+48 609 020 417",
    about:
      "Jestem psychologiem, psychoterapeutą, dyplomowanym specjalistą w dziedzinie seksuologii. Absolwentką Całościowego Kursu Psychoterapii w nurcie integratywnym. Psychoterapeutą psychoz. Certyfikowanym diagnostą zaburzeń związanych z traumą i dysocjacją (poziom podstawowy i zaawansowany).\n\nPracuję łącząc podejście psychodynamiczne z innymi paradygmatami. Dopasowuję podejście indywidualnie w zależności od zgłaszanych problemów, osobistych potrzeb i osobowości pacjenta. Prowadzę psychoterapię indywidualną oraz grupową osób dorosłych i młodzieży.\n\nZ kim pracuje?\nWspieram osoby zmagające się z trudnościami adaptacyjnymi, poszukujące wsparcia w radzeniu sobie ze stresem, emocjami i wyzwaniami życiowymi. Towarzyszę również osobom borykającym się z bardziej złożonymi kryzysami psychicznymi.",
    specializations: [
      "Trauma i PTSD",
      "Zaburzenia osobowości",
      "Psychoterapia długoterminowa",
      "Regulacja emocji",
    ],
    methods: ["Psychoterapia integracyjna", "Terapia schematu", "Podejście psychodynamiczne"],
    pricing: [
      { name: "Sesja psychoterapii", price: "200 zł", duration: "60 min" },
      { name: "Konsultacja wstępna", price: "250 zł", duration: "60 min" },
    ],
  },
  {
    slug: "marek-pisarski",
    name: "Marek Pisarski",
    role: "Psycholog, psychoterapeuta — doświadczony w pracy z uzależnieniami",
    category: "psychoterapeuta",
    space: "mind",
    image: marek,
    phone: "+48 608 503 674",
    about:
      "Jestem psychologiem, psychoterapeutą realizującym całościowe, pięcioletnie szkolenie psychoterapeutyczne, akredytowane przez Polskie Towarzystwo Psychiatryczne w szkole integracyjnej. W swojej pracy łączę elementy z różnych nurtów psychoterapeutycznych w zależności od problematyki i potrzeb Klienta. Pracuję z osobami dorosłymi w kontakcie indywidualnym oraz grupowym, zaś swoją pracę poddaje superwizji.\n\nW swojej dotychczasowej pracy dobrze poznałem problematykę dolegliwości depresyjnych i lękowych, wspieram ludzi w różnego rodzaju kryzysach psychicznych. Posiadam doświadczenie w pracy z różnymi formami uzależnienia (behawioralne: seksoholizm, hazard, medialne oraz uzależnienia od substancji: alkoholizm, narkomania/lekomania). Pracuję także z bliskimi uzależnionych, którzy borykają się z własnymi trudnościami (współuzależnienie, DDA/DDD, przemoc).",
    specializations: [
      "Uzależnienia i współuzależnienie",
      "Praca z osobami DDA / DDD",
      "Kryzysy emocjonalne",
      "Psychoterapia indywidualna",
    ],
    methods: ["Podejście integracyjne", "Praca z procesem zmiany", "Wsparcie w trzeźwieniu"],
    pricing: [
      { name: "Sesja psychoterapii", price: "200 zł", duration: "60 min" },
      { name: "Konsultacja wstępna", price: "250 zł", duration: "60 min" },
    ],
  },
  {
    slug: "anna-antoniewicz",
    name: "Anna Antoniewicz",
    role: "PSYCHOLOG DZIECI I MŁODZIEŻY I RODZICÓW",
    category: "dzieci",
    space: "mind",
    image: annaAntoniewicz,
    phone: "+48 577 157 373",
    about:
      "Jestem psychologiem, pedagogiem i socjoterapeutką z ponad dziesięcioletnim doświadczeniem w pracy z dziećmi. Wierzę, że każde zachowanie dziecka to ukryty komunikat. W moim gabinecie pomagam rozkodować te wiadomości.\n\nZ kim pracuję?\nWspieram dzieci i młodzież w naturalnych wyzwaniach rozwojowych – od adaptacji w przedszkolu, przez trudności rówieśnicze, aż po burzliwy okres dojrzewania. W pracy z rodzicami bliskie jest mi podejście NVC (Porozumienie bez Przemocy), w którym zachowanie dziecka rozumiemy jako komunikat o jego niezaspokojonych potrzebach. Nieustannie poszerzam swoje kwalifikację, uczestniczę w kursach i szkoleniach. Od października rozpoczynam 4-letnią Szkołę Psychoterapii w nurcie Poznawczo-Behawioralnym. Prowadzę Treningi Umiejętności Społecznych i warsztaty rozwijające kompetencje emocjonalne dla dzieci i młodzieży.",
    specializations: [
      "Trudności emocjonalne i lękowe",
      "Problemy szkolne",
      "Konsultacje rodzicielskie",
      "Diagnoza rozwojowa",
    ],
    methods: ["Terapia poznawczo-behawioralna", "Praca przez zabawę", "Psychoedukacja rodzin"],
    pricing: [
      { name: "Konsultacja psychologiczna z rodzicem", price: "180 zł", duration: "60 min" },
      { name: "Konsultacja psychologiczna z dzieckiem / nastolatkiem ", price: "180 zł", duration: "60 min" },
    ],
  },
  {
    slug: "tomasz-karczewski",
    name: "Tomasz Karczewski ",
    role: "Coach",
    category: "coaching",
    space: "mind",
    image: tomasz,
    imagePosition: "center 8%",
    imageScale: 1.38,
    imageTransformOrigin: "center 8%",
    phone: "+48 533 206 040",
    about:
      "Coach na poziomie PCC (ICF Level 2) Komunikacja dla Rozwoju. Coaching to dla mnie coś znacznie więcej niż praca czy narzędzie biznesowe. To głęboki proces odkrywania siebie, odwagi i autentyczności.\nDo coacha nie trafiają ludzie „chorzy” – trafiają świadomi i odważni, którzy decydują się wziąć odpowiedzialność za swoje życie i wyruszyć w podróż ku zmianie.\n\nZawsze będę stał na straży wartości coachingowych i wierzył w moc rozwoju opartego na autentyczności, szacunku i zaufaniu. Sesje Coachingu indywidualne i grupowe. Trener Mentalny w trakcie certyfikacji.\nMaskulinum Męskie Kręgi - w trakcie certyfikacji.",
    specializations: ["Coaching kariery", "Coaching życiowy", "Wypalenie zawodowe"],
    methods: ["Model GROW", "Praca z wartościami", "Plany działania"],
    pricing: [
      { name: "Sesja Coachingu i Mentoring", price: "300 zł", duration: "60 min" },
      { name: "Męskie Kręgi", price: "90 zł", duration: "90 min" },
    ],
  },
  {
    slug: "anna-marciniak",
    name: "HATHA JOGA\n\nAnna Marciniak\n+48 691 063 822",
    role: "Hatha Joga",
    category: "joga",
    space: "body",
    image: annaMarciniak,
    phone: "+48 691 063 822",
    about:
      "Ania prowadzi klasyczną Hatha Jogę – zajęcia o umiarkowanej intensywności, które są bezpieczną przystanią zarówno dla osób początkujących, jak i tych wracających do formy.\n\nSkupiamy się tu na precyzji ruchu i głębokim oddechu.\n\nTo połączenie przynosi konkretne efekty:\nUlga dla ciała: Poczujesz wyraźne rozluźnienie napięć w kręgosłupie i wzmocnienie mięśni.\n\nSpokój dla głowy: Zredukujesz stres, wyciszysz myśli i poprawisz jakość swojego snu.\nAnia dba o to, byś na macie czuł się swobodnie i bezpiecznie, odzyskując naturalnią energię życiową.",
    specializations: [
      "Hatha Joga klasyczna",
      "Joga dla początkujących",
      "Pranayama",
      "Joga regeneracyjna",
    ],
    methods: ["Asany dostosowane do uczestnika", "Techniki oddechowe", "Relaksacja i medytacja"],
    pricing: [
      { name: "Zajęcia grupowe", price: "50 zł", duration: "60 min" },
      { name: "Karnet 4 wejścia\n\nmiesiąc", price: "190 zł", duration: "" },
      { name: "Warsztat dla kobiet \"Medytacja i Joga\"", price: "100 zł", duration: "2 - 3 godz." },
    ],
  },
  {
    slug: "ula-palczewska",
    name: "Ula Palczewska",
    role: "TERAPIA TAŃCEM I RUCHEM (DMT)\nTANIEC INTUICYJNY",
    category: "taniec",
    space: "body",
    image: ulaPalczewska,
    imagePosition: "center 18%",
    phone: "+48 608 525 148",
    about:
      "Z wykształcenia jestem fizjoterapeutką, absolwentką 4-letniej Szkoły Counsellingu Gestalt oraz Trenerką Rozwojowej Pracy poprzez Ciało, Taniec i Ruch (w trakcie szkolenia) w Polskim Instytucie Psychoterapii Tańcem i Ruchem w Warszawie. Od dziecka towarzyszy mi muzyka, a od czasów nastoletnich taniec współczesny, który do dziś, stale porusza moje serce. Myślę obrazami, czuję dźwiękami, poruszam się z obecnością. Zawsze marzyłam o pracy, która w sposób twórczy i rozwojowy łączyłaby ciało, emocje, świadomość - najlepiej w ruchu i taką obecnie mam przyjemność doświadczać.",
    specializations: [
      "Terapia tańcem i ruchem (DMT)",
      "Praca z ciałem i emocjami",
      "Świadomość ciała",
      "Grupy terapeutyczne",
    ],
    methods: ["Improwizacja ruchowa", "Autentyczny ruch", "Praca z oddechem i ugruntowaniem"],
    pricing: [
      { name: "Zajęcia grupowe", price: "50 zł", duration: "50 - 90 min" },
      { name: "Sesja indywidualna", price: "100 zł", duration: "50 - 90 min" },
      { name: "Warsztat \"Kobiece Ja\"", price: "100 zł", duration: "2 -3 godz." },
    ],
  },
];

export const getSpecialist = (slug: string) =>
  specialists.find((s) => s.slug === slug);

export const mindSpecialists = specialists.filter((s) => s.space === "mind");
export const bodySpecialists = specialists.filter((s) => s.space === "body");

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
