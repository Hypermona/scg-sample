import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
