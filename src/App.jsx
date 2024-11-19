import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import UseState from "./components/Day-03/UseState";
import UseStateTwo from "./components/Day-05/UseStateTwo";
import UseEffect from "./components/Day-06/UseEffect";
import UseEffect2 from "./components/Day-06/UseEffect2";
import UseEffect3 from "./components/Day-06/UseEffect3";
import UseEffect4 from "./components/Day-06/UseEffect4";
import DynamicRouting from "./components/Day-06/DynamicRouting";

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
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect-2" element={<UseEffect2 />} />
        <Route path="/use-effect-3" element={<UseEffect3 />} />
        <Route path="/use-effect-4" element={<UseEffect4 />} />
        <Route
          path="/dynamic-routing/:productId"
          element={<DynamicRouting />}
        />
      </Routes>
    </div>
  );
}

export default App;
