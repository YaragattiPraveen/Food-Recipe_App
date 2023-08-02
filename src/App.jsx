import Navbar from "../src/components/templates/Navbar";
import Home from "./components/Pages/Home";
import Footer from "../src/components/templates/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Recipe from "./components/Pages/Recipe";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-11/12 container md:px-10 lg:px-18 mx-auto">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/recipe" element={<Recipe/>} />
            <Route path="/contact-us" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
