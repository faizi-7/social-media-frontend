import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
      <div className="register">
          <div className="card">
              
              <div className="left">
                  <h1>Register</h1>
                  <form>
                  <input type="text" placeholder="Username"/>
                  <input type="text" placeholder="Email Id"/>
      
                  <input type="password" placeholder="Password"/>
                  <input type="text" placeholder="Name"/>
                  <button type="submit">Register</button>
                  </form>
              </div>
  
              <div className="right">
                  <h1>E-Sapiens : Social Media</h1>
                  <p>Welcome back! Login to your account and stay connected with friends and family. Join the conversation and share your thoughts with the world.</p>
                  <span>Already have an account ? Sign In</span>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
              </div>
      
          </div>
      </div>
  )
}

export default Register