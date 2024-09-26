import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainGallery from "./components/MainGallery";
import Navbar from "./components/Navbar";
import ArtworkDetail from "./components/ArtworkDetail";
import CommissionsForm from "./components/CommissionsForm";
import About from "./components/About";

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
