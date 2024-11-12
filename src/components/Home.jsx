import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate(); // this is hook used to navigate

  function LoginPage() {
    router("/login");
  }
  function RegisterPage() {
    router("/register");
  }
  function ProductPage() {
    router("/product");
  }
  function UseStatePage() {
    router("/use-state");
  }

  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <button onClick={LoginPage}>Login</button> 
      {/* onclick event that will run the function*/}
      <button onClick={RegisterPage}>Register</button>
      <button onClick={ProductPage}>Product</button>
      <button onClick={UseStatePage}>Use State</button>
    </div>
  );
}

export default Home;
