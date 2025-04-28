import { CheckCircle } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

function PricingCard({ title, price, features, isPopular }) {
  return (
    <div
      className={`flex flex-col justify-between p-8 rounded-2xl border
      ${isPopular ? "border-primary shadow-lg" : "border-primary shadow-lg"}
      bg-background w-full max-w-sm min-h-[600px] transition hover:scale-105`}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-primary">{title}</h2>
          {isPopular && (
            <span className="text-xs bg-primary text-background py-1 px-3 rounded-full">
              Popular
            </span>
          )}
        </div>
        <div className="text-4xl font-bold text-primary mb-2">
          {price}
          <span className="text-base font-normal">/week</span>
        </div>
        <div className="w-full border-t border-border my-6"></div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-secondary text-sm leading-relaxed"
            >
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-start gap-4">
        <button
          type="button"
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-background py-3 px-6 rounded-full font-semibold"
        >
          Get Started <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
