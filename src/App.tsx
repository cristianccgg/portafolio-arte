import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainGallery from "./components/MainGallery.tsx";
import Navbar from "./components/Navbar.tsx";
import ArtworkDetail from "./components/ArtworkDetail.tsx";
import CommissionsForm from "./components/CommissionsForm.tsx";
import About from "./components/About.tsx";

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
