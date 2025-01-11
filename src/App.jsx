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
import PropDrilling from "./components/Day-06/PropDrilling";
import { useState } from "react";
import FakeProducts from "./components/Day-08/FakeProducts";
import SingleFakeProduct from "./components/Day-08/SingleFakeProduct";
import DynamicCss from "./components/Day-09/DynamicCss";
import UseReducer from "./components/Day-09/UseReducer";
import UseMemo from "./components/Day-11/UseMemo";
import CounterContext from "./components/Day-10/CounterContext";
import UseCallback from "./components/Day-12/UseCallback";
import UseRef from "./components/Day-13/UseRef";
import Stopwatch from "./components/Day-13/Stopwatch";

function App() {
  const [students, setStudents] = useState(["Rohit", "Rahul", "Virat"]);
  const [data, setData] = useState([
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    },
    {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    }, {
      image: "https://m.media-amazon.com/images/I/814dmJXctHL._AC_UL320_.jpg",
      name: "Legendary T-Shirt",
      price: 799,
    }
  ]);
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
          element={<DynamicRouting />} // productId is dynamic so written : before
        />
        <Route
          path="/prop-drilling-mapping"
          element={<PropDrilling students={students} data={data} />}
        />
        <Route path="/fake-product-api" element={<FakeProducts />} />
        <Route
          path="/single-fake-product/:productId"
          element={<SingleFakeProduct />}
        />
        <Route path="/dynamic-css" element={<DynamicCss />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/counter-context"  element={<CounterContext />}/>
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
}

export default App;

// useNavigate
// useState
// useEffect
// useParams
// useReducer
// context
// useMemo
// useCallback

// useRef
// redux
