import { useState } from "react";

function Register() {
  const inputField = {
    padding: "10px",
    margin: "1em 0em",
    fontSize: "20px",
  };

  const [name, setName] = useState("");
  const [email,setEmail] =useState("");
  // console.log(name,"name");

  function handleSubmit() {
    // call api for storing name in backend, name, eamil, password, confirm pass submit krenge
  }

  function handleNameChange(event) {
    // input me jo type kiya hai wo state me store kro
    //  event is inbuilt form function used to access attributes values of elements in form
    console.log(event.target.value, event.target.name);
    // console.log(event.target.value);  
    setName(event.target.value);
  }

  function handleEmailChange (event) {
    console.log(event.target.value, event.target.name);
    setEmail(event.target.value);
  }

  return (
    <div>
      <h1>Register your email ID </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name : {name} </label>
        <br />
        <input
          type="text"
          name="username"
          id="name"
          style={inputField}
          onChange={handleNameChange}
        />
        <br />

        <label htmlFor="name">Enter your email : {email} </label>
        <br />
        <input
          type="email"
          name="useremail"
          id="useremail"
          style={inputField}
          onChange={handleEmailChange}
        />
        <br />

        <button type="submit" onClick={Register}>
          Click to Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
