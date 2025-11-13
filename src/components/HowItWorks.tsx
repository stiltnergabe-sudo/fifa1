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
    <Card className="bg-card border-border/30 p-6 mb-6 shadow-card animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
      <h2 className="text-xl font-bold text-primary mb-5 text-center">How It Works</h2>
      <div className="space-y-3">
        {steps.map((step) => (
          <div 
            key={step.number} 
            className="flex items-center gap-3"
          >
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-primary font-semibold text-sm">
              {step.number}
            </div>
            <p className="text-foreground text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
