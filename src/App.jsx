import Navbar from "../src/components/templates/Navbar";
import Home from "./components/Pages/Home";
import Footer from "../src/components/templates/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Recipe from "./components/Pages/Recipe";
import Contact from "./components/Pages/Contact";
import RecipeDetailPage from "./components/Pages/RecipeDetailPage";
import Notfound from "./components/Pages/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-11/12 container md:px-10 lg:px-18 mx-auto">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/recipe-details/:id" element={<RecipeDetailPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
