import krystian from "@/assets/specialist-krystian.jpg";
import anna from "@/assets/specialist-anna.jpg";
import therapist from "@/assets/specialist-therapist.jpg";
import sexologist from "@/assets/specialist-sexologist.jpg";
import annaMarciniak from "@/assets/specialist-anna-marciniak.jpg";
import ulaPalczewska from "@/assets/specialist-ula-palczewska.jpg";

export type SpecialistCategory = "mind" | "body";

export type Specialist = {
  slug: string;
  name: string;
  role: string;
  category: SpecialistCategory;
  image: string;
  about: string;
  specializations: string[];
  methods: string[];
  pricing: { name: string; price: string; duration: string }[];
};

export const specialists: Specialist[] = [
  {
    slug: "krystian-antoniewicz",
    name: "Krystian Antoniewicz",
    role: "Psychiatra",
    category: "mind",
    image: krystian,
    about:
      "Doctor of medicine specializing in adult psychiatry with over 15 years of clinical experience. Krystian focuses on mood disorders, anxiety, and pharmacological treatment, always combining medical expertise with deep empathy for each patient's story.",
    specializations: [
      "Depression & mood disorders",
      "Anxiety & panic disorders",
      "Bipolar disorder",
      "Sleep disorders",
      "Pharmacological treatment",
    ],
    methods: [
      "Comprehensive psychiatric assessment",
      "Evidence-based pharmacotherapy",
      "Integrative consultation with therapists",
      "Long-term care planning",
    ],
    pricing: [
      { name: "First consultation", price: "350 PLN", duration: "60 min" },
      { name: "Follow-up visit", price: "250 PLN", duration: "30 min" },
      { name: "Prescription renewal", price: "150 PLN", duration: "15 min" },
    ],
  },
  {
    slug: "anna-antoniewicz",
    name: "Anna Antoniewicz",
    role: "Psycholog",
    category: "mind",
    image: anna,
    about:
      "Certified clinical psychologist passionate about helping individuals navigate life transitions, stress, and relationships. Anna creates a safe, non-judgmental space where clients can explore their inner world and grow.",
    specializations: [
      "Stress & burnout",
      "Self-esteem & personal growth",
      "Relationship difficulties",
      "Grief & life transitions",
      "Diagnostic assessment",
    ],
    methods: [
      "Cognitive-behavioural approach",
      "Humanistic & person-centered",
      "Mindfulness-based interventions",
      "Psychoeducation",
    ],
    pricing: [
      { name: "Individual session", price: "220 PLN", duration: "50 min" },
      { name: "Diagnostic consultation", price: "280 PLN", duration: "60 min" },
      { name: "Couples session", price: "320 PLN", duration: "75 min" },
    ],
  },
  {
    slug: "psychotherapist",
    name: "Wkrótce",
    role: "Psychoterapeuta",
    category: "mind",
    image: therapist,
    about:
      "Our psychotherapy specialist will soon join the team. Trained in long-term integrative therapy, focused on helping clients understand patterns, heal trauma, and build lasting change.",
    specializations: [
      "Trauma & PTSD",
      "Personality disorders",
      "Long-term psychotherapy",
      "Emotion regulation",
    ],
    methods: [
      "Integrative psychotherapy",
      "Schema therapy",
      "Psychodynamic approach",
    ],
    pricing: [
      { name: "Therapy session", price: "230 PLN", duration: "50 min" },
      { name: "Initial consultation", price: "260 PLN", duration: "60 min" },
    ],
  },
  {
    slug: "sexologist",
    name: "Wkrótce",
    role: "Seksuolog",
    category: "mind",
    image: sexologist,
    about:
      "Our sexology specialist offers discreet, professional support for individuals and couples. A safe space to discuss intimacy, identity, and relationship concerns without judgment.",
    specializations: [
      "Intimacy difficulties",
      "Couples sexual therapy",
      "Sexual identity & orientation",
      "Sexual education",
    ],
    methods: [
      "Cognitive-behavioural sex therapy",
      "Couples-focused interventions",
      "Psychoeducation",
    ],
    pricing: [
      { name: "Individual consultation", price: "280 PLN", duration: "60 min" },
      { name: "Couples session", price: "380 PLN", duration: "75 min" },
    ],
  },
  {
    slug: "anna-marciniak",
    name: "Anna Marciniak",
    role: "Hatha Joga",
    category: "body",
    image: annaMarciniak,
    about:
      "Nauczycielka Hatha Jogi z wieloletnią praktyką. Prowadzi zajęcia w nurcie klasycznym, łącząc pracę z oddechem, asanami i uważnością. Tworzy przestrzeń, w której każdy — niezależnie od poziomu — może odnaleźć równowagę ciała i umysłu.",
    specializations: [
      "Hatha Joga klasyczna",
      "Joga dla początkujących",
      "Praca z oddechem (pranayama)",
      "Joga regeneracyjna",
    ],
    methods: [
      "Asany dostosowane do możliwości uczestnika",
      "Techniki oddechowe",
      "Relaksacja i medytacja",
    ],
    pricing: [
      { name: "Zajęcia grupowe", price: "50 PLN", duration: "75 min" },
      { name: "Karnet 4 wejścia", price: "180 PLN", duration: "miesiąc" },
      { name: "Sesja indywidualna", price: "150 PLN", duration: "60 min" },
    ],
  },
  {
    slug: "ula-palczewska",
    name: "Ula Palczewska",
    role: "Terapia Tańcem i Ruchem",
    category: "body",
    image: ulaPalczewska,
    about:
      "Certyfikowana terapeutka tańcem i ruchem (DMT). Pomaga odkrywać emocje przez świadomy ruch ciała, wspierając integrację psychofizyczną. Zajęcia są bezpieczną przestrzenią ekspresji, niezależnie od doświadczenia tanecznego.",
    specializations: [
      "Terapia tańcem i ruchem (DMT)",
      "Praca z ciałem i emocjami",
      "Świadomość ciała",
      "Grupy terapeutyczne",
    ],
    methods: [
      "Improwizacja ruchowa",
      "Autentyczny ruch",
      "Praca z oddechem i ugruntowaniem",
    ],
    pricing: [
      { name: "Zajęcia grupowe", price: "60 PLN", duration: "90 min" },
      { name: "Sesja indywidualna", price: "180 PLN", duration: "60 min" },
      { name: "Warsztat weekendowy", price: "350 PLN", duration: "8 godz." },
    ],
  },
];

export const getSpecialist = (slug: string) =>
  specialists.find((s) => s.slug === slug);

export const mindSpecialists = specialists.filter((s) => s.category === "mind");
export const bodySpecialists = specialists.filter((s) => s.category === "body");
