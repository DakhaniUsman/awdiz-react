import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FakeProducts() {
  const [products, setProducts] = useState([]);
  console.log(products);
  const router = useNavigate();
  const [loading, setLoading] = useState(true);

  async function getFakeProductsApi() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleChange(event) {
    setLoading(true);
    console.log(event.target.value);
    if (event.target.value) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${event.target.value}`
        );
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  //   function handleChange(event) {
  //     // setLimit(event.target.value);
  //     console.log(event.target.value);
  //   }

  useEffect(() => {
    getFakeProductsApi();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <select
            style={{
              padding: "1em 2em",
              marginTop: "1em",
              marginBottom: "1em",
            }}
            onChange={handleChange}
          >
            <option>Select the number of Products</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "7px",
            }}
          >
            {products.map((product) => (
              <div
                style={{
                  height: "auto",
                  width: "22%",
                  boxShadow: "0px 0px 10px #aaa",
                  marginBottom: "1em",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => router(`/single-fake-product/${product.id}`)}
              >
                <img
                  src={product.image}
                  style={{ height: "100px", width: "auto" }}
                />
                <h4>Name : {product.title}</h4>
                <p>Price : {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FakeProducts;
