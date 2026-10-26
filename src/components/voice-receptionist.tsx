import { useEffect, useState } from "react";

const embed = `<!doctype html><html lang="pl"><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><script src="https://homepl.ai-voicereceptionist.com/widget/v1/embed.js" data-agent-id="97da3ebf-86e1-4254-9b75-23069e97d3ca" defer></script></body></html>`;

export function VoiceReceptionist() {
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://misc.aireceptionist.voiceable.tech/widget/config?agent_id=97da3ebf-86e1-4254-9b75-23069e97d3ca", {
      credentials: "omit",
      signal: controller.signal,
    }).then((response) => setUnavailable(!response.ok)).catch(() => {
      if (!controller.signal.aborted) setUnavailable(true);
    });
    return () => controller.abort();
  }, []);

  return (
    <section aria-label="Recepcja online" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="font-serif text-xl font-semibold text-brand-navy">Recepcja online</h2>
        {unavailable && (
          <p role="status" className="mt-2 text-sm text-muted-foreground">
            Recepcja online jest chwilowo niedostępna.
          </p>
        )}
        <iframe
          title="Widget recepcji online"
          srcDoc={embed}
          allow="microphone"
          className={unavailable ? "hidden" : "mt-2 h-28 w-full border-0 focus-within:h-[640px]"}
        />
      </div>
    </section>
  );
}