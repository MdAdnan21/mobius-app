import { CheckCircle } from "lucide-react";
import ResumeCoaching from "./ResumeCoaching";
import { FaArrowRight } from "react-icons/fa";

function AdvanceCard() {
  return (
    <>
      <div className="bg-primary text-background rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto min-h-[300px] border border-primary">
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-semibold mb-2">Advance</h2>
          <p className="text-sm text-background/80 mb-6">
            Top-tier support for serious job hunters:
          </p>
          <div className="w-64 border-t border-background/50 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <span>Everything in Plus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <span>Custom Resumes & Cover Letters</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <span>20 fully customized applications/week</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <span>Help with complex job searches</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <span>
                Access to senior resume experts, Founder & Exec Coaches
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-6 mt-10 md:mt-0 md:ml-10">
          <div className="text-5xl font-bold">
            $150<span className="text-xl font-bold">/week</span>
          </div>
          <div className="flex justify-start gap-4 mt-24">
            <button
              type="button"
              className="flex items-center gap-2 bg-white hover:bg-primary/90 text-primary py-3 px-6 rounded-full font-semibold"
            >
              Get Started <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <ResumeCoaching />
      </div>
    </>
  );
}

export default AdvanceCard;
