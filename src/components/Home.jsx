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
    router("/dynamic-routing/1000");
  }

  function PropDrillingPage() {
    router("/prop-drilling-mapping");
  }

  function FakeProductsPage() {
    router("/fake-product-api");
  }

  function DynamicCssPage() {
    router("/dynamic-css");
  }

  function UseReducerPage() {
    router("/use-reducer");
  }

  function UseMemoPage() {
    router("/use-memo");
  }

  function CounterContextPage() {
    router("/counter-context");
  }

  function UseCallbakPage() {
    router("/use-callback");
  }
  function UseRefPage() {
    router("/use-ref");
  }

  function StopwatchPage() {
    router("/stopwatch");
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
      <button onClick={PropDrillingPage}>Prop Drilling Page</button>

      <button onClick={FakeProductsPage}>Fake Products Page</button>
      <button onClick={DynamicCssPage}>Dynamic Css Page</button>
      <button onClick={UseReducerPage}>Use Reducer Page</button>
      <button onClick={CounterContextPage}>Counter Context Page</button>
      <button onClick={UseMemoPage}>Use Memo Page</button>
      <button onClick={UseCallbakPage}>Use Callback Page</button>
      <button onClick={UseRefPage}>Use Ref Page</button>
      <button onClick={StopwatchPage}>Stopwatch Page</button>
    </div>
  );
}

export default Home;
