import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar";
import FormTypeSelector from "./Components/PaymentForm/FormTypeSelector";
import FormKeyVal from "./Components/KeyVal/FormKeyVal";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<FormKeyVal />} />
            <Route path="/" element={<FormKeyVal />} />
            <Route path="/cash-book-form" element={<FormTypeSelector />} />
            <Route path="/key-value" element={<FormKeyVal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
