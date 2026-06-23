import fifaLogo from "@/assets/fifa-logo.png.asset.json";

export const GiftCardHero = () => {
  return (
    <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="rounded-2xl border-[3px] border-border bg-card/40 p-5 shadow-card hover:scale-105 transition-transform duration-300">
        <img
          src={fifaLogo.url}
          alt="FIFA World Cup 2026"
          className="w-32 sm:w-40 h-auto"
        />

      </div>
    </div>
  );
};
