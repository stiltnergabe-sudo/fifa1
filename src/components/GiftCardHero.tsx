import giftCard from "@/assets/sephora-gift-card.png";

export const GiftCardHero = () => {
  return (
    <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
      <img 
        src={giftCard} 
        alt="Sephora Gift Card" 
        className="w-48 h-auto rounded-xl shadow-card hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};
