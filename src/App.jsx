import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ServicePlan from "./pages/ServicePlan";
import EvaluateJob from "./components/EvaluateJob";

function App() {
  return (
    <div className="bg-background text-white">
      {/* <Navbar /> */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="plan" className="h-full m-10">
        <EvaluateJob />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="plans" className="min-h-screen">
        <ServicePlan />
      </section>
    </div>
  );
}

export default App;
