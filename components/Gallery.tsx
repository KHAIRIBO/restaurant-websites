import Image from "next/image";
import Reveal from "@/components/Reveal";

const shots = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-white/10 bg-neutral-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-white">
            Inside <span className="gradient-text">murox.studio beta</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group relative h-64 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
