import React from "react";

const EvaluateJob = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-16">
          How we work?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
          <div className="flex flex-col  space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-secondary text-secondary text-4xl  font-semibold">
              1
            </div>
            <div className="w-32 h-0.5 bg-primary"></div>
            <p className="text-primary font-medium">Submit Intake Form</p>
          </div>

          <div className="flex flex-col  space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-secondary text-secondary text-4xl  font-semibold">
              2
            </div>
            <div className="w-36 h-0.5 bg-primary"></div>
            <p className="text-primary font-medium">
              We do the search and <br /> curation for list of jobs
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-secondary text-secondary text-4xl  font-semibold">
              3
            </div>
            <div className="w-40 h-0.5 bg-primary"></div>
            <p className="text-primary font-medium">
              You approve, we do the <br /> tedious part (applying)
            </p>
          </div>

          <div className="flex flex-col  space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-secondary text-secondary text-4xl  font-semibold">
              4
            </div>
            <div className="w-36 h-0.5 bg-primary"></div>
            <p className="text-primary font-medium">You get the interviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluateJob;
