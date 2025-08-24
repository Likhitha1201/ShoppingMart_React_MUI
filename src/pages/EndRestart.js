import { Link } from "react-router-dom";

export default function EndRestart () {
    return(
        <div style={{fontFamily:"cursive", color:"rgb(32, 105, 189)", padding:"25%"}}>
         <h1>✅You have been successfully logged out.</h1>
            <h2>Thank you for visiting! We look forward to seeing you again.  </h2>
            <h3>🔗 To re-login, please use the link below:</h3>
            <Link to={"/login"}>LogIn</Link>
        </div>
    )
}
  



