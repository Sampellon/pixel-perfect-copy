import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import hand from "@/assets/hand-sign.jpg";

const MAPS = "https://maps.app.goo.gl/c9mpb8LCcQWD8zrn9";
const SPOTIFY = "https://open.spotify.com/track/1i4JlWqVDl8nG8lL6ybjuN";
const YOUTUBE = "https://www.youtube.com/results?search_query=Ramalama+Bang+Bang+R%C3%B3is%C3%ADn+Murphy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRAVERS: BLOOD MOON — 30 de octubre" },
      { name: "description", content: "Fiesta de Halloween TRAVERS: BLOOD MOON. 30 de octubre, 8:00 PM – 1:30 AM en Terraza Fersy Edén. Disfraz obligatorio." },
      { property: "og:title", content: "TRAVERS: BLOOD MOON" },
      { property: "og:description", content: "30 de octubre · Terraza Fersy Edén · Disfraz obligatorio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] tracking-[0.35em] text-blood uppercase">{children}</p>;
}

function Invitation() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="grain fixed -inset-[50%] z-50" />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[100svh] max-w-xl flex-col items-center justify-start px-6 pt-14 text-center">
        <img src={hero} alt="Figura encapuchada frente a una luna de sangre" width={1024} height={1536}
          className="absolute inset-0 h-full w-full object-cover object-bottom opacity-80" />
        <div className="moon-halo absolute left-1/2 top-[52%] h-[70vw] max-h-[520px] w-[70vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="fog absolute inset-0" />
        <div className="fade-bottom absolute inset-0" />

        <div className="relative z-10 rise">
          <Label>Halloween · MMXXVI</Label>
        </div>
        <h1 className="relative z-10 mt-6 leading-none">
          <span className="rise block font-display text-[26vw] tracking-tight text-foreground sm:text-[150px]" style={{ animationDelay: ".2s" }}>
            TRAVERS
          </span>
          <span className="rise mt-2 flex items-center justify-center gap-3 font-serif text-3xl italic tracking-[0.25em] text-blood text-glow sm:text-4xl" style={{ animationDelay: ".6s" }}>
            <span className="h-px w-8 bg-blood" />Blood Moon<span className="h-px w-8 bg-blood" />
          </span>
        </h1>

        <div className="relative z-10 mt-auto mb-16 rise" style={{ animationDelay: "1s" }}>
          <p className="font-display text-5xl tracking-wide text-foreground sm:text-6xl">30 DE OCTUBRE</p>
          <p className="mt-3 font-mono text-xs tracking-[0.3em] text-steel">8:00 PM – 1:30 AM</p>
        </div>
      </section>

      {/* PRICES */}
      <section className="relative mx-auto max-w-xl px-6 py-16">
        <Label>Acceso</Label>
        <div className="relative mt-6 aspect-[896/1200] w-full overflow-hidden">
          <img src={hand} alt="Mano sosteniendo un letrero con los precios" loading="lazy" width={896} height={1200}
            className="monochrome absolute inset-0 h-full w-full object-cover" />
          <div className="vignette absolute inset-0" />
          <div className="absolute left-[8%] right-[6%] top-[43%] bottom-[30%] flex rotate-[1.5deg] flex-col justify-center gap-[4%] text-ink">
            <div className="flex items-end justify-between gap-3 border-b-2 border-ink pb-2">
              <div className="text-left">
                <p className="font-mono text-[2.4vw] font-bold tracking-[0.2em] sm:text-sm">PREVENTA</p>
                <p className="font-mono text-[2vw] sm:text-[11px]">POR PERSONA</p>
              </div>
              <p className="bg-ink px-3 font-display text-[11vw] leading-tight text-blood sm:text-7xl">$150</p>
            </div>
            <div className="flex items-end justify-between gap-3">
              <div className="text-left">
                <p className="font-mono text-[2.4vw] font-bold tracking-[0.2em] sm:text-sm">DÍA DEL EVENTO</p>
                <p className="font-mono text-[2vw] sm:text-[11px]">POR PERSONA</p>
              </div>
              <p className="font-display text-[7vw] leading-tight text-ink sm:text-5xl">$200</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOUNDTRACK */}
      <section className="relative mx-auto max-w-xl px-6 py-16">
        <Label>Soundtrack de la noche</Label>
        <div className="mt-6 border border-blood/60 bg-card/40 p-6">
          <div className="flex h-10 items-end gap-[3px]" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="eq-bar h-full"
                style={{ animationDelay: `${(i % 6) * 0.13}s`, animationDuration: `${680 + (i % 5) * 190}ms` }} />
            ))}
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-wide text-foreground text-glow sm:text-6xl">
            RAMALAMA
            <span className="block text-blood">(BANG BANG)</span>
          </h2>
          <p className="mt-4 font-mono text-[11px] tracking-[0.28em] text-steel">RÓISÍN MURPHY · RUBY BLUE · 2005</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a href={SPOTIFY} target="_blank" rel="noopener noreferrer"
              className="bg-primary py-4 text-center font-mono text-xs font-bold tracking-[0.3em] text-primary-foreground transition hover:bg-foreground hover:text-background">
              ESCUCHAR EN SPOTIFY
            </a>
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer"
              className="border border-border py-4 text-center font-mono text-xs font-bold tracking-[0.3em] text-foreground transition hover:border-blood hover:text-blood">
              VER EN YOUTUBE
            </a>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="relative mx-auto max-w-xl px-6 pb-24">
        <dl className="divide-y divide-border border-y border-border">
          {[
            ["Fecha", "30 DE OCTUBRE"],
            ["Horario", "8:00 PM – 1:30 AM"],
            ["Lugar", "TERRAZA FERSY EDÉN"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-6 py-5">
              <dt><Label>{k}</Label></dt>
              <dd className="text-right font-display text-2xl tracking-wide sm:text-3xl">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border border-blood p-6 text-center">
          <Label>Código de vestimenta</Label>
          <p className="mt-3 font-display text-4xl tracking-wide text-foreground text-glow sm:text-5xl">DISFRAZ OBLIGATORIO</p>
        </div>

        <a href={MAPS} target="_blank" rel="noopener noreferrer"
          className="mt-10 block bg-primary py-5 text-center font-mono text-sm font-bold tracking-[0.4em] text-primary-foreground transition hover:bg-foreground hover:text-background">
          VER UBICACIÓN →
        </a>

        <p className="mt-16 text-center font-serif text-lg italic text-muted-foreground">
          TRAVERS: BLOOD MOON
        </p>
      </section>
    </main>
  );
}
