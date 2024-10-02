import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainGallery from "./components/MainGallery.jsx";
import Navbar from "./components/Navbar.jsx";
import ArtworkDetail from "./components/ArtworkDetail.jsx";
import CommissionsForm from "./components/CommissionsForm.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainGallery />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route path="/commissions" element={<CommissionsForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
