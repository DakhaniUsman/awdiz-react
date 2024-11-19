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

  function UseStateTwo() {
    router("/use-state-two");
  }
  function UseEffect() {
    router("/use-effect");
  }
  function UseEffectTwo() {
    router("/use-effect-2");
  }
  function UseEffectThree() {
    router("/use-effect-3");
  }
  function UseEffectFour() {
    router("/use-effect-4");
  }

  function DynamicData() {
    router("/dynamic-routing/10");
  }

  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <button onClick={LoginPage}>Login</button>
      {/* onclick event that will run the function*/}
      <button onClick={RegisterPage}>Register</button>
      <button onClick={ProductPage}>Product</button>
      <button onClick={UseStatePage}>Use State</button>
      <button onClick={UseStateTwo}>Use State 2</button>
      <button onClick={UseEffect}>Use Effect </button>
      <button onClick={UseEffectTwo}>Use Effect 2</button>
      <button onClick={UseEffectThree}>Use Effect 3</button>
      <button onClick={UseEffectFour}>Use Effect 4</button>
      <button onClick={DynamicData}>Dynamic Routing</button>
    </div>
  );
}

export default Home;
