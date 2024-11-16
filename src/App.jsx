import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import UseState from "./components/Day-03/UseState";
import UseStateTwo from "./components/Day-05/UseStateTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state-two" element={<UseStateTwo />} />
      </Routes>
    </div>
  );
}

export default App;
