import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 sm:flex-row">
          <p className="font-display text-base text-neutral-300">
            murox.studio <span className="text-primary">beta</span>
          </p>
          <ul className="flex gap-6">
            <li><a href="#" className="transition hover:text-primary">Instagram</a></li>
            <li><a href="#" className="transition hover:text-primary">Facebook</a></li>
            <li><a href="#reservation" className="transition hover:text-primary">Contact</a></li>
          </ul>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </Reveal>
    </footer>
  );
}
