import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.module.scss";
import Facilities from "./pages/Facilities/Facilities";
import Rooms from "./pages/Rooms/Rooms";
import Contact from "./pages/Contact-us/Contact-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
