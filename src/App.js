import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:service" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
