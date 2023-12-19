import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Portifolio } from "./components/Portifolio";
import { Services } from "./components/Services";
import backgroundImage from "./assets/backgroundImage.svg";

function App() {
  return (
    <div className="pt-3" style={{ backgroundColor: "var(--light-color)" }}>
      <section
        className="header container-fluid "
        style={{
          backgroundColor: "var(--hard-color)",
          backgroundImage: backgroundImage,
        }}
      >
        <div className="container">
          <Navbar />
        </div>
      </section>
      <section className="container-fluid pb-5 overflow-hidden">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="services container-fluid pb-5">
        <div className="container">
          <Services />
        </div>
      </section>
      <section className="protifolio container-fluid pb-5">
        <div className="container">
          <Portifolio />
        </div>
      </section>
      <section className="footer container-fluid superColor py-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
