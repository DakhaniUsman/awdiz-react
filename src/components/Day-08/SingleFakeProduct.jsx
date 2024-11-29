import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleFakeProduct() {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  console.log(productData);
  const [loading, setLoading] = useState(true);

  async function getSingleFakeProductApi() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleFakeProductApi();
  }, [productId]);

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
        <>
          <h1>Single Fake Product : {productId}</h1>

          <div
            style={{
              height: "auto",
              width: "200px",
              margin: "auto",
              boxShadow: "0px 0px 10px #aaa",
              marginBottom: "1em",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <img
              src={productData.image}
              style={{ height: "100px", width: "auto" }}
            />
            <h4>Name : {productData.title}</h4>
            <p>Price : {productData.price}</p>
          </div>
          <p
            style={{
              textAlign: "center",
              width: "60%",
              margin: "auto",
              fontSize: "1.2em",
              marginTop: "1em",
            }}
          >
            Description : {productData.description}
          </p>
        </>
      )}
    </div>
  );
}

export default SingleFakeProduct;
