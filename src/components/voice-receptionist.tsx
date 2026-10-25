import { useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const widgetDocument = `<!doctype html><html lang="pl"><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;background:transparent}</style></head><body><script src="https://homepl.ai-voicereceptionist.com/widget/v1/embed.js" data-agent-id="97da3ebf-86e1-4254-9b75-23069e97d3ca" defer></script></body></html>`;

export function VoiceReceptionist() {
  const [expanded, setExpanded] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  return (
    <section aria-label="Recepcja online" className="relative mx-auto w-full max-w-6xl">
      {expanded && (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Zwiń recepcję online"
          className="absolute left-4 top-2 z-10"
          onClick={() => setExpanded(false)}
        >
          <X />
        </Button>
      )}
      <iframe
        ref={frame}
        title="Recepcja online PoZdrowienie"
        srcDoc={widgetDocument}
        allow="microphone"
        className={`block w-full border-0 ${expanded ? "h-[min(720px,calc(100dvh-100px))]" : "h-24"}`}
        onLoad={() => {
          frame.current?.contentDocument?.addEventListener("click", () => setExpanded(true));
        }}
      />
    </section>
  );
}