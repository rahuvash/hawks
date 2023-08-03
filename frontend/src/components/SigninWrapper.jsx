import SigninForm from "./SigninForm";
import { useNavigate } from "react-router-dom";

const  SigninWrapper=()=> {
    const navigate = useNavigate();
  
    const handleSignin = (token) => {
      // Handle the signin logic here
      console.log("User signed in with token:", token);
      // Navigate to a new page after successful signin
      navigate("/home");
    };
  
    return <SigninForm onSignin={handleSignin} />;
  }
  export default SigninWrapper;