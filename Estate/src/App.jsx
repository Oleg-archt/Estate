import About from "./componetnts/About";
import Content from "./componetnts/Content";
import Footer from "./componetnts/Footer";
import Headre from "./componetnts/Header";
import Projects from "./componetnts/Projects";
import Testimonails from "./componetnts/Testimonials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Headre />
      <About />
      <Projects />
      <Testimonails />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
