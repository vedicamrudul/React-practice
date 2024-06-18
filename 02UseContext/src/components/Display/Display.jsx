import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Display() {
  const { User } = useContext(UserContext);



  if(!User){
 
    return <div>Please Login</div>
  }
  else{

    return <div>welcome {User.userName}</div>
  }
}

export default Display;
