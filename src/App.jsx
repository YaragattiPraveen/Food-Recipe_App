import Navbar from "../src/components/templates/Navbar";
import Home from "./components/Pages/Home";
import Footer from "../src/components/templates/Footer";

function App() {
  return (
    <>
      <div className="max-w-11/12 relative container px-3 md:px-10 lg:px-18 mx-auto">
        <Navbar />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
