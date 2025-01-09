import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="pt-6 px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Icon className="w-8 h-8 text-book-red" />
          <h3 className="font-serif text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};