import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Login() {
const {setUser}=useContext(UserContext)

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({userName, password})
    console.log("hi")
  };


  return (
    <>
      <div>
        <form >
          <input
          className="mr-3"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
          className="mr-3"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
