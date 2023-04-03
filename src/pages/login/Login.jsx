import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss"
const Login= ()=> {
    const {login} = useContext(AuthContext)

    const handleLogin = ()=> {
        login();
    };


    return (
        <div className="login">
            <div className="card">
                
                <div className="left">
                    <h1>Hi there!</h1>
                    <p>Welcome back! Login to your account and stay connected with friends and family. Join the conversation and share your thoughts with the world.</p>
                    <span>Don't have an account? Register Now</span>
                    <Link to="/register">
                        <button> Register</button>
                    </Link>
                </div>
        
                <div className="right">
                    <h1>Login</h1>
                    <form>
                    <input type="text" placeholder="Username"/>
        
                    <input type="password" placeholder="Password"/>
        
                    <button type="submit" onClick={handleLogin}>Login</button>
                    </form>
                </div>
    
            </div>
        </div>
    );
}
export default Login;