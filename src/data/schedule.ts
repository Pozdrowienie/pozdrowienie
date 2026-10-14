export type ScheduleEntry = {
  service: string;
  specialists: string[];
  note?: string;
  space: "mind" | "body";
};

export const weeklySchedule: { day: string; entries: ScheduleEntry[] }[] = [
  { day: "Poniedziałek", entries: [
    { service: "Psychoterapia indywidualna", specialists: ["marek-pisarski"], space: "mind" },
    { service: "Konsultacje psychologiczne i diagnoza ADHD", specialists: ["aksana-gogulska"], space: "mind" },
  ] },
  { day: "Wtorek", entries: [
    { service: "Konsultacje psychiatryczne", specialists: ["krystian-antoniewicz"], space: "mind" },
    { service: "Konsultacje psychologiczne i diagnoza ADHD", specialists: ["aksana-gogulska"], space: "mind" },
    { service: "Męskie Kręgi", specialists: ["tomasz-karczewski"], note: "Spotkania co 3 tygodnie", space: "mind" },
    { service: "Taniec intuicyjny", specialists: ["ula-palczewska"], note: "Wybrane wtorki", space: "body" },
  ] },
  { day: "Środa", entries: [
    { service: "Psychoterapia indywidualna", specialists: ["karolina-ferensowicz"], space: "mind" },
    { service: "Terapia par i małżeństw", specialists: ["karolina-ferensowicz", "marek-pisarski"], note: "Prowadzona wspólnie przez dwoje psychoterapeutów", space: "mind" },
    { service: "Psycholog — dzieci, młodzież i dorośli", specialists: ["anna-antoniewicz"], space: "mind" },
    { service: "Hatha Joga", specialists: ["anna-marciniak"], space: "body" },
  ] },
  { day: "Czwartek", entries: [
    { service: "Psychoterapia indywidualna", specialists: ["marek-pisarski"], space: "mind" },
    { service: "Konsultacje psychiatryczne", specialists: ["krystian-antoniewicz"], space: "mind" },
    { service: "Taniec intuicyjny", specialists: ["ula-palczewska"], space: "body" },
    { service: "Męskie Kręgi", specialists: ["tomasz-karczewski"], note: "W wybrane czwartki", space: "mind" },
  ] },
  { day: "Piątek", entries: [
    { service: "Psycholog — dzieci, młodzież i dorośli", specialists: ["anna-antoniewicz"], space: "mind" },
    { service: "Joga „czuły reset”", specialists: ["joanna-wolar"], space: "body" },
  ] },
];