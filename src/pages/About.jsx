import React from "react";
import Features from "../components/Features";

const About = () => {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-32 pb-20"
        style={{ backgroundImage: "url('/images/aboutbg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-20 text-center">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-24">
            <div className="flex-shrink-0 relative w-48 h-48 mx-auto md:mx-0">
              <img
                src="/images/ashwins.png"
                alt="Ashwin"
                className="rounded-full w-full h-full object-cover bg-white border-4 border-white"
              />
            </div>

            <div className="text-white max-w-2xl text-base leading-relaxed">
              <p className="mb-6">
                <strong>Ashwin</strong> is the founder of mobiusengine.ai. He is
                an accomplished senior executive with over 20 years of
                experience in cloud infrastructure and financial services. With
                over 2 decades of experience at Google and JP Morgan, Ashwin
                held various product and GTM roles. Ashwin is an MBA holder from
                Yale University.
              </p>
              <p>
                Ashwin's vision with Mobius is to give job seekers a significant
                advantage in securing the roles of their dreams.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-24">
            <div className="flex-shrink-0 relative w-48 h-48 mx-auto md:mx-0">
              <img
                src="/images/nicole.png"
                alt="Nicole"
                className="rounded-full w-full h-full object-cover bg-white border-4 border-white"
              />
            </div>

            {/* Text */}
            <div className="text-white max-w-2xl text-base leading-relaxed">
              <p className="mb-6">
                <strong>Nicole</strong> is an Executive coach at Mobius
                specializing in resume builds and career advisory.
              </p>
              <p>
                With a B.S. in Business Administration from UC Berkeley and 7+
                years of experience in AI-driven product strategy, she has seen
                firsthand how the proper positioning opens doors. She takes a
                targeted, results-driven approach to help clients confidently
                stand out and land roles that truly match their skills and
                potential.
              </p>
            </div>
          </div>

          <div className="mt-20 text-white text-center space-y-6">
            <a href="#" className="inline-block font-semibold hover:underline">
              Learn more about our Board of Advisors ↗
            </a>
            <br />
            <a href="#" className="inline-block font-semibold hover:underline">
              Follow us on our LinkedIn page ↗
            </a>
          </div>
        </div>
      </section>

      <div>
        <Features />
      </div>
    </>
  );
};

export default About;
