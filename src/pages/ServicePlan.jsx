import AdvanceCard from "../components/AdvanceCard";
import PricingCard from "../components/PricingCard";

function ServicePlan() {
  return (
    <>
      <div className="min-h-screen bg-background text-white py-20 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-primary mb-12 items-start">
          Job Application Service Plans
        </h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <PricingCard
            title="April Promo"
            price="$35"
            features={[
              "Curated jobs from 1M+ listings, refreshed every 48 hours",
              "Up to 20 human-applied roles per week (no bots, just real company sites)",
              "Need more? Add extra apps for just $1.5 each",
              "Your own dedicated application analyst",
              "Personalized with up to 10 filters & 5 job titles",
            ]}
          />

          <PricingCard
            title="Starter"
            price="$50"
            isPopular={true}
            features={[
              "All the perks of the Promo Plan, plus:",
              "Resume review & story-focused feedback",
              "Dedicated search specialist",
              "Up to 50 job apps/week",
              "Extra apps at $1.5 each",
              "Analyst support within 6 hours (SLA/PST hours)",
            ]}
          />

          <PricingCard
            title="Plus"
            price="$100"
            features={[
              "Everything in Starter, with more muscle:",
              "Up to 75 apps/week",
              "Apply to 15 job titles",
              "Analyst + full application team on Pacific hours",
            ]}
          />
        </div>
      </div>
      <div>
        <AdvanceCard />
      </div>
    </>
  );
}

export default ServicePlan;
