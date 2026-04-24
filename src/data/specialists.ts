import krystian from "@/assets/specialist-krystian.jpg";
import anna from "@/assets/specialist-anna.jpg";
import karolina from "@/assets/specialist-karolina.jpg";
import marek from "@/assets/specialist-marek.jpg";
import annaAntoniewicz from "@/assets/specialist-anna-antoniewicz.jpg";
import tomasz from "@/assets/specialist-tomasz.jpg";
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
  phone: string;
  about: string;
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
    phone: "+48 792 99 73 37",
    about:
      "Lekarz specjalista psychiatrii dorosłych z ponad 15-letnim doświadczeniem klinicznym. Łączy wiedzę medyczną z empatią i indywidualnym podejściem do pacjenta.",
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
      { name: "Pierwsza konsultacja", price: "350 zł", duration: "" },
      { name: "Wizyta kontrolna", price: "300 zł", duration: "" },
      { name: "Recepta", price: "150 zł", duration: "" },
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
      "Psycholog kliniczny z pasją do wspierania w zmianach życiowych, stresie i relacjach. Tworzy bezpieczną, nieoceniającą przestrzeń.",
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
      { name: "Sesja indywidualna", price: "180 zł", duration: "50 min" },
      { name: "Konsultacja diagnostyczna", price: "600 - 800 zł", duration: "50 min" },
      { name: "Interwencja Kryzysowa", price: "180 zł", duration: "50 min" },
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
      "Psychoterapia integracyjna — praca nad wzorcami, traumą i trwałą zmianą.",
    specializations: [
      "Trauma i PTSD",
      "Zaburzenia osobowości",
      "Psychoterapia długoterminowa",
      "Regulacja emocji",
    ],
    methods: ["Psychoterapia integracyjna", "Terapia schematu", "Podejście psychodynamiczne"],
    pricing: [
      { name: "Sesja psychoterapii", price: "200 zł", duration: "50 min" },
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
      "Psycholog i psychoterapeuta z wieloletnim doświadczeniem w pracy z osobami zmagającymi się z uzależnieniami oraz ich bliskimi.",
    specializations: [
      "Uzależnienia i współuzależnienie",
      "Praca z osobami DDA / DDD",
      "Kryzysy emocjonalne",
      "Psychoterapia indywidualna",
    ],
    methods: ["Podejście integracyjne", "Praca z procesem zmiany", "Wsparcie w trzeźwieniu"],
    pricing: [
      { name: "Sesja psychoterapii", price: "200 zł", duration: "50 min" },
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
      "Wsparcie psychologiczne dla dzieci, młodzieży i ich rodzin. Diagnoza, terapia oraz konsultacje wychowawcze.",
    specializations: [
      "Trudności emocjonalne i lękowe",
      "Problemy szkolne",
      "Konsultacje rodzicielskie",
      "Diagnoza rozwojowa",
    ],
    methods: ["Terapia poznawczo-behawioralna", "Praca przez zabawę", "Psychoedukacja rodzin"],
    pricing: [
      { name: "Konsultacja psychologiczna z dzieckiem/ nastolatkiem", price: "180 zł", duration: "50 min" },
      { name: "Konsultacja rodzicielska", price: "180 zł", duration: "50 min" },
    ],
  },
  {
    slug: "tomasz-karczewski",
    name: "Tomasz Karczewski ",
    role: "Coach",
    category: "coaching",
    space: "mind",
    image: tomasz,
    phone: "+48 533 206 040",
    about:
      "Coaching rozwojowy i kariery — praca nad celami, motywacją i odkrywaniem zasobów.",
    specializations: ["Coaching kariery", "Coaching życiowy", "Wypalenie zawodowe"],
    methods: ["Model GROW", "Praca z wartościami", "Plany działania"],
    pricing: [
      { name: "Sesja coachingowa", price: "200 zł", duration: "50 min" },
      { name: "Męskie Kręgi - warsztaty rozwojowe ", price: "100 zł", duration: "60 min" },
    ],
  },
  {
    slug: "anna-marciniak",
    name: "Anna Marciniak",
    role: "Hatha Joga",
    category: "joga",
    space: "body",
    image: annaMarciniak,
    phone: "+48 691 063 822",
    about:
      "Nauczycielka Hatha Jogi z wieloletnią praktyką. Tworzy przestrzeń, w której każdy odnajdzie równowagę ciała i umysłu.",
    specializations: [
      "Hatha Joga klasyczna",
      "Joga dla początkujących",
      "Pranayama",
      "Joga regeneracyjna",
    ],
    methods: ["Asany dostosowane do uczestnika", "Techniki oddechowe", "Relaksacja i medytacja"],
    pricing: [
      { name: "Zajęcia grupowe", price: "50 zł", duration: "60 min" },
      { name: "Karnet 4 wejścia", price: "190 zł", duration: "miesiąc" },
      { name: "Warsztat dla kobiet  \"Medytacja i joga\" ", price: "100 zł", duration: "2 - 3 godz." },
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
      "Certyfikowana terapeutka tańcem i ruchem (DMT). Pomaga odkrywać emocje przez świadomy ruch ciała.",
    specializations: [
      "Terapia tańcem i ruchem (DMT)",
      "Praca z ciałem i emocjami",
      "Świadomość ciała",
      "Grupy terapeutyczne",
    ],
    methods: ["Improwizacja ruchowa", "Autentyczny ruch", "Praca z oddechem i ugruntowaniem"],
    pricing: [
      { name: "Zajęcia grupowe", price: "50 zł", duration: "60 min" },
      { name: "Sesja indywidualna", price: "80 zł", duration: "60 min" },
      { name: "Warsztat \"Kobiece Ja\"", price: "100 zł", duration: "2 -3 godz." },
    ],
  },
];

export const getSpecialist = (slug: string) =>
  specialists.find((s) => s.slug === slug);

export const mindSpecialists = specialists.filter((s) => s.space === "mind");
export const bodySpecialists = specialists.filter((s) => s.space === "body");

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
