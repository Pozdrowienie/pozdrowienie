import { categoryMeta, type SpecialistCategory } from "@/data/specialists";
import {
  Brain,
  Stethoscope,
  HeartHandshake,
  Flower2,
  Music2,
  Sparkles,
  Baby,
  MessagesSquare,
} from "lucide-react";

const ORDER: SpecialistCategory[] = [
  "psycholog",
  "psychiatra",
  "psychoterapeuta",
  "dzieci",
  "coaching",
  "joga",
  "taniec",
];

const ICONS: Record<SpecialistCategory, React.ComponentType<{ className?: string }>> = {
  psycholog: Brain,
  psychiatra: Stethoscope,
  psychoterapeuta: MessagesSquare,
  dzieci: Baby,
  coaching: Sparkles,
  joga: Flower2,
  taniec: Music2,
};

export function CategoryCircles({
  active,
  onSelect,
}: {
  active: SpecialistCategory | "all";
  onSelect: (c: SpecialistCategory | "all") => void;
}) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-5 md:gap-7">
      <CircleButton
        label="Wszyscy"
        Icon={Brain}
        space="mind"
        active={active === "all"}
        onClick={() => onSelect("all")}
      />
      {ORDER.map((cat) => {
        const meta = categoryMeta[cat];
        const Icon = ICONS[cat];
        return (
          <CircleButton
            key={cat}
            label={meta.label}
            Icon={Icon}
            space={meta.space}
            active={active === cat}
            onClick={() => onSelect(cat)}
          />
        );
      })}
    </div>
  );
}

function CircleButton({
  label,
  Icon,
  space,
  active,
  onClick,
}: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  space: "mind" | "body";
  active: boolean;
  onClick: () => void;
}) {
  const palette =
    space === "mind"
      ? {
          bg: "bg-mind/15",
          ring: "ring-mind/40",
          text: "text-mind",
          activeBg: "bg-mind text-mind-foreground",
        }
      : {
          bg: "bg-body/15",
          ring: "ring-body/40",
          text: "text-body",
          activeBg: "bg-body text-body-foreground",
        };
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-24 flex-col items-center gap-2 text-center md:w-28"
    >
      <span
        className={`flex h-20 w-20 items-center justify-center rounded-full ring-2 transition-all md:h-24 md:w-24 ${
          active ? `${palette.activeBg} shadow-lg ${palette.ring}` : `${palette.bg} ${palette.ring} group-hover:-translate-y-0.5`
        }`}
      >
        <Icon className={`h-8 w-8 ${active ? "" : palette.text}`} />
      </span>
      <span
        className={`text-xs font-medium leading-tight ${
          active ? palette.text : "text-foreground/80"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
