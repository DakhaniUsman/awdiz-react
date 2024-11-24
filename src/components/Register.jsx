import { useState } from "react";

function Register() {
  const inputField = {
    padding: "10px",
    margin: "1em 0em",
    fontSize: "20px",
  };

  const [UserData, setUserData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userconfirmpassword: "",
  });

  console.log(UserData);

  async function handleSubmit(event) {
    // call api for storing name in backend, name, eamil, password, confirm pass submit krenge
    event.preventDefault();

    
    try {
      // const response = await axios.get("/api-link", {UserData} );
      const response = alert("Your have resgitered successfully")
      
      // if (response.data.success){
        // success : true then execute this
      // }
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  function handleChange(event) {
    // input me jo type kiya hai wo state me store kro
    //  event is inbuilt form function used to access attributes values of elements in form
    console.log(event.target.value, event.target.name);
    // console.log(event.target.value);
    setUserData({ ...UserData, [event.target.name]: event.target.value });
    // ...UserData is spread operator that creates an instance to store all the values including the previous value
  }

  return (
    <div>
      <h1>Register your email ID </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name </label>
        <br />
        <input
          type="text"
          name="username"
          id="name"
          style={inputField}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="useremail">Enter your email </label>
        <br />
        <input
          type="email"
          name="useremail"
          id="useremail"
          style={inputField}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="userpassword">Enter your password </label>
        <br />
        <input
          type="password"
          name="userpassword"
          id="useremail"
          style={inputField}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="userconfirmpassword">Confirm password </label>
        <br />
        <input
          type="password"
          name="userconfirmpassword"
          id="useremail"
          style={inputField}
          onChange={handleChange}
        />
        <br />

        <input
          type="submit"
          value="Click to register"
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            border: "1px solid mediumslateblue",
            borderRadius: "10px ",
            fontSize: "1.2rem",
           }}
        />
      </form>
    </div>
  );
}

export default Register;
