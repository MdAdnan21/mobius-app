import Home from "./pages/Home";
import About from "./pages/About";
import ServicePlan from "./pages/ServicePlan";
import EvaluateJob from "./components/EvaluateJob";

function App() {
  return (
    <div className="bg-background text-white">
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="evaluate" className="h-full m-20">
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
