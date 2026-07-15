"use client";

import { useEffect, useRef, useState } from "react";

const PASSWORD = "khairibo90";

export default function Gate({ children }: { children: React.ReactNode }) {
  const [triggered, setTriggered] = useState(false);
  const [passed, setPassed] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const flagged = useRef(false);
  const passedRef = useRef(false);

  useEffect(() => {
    const block = (e: Event) => e.preventDefault();

    const flag = () => {
      if (flagged.current || passedRef.current) return;
      flagged.current = true;
      setTriggered(true);
    };

    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "u" || e.key === "s")) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        if (e.key === "PrintScreen") flag();
      }
    };

    const onPrintScreenUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") flag();
    };

    const devtoolsInterval = setInterval(() => {
      const gap =
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160;
      if (gap) flag();
    }, 1000);

    const dbgInterval = setInterval(() => {
      const start = performance.now();
      debugger;
      if (performance.now() - start > 100) flag();
    }, 1500);

    document.addEventListener("contextmenu", block);
    document.addEventListener("keydown", onKey);
    document.addEventListener("keyup", onPrintScreenUp);

    return () => {
      clearInterval(devtoolsInterval);
      clearInterval(dbgInterval);
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("keyup", onPrintScreenUp);
    };
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      passedRef.current = true;
      setPassed(true);
      setTriggered(false);
      setValue("");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div
        className={`transition duration-300 ${
          triggered ? "pointer-events-none scale-[0.99] blur-xl" : ""
        }`}
      >
        {children}
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] overflow-hidden opacity-[0.06]"
      >
        <div className="flex h-full w-full flex-wrap content-center gap-x-12 gap-y-12 -rotate-25 scale-125">
          {Array.from({ length: 70 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap font-display text-2xl text-white">
              Created by Khairi Bouzakher
            </span>
          ))}
        </div>
      </div>

      {triggered && (
        <div className="fixed inset-x-0 top-0 z-[120] flex flex-wrap items-center justify-center gap-3 border-b border-primary/40 bg-black/90 px-4 py-3 backdrop-blur">
          <span className="font-display text-sm text-primary">
            Verification required
          </span>
          <form onSubmit={submit} className="flex items-center gap-2">
            <input
              type="password"
              value={value}
              autoFocus
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              className="w-44 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              OK
            </button>
          </form>
          {error && <span className="text-xs text-red-400">Incorrect password</span>}
        </div>
      )}
    </>
  );
}
