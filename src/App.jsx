import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Footer />
      {/* <Page404/> */}
    </>
  );
}

export default App;
