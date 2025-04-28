import React from "react";
import EvaluateJob from "../components/EvaluateJob";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bghome.png')" }}
      >
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-20 py-6 z-20">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="flex space-x-10 text-white font-medium text-base">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary"
            >
              About Us
            </Link>
            <Link
              to="plans"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary"
            >
              Plans
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              to="privacy"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="more"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary"
            >
              More
            </Link>
          </div>

          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-white text-secondary px-6 py-2.5 font-semibold rounded-full  transition">
              Get Started
            </button>
          </div>
        </nav>

        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-evenly  md:px-20 bg-gradient-to-br from-[var(--background-start)] via-[var(--background-mid)] to-[var(--background-end)] pt-20 pb-10">
          <div className="flex flex-col max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white mb-6">
              Land job interviews <br />
              <span className="text-primary">10x faster</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Custom-built resumes that match your goals, keywords, and
              recruiter expectations.
            </p>

            <button className="mx-auto w-fit md:mx-0 bg-white text-primary text-base font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-secondary hover:text-white transition-all">
              Get Started
              <FaArrowRight className="text-primary" />
            </button>
          </div>

          <div className="relative flex flex-col items-center mt-16 md:mt-0">
            <img
              src="/images/prospective.png"
              alt="Hiring Trends 2024/2025"
              className="w-[300px] md:w-[360px] shadow-2xl rounded-lg"
            />

            <div className="absolute -bottom-12 flex flex-col items-center">
              <div className="p-1 shadow-lg">
                <img
                  src="/images/detailbook.png"
                  alt="Free Ebook"
                  className="relative w-24 h-24 left-40  p-6 rounded-full border-2 backdrop-blur-md bg-white/20  object-cover"
                />
              </div>
              <p className="text-white text-base  font-medium">
                Download Free E-Book
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
