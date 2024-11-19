import { useParams } from "react-router-dom";

function DynamicRouting() {
  const { productId } = useParams();
  return (
    <>
      <h1>Dynamic Routing : {productId} </h1>
    </>
  );
}

export default DynamicRouting;
