import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DynamicRouting() {
  const { productId } = useParams(); // here we are extracting productId from route using useParams() hook
  useEffect(() => {
    if (productId) {
      console.log(`product ${productId} is fetched`);
      // cal api
    }
    else {
      console.log("waiting for productId")
    }
  }, [productId]);
  return (
    <>
      <h1>Dynamic Routing : {productId} </h1>
    </>
  );
}

export default DynamicRouting;
