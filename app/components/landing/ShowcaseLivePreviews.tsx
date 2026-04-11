"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./showcase-preview.module.css";

const FEED_POSTS = [
  {
    id: "1",
    initials: "CR",
    avatarClass: "from-amber-700/50 to-zinc-900",
    name: "Carlos R.",
    handle: "@carlosr",
    time: "hace 1 h",
    body: "Pierna completada · 110 kg sentadilla 4×6. Salimos rotos 🔥",
    metric: "RPE 8",
    comments: 18,
    baseLikes: 124,
  },
  {
    id: "2",
    initials: "ER",
    avatarClass: "from-rose-800/45 to-zinc-900",
    name: "Elena Ruiz",
    handle: "@elenaruiz",
    time: "hace 3 h",
    body: "Día duro pero hecho. Mañana tirón con calma.",
    metric: "Descanso activo",
    comments: 6,
    baseLikes: 89,
  },
  {
    id: "3",
    initials: "LM",
    avatarClass: "from-sky-800/40 to-zinc-900",
    name: "Laura M.",
    handle: "@laurafuerza",
    time: "hace 5 h",
    body: "Semana 6: +2,5 kg en press vs. el mes pasado. Constancia.",
    metric: "82,5 kg × 5",
    comments: 14,
    baseLikes: 112,
  },
] as const;

function HeartIcon({ filled }: { filled: boolean }) {
  const path =
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className={filled ? "text-trainr-accent" : "text-zinc-500"}
      aria-hidden
    >
      {filled ? (
        <path fill="currentColor" d={path} />
      ) : (
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinejoin="round"
          d={path}
        />
      )}
    </svg>
  );
}

export function ShowcaseLiveFeed({ spotlight }: { spotlight?: boolean }) {
  const [likes0, setLikes0] = useState<number>(FEED_POSTS[0].baseLikes);
  const [pulse, setPulse] = useState(false);
  const [bump, setBump] = useState(false);
  const userNudged = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const tick = () => {
      setPulse(true);
      setBump(true);
      setLikes0((n) => (n < FEED_POSTS[0].baseLikes + 3 ? n + 1 : n));
      window.setTimeout(() => setPulse(false), 700);
      window.setTimeout(() => setBump(false), 600);
    };
    const id = window.setInterval(tick, 26000);
    return () => window.clearInterval(id);
  }, []);

  const onLike = useCallback(() => {
    if (userNudged.current) return;
    userNudged.current = true;
    setPulse(true);
    setBump(true);
    setLikes0((n) => n + 1);
    window.setTimeout(() => setPulse(false), 700);
    window.setTimeout(() => setBump(false), 600);
  }, []);

  const t = {
    head: spotlight ? "text-[13px] sm:text-[15px]" : "text-[12px] sm:text-[13px]",
    badge:
      spotlight ? "px-2.5 py-0.5 text-[10px] sm:text-[11px]" : "px-2 py-0.5 text-[9px] sm:text-[10px]",
    name: spotlight ? "text-[12px] sm:text-[14px]" : "text-[11px] sm:text-[12px]",
    meta: spotlight ? "text-[11px] sm:text-[12px]" : "text-[10px] sm:text-[11px]",
    body: spotlight ? "text-[11px] sm:text-[13px]" : "text-[10px] sm:text-[11px]",
    metric:
      spotlight ? "px-2 py-0.5 text-[10px] sm:text-[11px]" : "px-1.5 py-0.5 text-[9px] sm:text-[10px]",
    foot: spotlight ? "text-[11px] sm:text-[12px]" : "text-[10px] sm:text-[11px]",
    avatar: spotlight ? "h-9 w-9 sm:h-10 sm:w-10 text-[11px]" : "h-8 w-8 sm:h-9 sm:w-9 text-[10px]",
    pad: spotlight ? "p-3 sm:p-3.5" : "p-2.5 sm:p-3",
    gap: spotlight ? "sm:space-y-3.5 sm:px-3.5 sm:pb-11" : "sm:space-y-3 sm:px-3 sm:pb-10",
    clip: spotlight ? "max-h-[min(52vw,300px)] sm:max-h-[320px]" : "max-h-[min(48vw,260px)] sm:max-h-[280px]",
  };

  return (
    <div
      className={`space-y-2.5 px-2.5 pb-8 pt-0.5 sm:space-y-3 ${t.gap}`}
    >
      <div className="flex items-center justify-between px-0.5">
        <span className={`font-semibold text-white ${t.head}`}>Inicio</span>
        <span
          className={`rounded-md bg-[var(--trainr-accent-soft)] font-bold uppercase tracking-wide text-trainr-accent ${t.badge}`}
        >
          Feed
        </span>
      </div>

      <div
        className={`overflow-hidden rounded-[var(--tr-radius-md)] ${t.clip}`}
      >
        <div className={`${styles.feedTrack} space-y-2.5 pr-0.5 sm:space-y-3`}>
          {FEED_POSTS.map((post, index) => {
            const isPrimary = index === 0;
            const enter =
              index === 0
                ? styles.postIn
                : index === 1
                  ? styles.postInLate
                  : styles.postInLater;
            const likeCount = isPrimary ? likes0 : post.baseLikes;
            return (
              <article
                key={post.id}
                className={`rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] ring-1 ring-white/[0.04] ${t.pad} ${enter}`}
              >
                <div className="flex gap-2 sm:gap-2.5">
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-bold tabular-nums text-zinc-200 ring-1 ring-white/[0.1] ${post.avatarClass} ${t.avatar}`}
                  >
                    {post.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`font-semibold text-zinc-100 ${t.name}`}>
                      {post.name}
                    </p>
                    <p className={`text-zinc-500 ${t.meta}`}>
                      {post.handle} · {post.time}
                    </p>
                  </div>
                </div>
                <p
                  className={`mt-2 leading-relaxed text-zinc-400 sm:mt-2.5 ${t.body}`}
                >
                  {post.body}
                </p>
                <div
                  className={`mt-2 aspect-[16/10] rounded-[8px] bg-gradient-to-br from-zinc-800/85 to-zinc-950 ring-1 ring-white/[0.06] sm:mt-3 sm:rounded-[10px] ${spotlight ? "sm:rounded-[12px]" : ""}`}
                >
                  <div className="flex h-full flex-col justify-end p-2 sm:p-2.5">
                    <span
                      className={`inline-flex w-fit rounded bg-black/60 font-medium text-zinc-200 ${t.metric}`}
                    >
                      {post.metric}
                    </span>
                  </div>
                </div>
                <div
                  className={`mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--tr-border)] pt-2 sm:mt-3 sm:pt-2.5 ${t.foot} text-zinc-500`}
                >
                  {isPrimary ? (
                    <button
                      type="button"
                      onClick={onLike}
                      aria-label="Me gusta (demo)"
                      className={`flex items-center gap-1.5 rounded-md px-1 py-0.5 text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-200 ${pulse ? "text-trainr-accent" : ""}`}
                    >
                      <span
                        className={bump ? styles.likeBump : ""}
                        style={{ display: "inline-flex" }}
                      >
                        <HeartIcon filled={pulse} />
                      </span>
                      <span
                        className={`font-semibold tabular-nums text-zinc-300 transition-colors duration-300 ${pulse ? "text-trainr-accent" : ""}`}
                      >
                        {likeCount}
                      </span>
                    </button>
                  ) : (
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <HeartIcon filled={false} />
                      <span className="font-semibold tabular-nums text-zinc-300">
                        {likeCount}
                      </span>
                    </span>
                  )}
                  <span className="text-zinc-500">
                    {post.comments} comentarios
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ShowcaseLiveProfile({ dense }: { dense?: boolean }) {
  return (
    <div
      className={`space-y-2 px-2.5 pb-7 pt-0.5 sm:px-2.5 ${dense ? "pb-6" : ""}`}
    >
      <div className="flex flex-col items-center border-b border-[var(--tr-border)] pb-2.5 sm:pb-3">
        <div className="relative">
          <div
            className={`flex items-center justify-center rounded-full bg-gradient-to-br from-violet-800/45 to-zinc-900 font-bold text-zinc-100 ring-2 ring-[var(--tr-border-medium)] ${dense ? "h-11 w-11 text-[10px]" : "h-12 w-12 text-[11px]"}`}
          >
            MV
          </div>
          <span
            className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#050505] ${styles.onlinePulse}`}
            aria-hidden
            title="En línea"
          />
        </div>
        <p
          className={`mt-2 font-bold text-white ${dense ? "text-[11px] sm:text-[12px]" : "text-[12px]"}`}
        >
          Marc Vega
        </p>
        <p className="text-[9px] text-[var(--tr-text-tertiary)]">@marcvega</p>
        <p className="mt-1 text-[8px] text-zinc-500">Visto hace 2 min</p>
        <div className="mt-2 flex w-full justify-center gap-3 sm:gap-4">
          <div className="text-center">
            <p className="text-[10px] font-bold text-white sm:text-[11px]">48</p>
            <p className="text-[8px] text-zinc-500">posts</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-white sm:text-[11px]">
              1,2k
            </p>
            <p className="text-[8px] text-zinc-500">seg.</p>
          </div>
        </div>
        <div className="mt-2 flex w-full gap-1.5">
          <div className="flex-1 rounded-md bg-trainr-accent py-1.5 text-center text-[9px] font-extrabold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Seguir
          </div>
          <div className="flex-1 rounded-md border border-[var(--tr-border-medium)] py-1.5 text-center text-[9px] font-semibold text-zinc-200">
            Msj
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-square rounded-[4px] bg-gradient-to-br from-zinc-800/85 to-zinc-950 ring-1 ring-[var(--tr-border)]"
          />
        ))}
      </div>
    </div>
  );
}

export function ShowcaseLiveChat({ dense }: { dense?: boolean }) {
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const run = () => {
      setTyping(true);
      window.setTimeout(() => setTyping(false), 4200);
    };
    run();
    const id = window.setInterval(run, 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`flex flex-col px-2.5 pb-7 pt-0 sm:px-2.5 ${dense ? "min-h-[240px] pb-6 sm:min-h-[252px]" : "min-h-[260px] sm:min-h-[280px]"}`}
    >
      <div className="border-b border-[var(--tr-border)] py-1.5 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500">
          Chats
        </p>
        <p className="text-[11px] font-bold text-white">Carlos R.</p>
        <p className="text-[8px] text-zinc-500">@carlosr · activo</p>
      </div>

      {typing ? (
        <div
          className="mt-2 flex items-center gap-1.5 px-1"
          aria-live="polite"
        >
          <span className="text-[9px] text-zinc-500">escribiendo</span>
          <span className="flex gap-0.5">
            <span
              className={`inline-block h-1 w-1 rounded-full bg-zinc-500 ${styles.typingDot}`}
            />
            <span
              className={`inline-block h-1 w-1 rounded-full bg-zinc-500 ${styles.typingDot}`}
            />
            <span
              className={`inline-block h-1 w-1 rounded-full bg-zinc-500 ${styles.typingDot}`}
            />
          </span>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-end gap-1.5 py-2">
        <div className="max-w-[90%] rounded-xl rounded-bl-sm border border-[var(--tr-border)] bg-[var(--tr-surface-1)] px-2 py-1.5">
          <p className="text-[10px] leading-snug text-zinc-300">
            ¿Subimos peso la próxima serie?
          </p>
        </div>
        <div className="ml-auto max-w-[90%] rounded-xl rounded-br-sm bg-trainr-accent px-2 py-1.5">
          <p className="text-[10px] font-semibold text-white">
            Sí, +2,5 kg si RPE {"<"} 8.
          </p>
        </div>
      </div>
      <div className="flex gap-1.5 rounded-xl border border-[var(--tr-border-medium)] bg-[var(--tr-surface-1)] p-1.5">
        <div className="h-7 min-w-0 flex-1 rounded-md bg-[#08080a] ring-1 ring-[var(--tr-border)]" />
        <div className="flex h-7 w-8 items-center justify-center rounded-md bg-trainr-accent text-white transition-transform duration-200 hover:scale-105 active:scale-95">
          <span className="text-sm leading-none">↑</span>
        </div>
      </div>
    </div>
  );
}
