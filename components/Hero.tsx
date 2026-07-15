import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/image.png"
          alt="Restaurant ambiance"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-40 text-center">
        <Reveal>
          <p className="mb-5 inline-block rounded-full border border-white/15 px-4 py-1 text-xs font-medium tracking-widest text-neutral-300 uppercase">
            Est. 2024 · Fine Dining
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight text-white sm:text-7xl">
            Where every plate <span className="gradient-text">tells a story</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-neutral-300">
            Seasonal ingredients, crafted by passion. Reserve your table and taste
            the difference.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reservation"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-black transition hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Book a table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View menu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
