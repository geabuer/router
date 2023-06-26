
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Contacto from "./components/contacto/Contacto";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
