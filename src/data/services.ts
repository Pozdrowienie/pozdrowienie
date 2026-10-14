export const homeServices = [
  { id: "pary", label: "Terapia par i małżeństw", slugs: ["marek-pisarski", "karolina-ferensowicz"], space: "mind" },
  { id: "psychoterapia", label: "Psychoterapia", slugs: ["marek-pisarski", "karolina-ferensowicz"], space: "mind" },
  { id: "joga", label: "Joga", slugs: ["anna-marciniak", "joanna-wolar"], space: "body" },
  { id: "kregi", label: "Męskie kręgi", slugs: ["tomasz-karczewski"], space: "mind" },
  { id: "psycholog", label: "Konsultacje psychologiczne", slugs: ["anna-antoniewicz", "aksana-gogulska"], space: "mind" },
  { id: "psychiatra", label: "Konsultacje psychiatryczne", slugs: ["krystian-antoniewicz"], space: "mind" },
  { id: "adhd", label: "Diagnoza ADHD", slugs: ["aksana-gogulska"], space: "mind" },
  { id: "osobowosc", label: "Diagnoza osobowości", slugs: ["aksana-gogulska"], space: "mind" },
  { id: "dzieci", label: "Konsultacje dla dzieci i młodzieży", slugs: ["anna-antoniewicz"], space: "mind" },
  { id: "taniec", label: "Taniec intuicyjny", slugs: ["ula-palczewska"], space: "body" },
  { id: "coaching", label: "Coaching i mentoring", slugs: ["tomasz-karczewski"], space: "mind" },
] as const;

export type HomeService = (typeof homeServices)[number];