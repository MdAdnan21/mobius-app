import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-xl md:text-4xl font-medium text-primary mb-16">
          What our clients have to say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[350px]  mb-12">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col rounded-2xl border border-primary overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1 flex items-center justify-center rounded-t-2xl bg-white p-10">
                <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              <div className="bg-primary text-white p-5 relative h-1/2">
                <p className="text-sm leading-relaxed">
                  Holly is a <strong>senior executive</strong> who got over{" "}
                  <strong>10 job interviews</strong> and an offer she accepted.
                </p>
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            More customer testimonials ↗
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-300"
          >
            Get Started <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-16">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-20">
            <div className="p-8 border border-secondary rounded-2xl text-secondary bg-white hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-8">
                <img
                  src="/images/hearticon.png"
                  alt="Heart Icon"
                  className="w-14 h-12"
                />
              </div>
              <h3 className="font-bold text-center mb-2 mt-4">
                Tried, Tested, Trusted
              </h3>
              <p className="text-sm leading-relaxed text-center mt-4">
                Built by folks with 40+ years in tech and hiring — we know the
                game, and we've got your back.
              </p>
            </div>

            <div className="p-8 border border-secondary rounded-2xl text-secondary bg-white hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-8">
                <img
                  src="/images/usericon.png"
                  alt="User Icon"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-bold text-center mb-2 mt-4">
                Real People, Real Help
              </h3>
              <p className="text-sm leading-relaxed text-center mt-4">
                Guiding you through every twist in your job search journey.
              </p>
            </div>

            <div className="p-8 border border-secondary rounded-2xl text-secondary bg-white hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-8">
                <img
                  src="/images/staricon.png"
                  alt="Star Icon"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-bold text-center mb-2 mt-4">Beat the Line</h3>
              <p className="text-sm leading-relaxed text-center mt-4">
                We search, shortlist, and apply for you so your name shows up
                first — every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
