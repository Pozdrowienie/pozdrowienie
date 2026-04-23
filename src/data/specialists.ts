import krystian from "@/assets/specialist-krystian.jpg";
import anna from "@/assets/specialist-anna.jpg";
import therapist from "@/assets/specialist-therapist.jpg";
import sexologist from "@/assets/specialist-sexologist.jpg";
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
  dzieci: { label: "Psycholog dzieci i młodzieży", space: "mind" },
  coaching: { label: "Coaching", space: "mind" },
  joga: { label: "Joga", space: "body" },
  taniec: { label: "Taniec Intuicyjny", space: "body" },
};

export const specialists: Specialist[] = [
  {
    slug: "krystian-antoniewicz",
    name: "Krystian Antoniewicz",
    role: "Psychiatra",
    category: "psychiatra",
    space: "mind",
    image: krystian,
    phone: "+48 600 100 101",
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
      { name: "Pierwsza konsultacja", price: "350 zł", duration: "60 min" },
      { name: "Wizyta kontrolna", price: "250 zł", duration: "30 min" },
      { name: "Recepta", price: "150 zł", duration: "15 min" },
    ],
  },
  {
    slug: "aksana-gogulska",
    name: "Aksana Gogulska",
    role: "Psycholog",
    category: "psycholog",
    space: "mind",
    image: anna,
    phone: "+48 600 100 102",
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
      { name: "Sesja indywidualna", price: "220 zł", duration: "50 min" },
      { name: "Konsultacja diagnostyczna", price: "280 zł", duration: "60 min" },
      { name: "Sesja par", price: "320 zł", duration: "75 min" },
    ],
  },
  {
    slug: "karolina-ferensowicz",
    name: "Karolina Ferensowicz",
    role: "Psychoterapeuta",
    category: "psychoterapeuta",
    space: "mind",
    image: therapist,
    phone: "+48 600 100 103",
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
      { name: "Sesja terapii", price: "230 zł", duration: "50 min" },
      { name: "Konsultacja wstępna", price: "260 zł", duration: "60 min" },
    ],
  },
  {
    slug: "anna-antoniewicz",
    name: "Anna Antoniewicz",
    role: "PSYCHOLOG DZIECI I MŁODZIEŻY I RODZICÓW",
    category: "dzieci",
    space: "mind",
    image: sexologist,
    phone: "+48 600 100 104",
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
      { name: "Konsultacja", price: "220 zł", duration: "50 min" },
      { name: "Konsultacja rodzicielska", price: "260 zł", duration: "60 min" },
    ],
  },
  {
    slug: "tomasz-karczewski",
    name: "Tomasz Karczewski ",
    role: "Coach",
    category: "coaching",
    space: "mind",
    image: therapist,
    phone: "+48 600 100 105",
    about:
      "Coaching rozwojowy i kariery — praca nad celami, motywacją i odkrywaniem zasobów.",
    specializations: ["Coaching kariery", "Coaching życiowy", "Wypalenie zawodowe"],
    methods: ["Model GROW", "Praca z wartościami", "Plany działania"],
    pricing: [
      { name: "Sesja coachingowa", price: "250 zł", duration: "60 min" },
      { name: "Pakiet 5 sesji", price: "1100 zł", duration: "5 × 60 min" },
    ],
  },
  {
    slug: "anna-marciniak",
    name: "Anna Marciniak",
    role: "Hatha Joga",
    category: "joga",
    space: "body",
    image: annaMarciniak,
    phone: "+48 600 100 106",
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
      { name: "Zajęcia grupowe", price: "50 zł", duration: "75 min" },
      { name: "Karnet 4 wejścia", price: "180 zł", duration: "miesiąc" },
      { name: "Sesja indywidualna", price: "150 zł", duration: "60 min" },
    ],
  },
  {
    slug: "ula-palczewska",
    name: "Ula Palczewska",
    role: "TERAPIA TAŃCEM I RUCHEM (DMT)\nTANIEC INTUICYJNY",
    category: "taniec",
    space: "body",
    image: ulaPalczewska,
    phone: "+48 600 100 107",
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
      { name: "Zajęcia grupowe", price: "60 zł", duration: "90 min" },
      { name: "Sesja indywidualna", price: "180 zł", duration: "60 min" },
      { name: "Warsztat weekendowy", price: "350 zł", duration: "8 godz." },
    ],
  },
];

export const getSpecialist = (slug: string) =>
  specialists.find((s) => s.slug === slug);

export const mindSpecialists = specialists.filter((s) => s.space === "mind");
export const bodySpecialists = specialists.filter((s) => s.space === "body");

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
