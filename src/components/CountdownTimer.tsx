import { useEffect, useState } from "react";

const TARGET_MS = 1 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000; // 1d 3h

export const CountdownTimer = () => {
  const [target] = useState(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("fifa_countdown_target") : null;
    if (stored) {
      const t = parseInt(stored, 10);
      if (!isNaN(t) && t > Date.now()) return t;
    }
    const t = Date.now() + TARGET_MS;
    if (typeof window !== "undefined") localStorage.setItem("fifa_countdown_target", String(t));
    return t;
  });

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 min-w-[3rem] text-2xl font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center mb-6 animate-in fade-in duration-1000">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Offer ends in</p>
      <div className="flex gap-2">
        <Box value={d} label="Days" />
        <Box value={h} label="Hours" />
        <Box value={m} label="Mins" />
        <Box value={s} label="Secs" />
      </div>
    </div>
  );
};
