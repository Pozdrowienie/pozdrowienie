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
  {
    id: "warsztaty",
    label: "Warsztaty rozwojowe",
    slugs: ["ula-palczewska", "anna-marciniak", "joanna-wolar", "anna-antoniewicz"],
    space: "body",
    notes: {
      "ula-palczewska": "„W Poruszeniu ku zmianie” — więcej informacji na profilu IG @ulapalczewska",
      "anna-marciniak": "„Poranna Joga i medytacja”",
      "joanna-wolar": "Warsztaty rozwojowe dla kobiet — joga, psychosomatyka, układ nerwowy. Poczuj lekkość w umyśle i ciele.",
      "anna-antoniewicz": "„Wyregulowana” — warsztat dla kobiet: regulacja układu nerwowego z kąpielą w dźwiękach gongu. Więcej informacji: annaantoniewicz.pl",
    },
  },
] as const;

export type HomeService = (typeof homeServices)[number];