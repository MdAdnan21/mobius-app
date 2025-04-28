import { ArrowRight } from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";

export const ContactUsBanner = () => {
  return (
    <>
      <div className="bg-primary text-white rounded-3xl flex items-center justify-between px-10 py-24 w-full max-w-6xl mx-auto">
        <div className="text-left">
          <p className="text-3xl font-medium uppercase leading-tight">
            Still have <br /> doubts?
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-6xl font-bold">Contact us</h2>
        </div>

        <button className="bg-white text-primary rounded-full p-4">
          <ArrowRight className="w-8 h-8" />
        </button>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default function Footer() {
  return (
    <footer className="bg-background text-primary pt-20">
      <div className="w-full flex flex-col gap-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-12">
          <div className="flex flex-col gap-4">
            <img
              src="/images/secondlogo.png"
              alt="MobiusEngine Logo"
              className="w-24 h-16 object-contain"
            />
            <hr className="border-primary w-24" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-sm font-semibold mb-2">Address</h4>
              <p className="text-sm leading-relaxed">
                1875 Mission St Ste 103 #450
                <br />
                San Francisco, CA 94103
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Email</h4>
              <a
                href="mailto:finance@mobiusengine.ai"
                className="text-sm hover:text-secondary transition"
              >
                finance@mobiusengine.ai
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Telephone</h4>
              <a
                href="tel:6508896026"
                className="text-sm hover:text-secondary transition"
              >
                650-889-6026
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Socials</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/mobiusservices/posts/?feedView=all"
                  className="border border-primary rounded-full p-2 hover:bg-primary hover:text-white transition"
                >
                  <LiaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mobiusservices/posts/?feedView=all"
                  className="border border-primary rounded-full p-2 hover:bg-primary hover:text-white transition"
                >
                  <LiaLinkedinIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white flex flex-col md:flex-row items-center justify-between w-full py-4 px-6 md:px-12 text-xs">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
