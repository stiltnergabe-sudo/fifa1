import { Card } from "@/components/ui/card";

const steps = [
  { number: 1, text: "Click Claim Now" },
  { number: 2, text: "Register with Email & basic info" },
  { number: 3, text: "Complete a quick survey" },
  { number: 4, text: "Complete at least 3-5 Deals" },
  { number: 5, text: "Check your email for the checkout code" },
];

export const HowItWorks = () => {
  return (
    <Card className="bg-card/40 border border-border/40 p-8 mb-6 shadow-glow rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">How It Works</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div 
            key={step.number} 
            className="flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/60 flex items-center justify-center text-primary font-bold text-sm border border-border/20">
              {step.number}
            </div>
            <p className="text-foreground text-base leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
