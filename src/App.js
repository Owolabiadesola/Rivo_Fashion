import "./App.css";
import BestSelling from "./Components/BestSelling";
import DesignandFeedbacks from "./Components/DesignandFeedbacks";
import ExclusiveOffer from "./Components/ExclusiveOffer";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import OurProducts from "./Components/OurProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <BestSelling />
      <OurProducts />
      <ExclusiveOffer />
      <DesignandFeedbacks />
      <Footer />
    </div>
  );
}

export default App;
