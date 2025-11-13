import { Shield, CheckCircle, Award } from "lucide-react";

const badges = [
  { icon: Shield, text: "Secure & Private", color: "text-green-400" },
  { icon: CheckCircle, text: "Instant Qualification", color: "text-blue-400" },
  { icon: Award, text: "Guaranteed Payout", color: "text-purple-400" },
];

export const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div 
            key={index} 
            className="flex items-center gap-2 group hover:scale-110 transition-transform duration-300"
          >
            <Icon className={`w-4 h-4 ${badge.color} group-hover:animate-pulse`} />
            <span className="text-sm text-muted-foreground">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
};
