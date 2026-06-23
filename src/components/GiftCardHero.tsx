import fifaLogo from "@/assets/fifa-logo.png";

export const GiftCardHero = () => {
  return (
    <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="rounded-2xl border-4 border-border bg-card/40 p-4 shadow-card hover:scale-105 transition-transform duration-300">
        <img
          src={fifaLogo}
          alt="FIFA World Cup 2026"
          className="w-28 sm:w-36 h-auto"
        />

      </div>
    </div>
  );
};
