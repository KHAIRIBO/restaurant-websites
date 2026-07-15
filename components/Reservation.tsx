import Reveal from "@/components/Reveal";

export default function Reservation() {
  return (
    <section id="reservation" className="border-t border-white/10 py-28">
      <Reveal>
        <div className="mx-auto max-w-xl px-6">
          <div className="rounded-3xl glass p-8 sm:p-10">
            <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-white">
              Reserve your table
            </h2>
            <p className="mt-3 text-center font-light text-neutral-400">
              We&apos;d love to host you. Book in advance to avoid waiting.
            </p>
            <form className="mt-10 grid gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-neutral-500 outline-none transition focus:border-primary"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="date"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-primary"
                />
                <input
                  type="time"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-primary"
                />
              </div>
              <input
                type="number"
                placeholder="Number of guests"
                min={1}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-neutral-500 outline-none transition focus:border-primary"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
              >
                Confirm reservation
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
