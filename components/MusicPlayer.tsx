"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => audio.play().catch(() => {});
    tryPlay();

    const onInteract = () => {
      if (!muted) tryPlay();
      window.removeEventListener("click", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
    window.addEventListener("click", onInteract);
    window.addEventListener("touchstart", onInteract);
    window.addEventListener("keydown", onInteract);

    return () => {
      window.removeEventListener("click", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
  }, [muted]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (muted) {
      audio.muted = false;
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/weightless.mp3" loop autoPlay preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <span className="rounded-full border border-white/20 bg-black/70 px-3 py-2 text-xs text-neutral-200 backdrop-blur">
          Weightless · Marconi Union
        </span>
        <button
          onClick={toggle}
          aria-label={muted ? "Unmute music" : "Mute music"}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur transition hover:bg-black"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </>
  );
}
