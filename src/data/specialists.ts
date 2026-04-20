import krystian from "@/assets/specialist-krystian.jpg";
import anna from "@/assets/specialist-anna.jpg";
import therapist from "@/assets/specialist-therapist.jpg";
import sexologist from "@/assets/specialist-sexologist.jpg";

export type Specialist = {
  slug: string;
  name: string;
  role: string;
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
    role: "Psychiatrist",
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
    role: "Psychologist",
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
    name: "Coming Soon",
    role: "Psychotherapist",
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
    name: "Coming Soon",
    role: "Sexologist",
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
];

export const getSpecialist = (slug: string) =>
  specialists.find((s) => s.slug === slug);
