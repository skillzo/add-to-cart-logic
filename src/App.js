import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { ContextProvider } from "./Components/AuthContext";
import Cart from "./Components/Cart";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
