import { CheckCircle } from "lucide-react";

import React from "react";
import { ContactUsBanner } from "./ContactUs";
import { FaArrowRight } from "react-icons/fa";

const ResumeCoaching = () => {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-center text-primary">
          Resume Building & Coaching
        </h2>
        <p className="mt-2 text-secondary">
          Let’s talk about where you’re headed — and how your resume can get you
          there. <br />
          <span className="font-semibold">Schedule a call to get started.</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        <div className="w-full max-w-md border border-primary rounded-2xl p-8 flex flex-col justify-between transition hover:scale-105">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Resume Rebuild
            </h3>
            <p className="text-primary mb-6">
              Crafted for senior to VP-level professionals ready for their next
              big step.
            </p>

            <div className="flex items-end mb-4">
              <span className="text-primary font-bold text-4xl mr-3">
                $1000
              </span>
              <span className="text-secondary font-semibold text-lg">
                one time
              </span>
            </div>

            <hr className="border-secondary mb-6" />

            <ul className="space-y-4">
              {[
                "3× 30-min coaching",
                "Focused on storytelling, not just formatting",
                "Analyst + full application team on Pacific hours",
                "Tailored to your target industry, company, or role",
                "Direct work with our co-founder (ex-Google, JP Morgan)",
                "Executive coaching from UC Berkeley alum with 10+ yrs experience",
                "Resume Rebuild portfolio available upon request",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start mt-8">
            <button
              type="button"
              className="flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-full font-semibold"
            >
              Get Started <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interview Prep Card */}
        <div className="w-full max-w-md border border-primary rounded-2xl p-8 flex flex-col justify-between h-[650px] transition hover:scale-105">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Interview Prep
            </h3>
            <p className="text-secondary mb-6">
              Two sessions to sharpen your story, confidence, and clarity —
              fast.
            </p>

            <div className="flex items-end mb-4">
              <span className="text-primary font-bold text-4xl mr-3">$500</span>
              <span className="text-secondary font-semibold text-lg">
                one time
              </span>
            </div>

            <hr className="border-secondary mb-6" />

            <ul className="space-y-4">
              {[
                "2× 45-min live coaching with our co-founder",
                "Real-time, practical feedback",
                "Build clarity, empathy & executive presence",
                "For senior and leadership roles — technical & non-technical",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start ">
            <button
              type="button"
              className="flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-full font-semibold"
            >
              Get Started <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <ContactUsBanner />
      </div>
    </section>
  );
};

export default ResumeCoaching;
