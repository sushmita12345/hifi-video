import {Link} from "react-router-dom";
import "./Login.css";
import {useState} from "react"
import {useAuth} from "../../context/AuthContext";


export function Login() {

    const {loginHandler, token} = useAuth()
    // console.log(token)
    const [loginForm, setLoginForm] = useState({email: "", password: ""})

    function loginAsGuest() {
        setLoginForm({
            email: "adarshbalika@gmail.com", 
            password: "adarshBalika123",
        })
        loginHandler("adarshbalika@gmail.com", "adarshBalika123")
    }
   
    return (
        <div class="login-container">
            <div class="login-container-wrapper">
                <h2 class="login-page">Login</h2>

                <form onSubmit={(e) => {e.preventDefault();
                loginHandler(loginForm.email, loginForm.password)}}>
                    <div class="form-info">
                        <label class="login-text" htmlFor="email">Email address:</label>
                        <input class="login-box" 
                            type="text" 
                            value={loginForm.email} 
                            required 
                            onChange={(e) => setLoginForm((prev) => ({...prev, email: e.target.value}))}/>
                        <label class="login-text" htmlFor="password">Password:</label>
                        <input class="login-box" 
                            type="password" 
                            value={loginForm.password} 
                            required 
                            onChange={(e) => setLoginForm((prev) => ({...prev, password: e.target.value}))}/>
                    </div>
                    
                    <div class="pwd-remember">
                        <div class="rem-container">
                            <input class="login-checkbox" type="checkbox" required/>
                            <span class="login-remember">Remember me</span>
                        </div>
                        
                        <span class="login-forget">Forget your password?</span>
                    </div>
                    <button class="login-btn" type="submit"
                        >Login</button>
                        <p className="login-guest" onClick={loginAsGuest}>Login as Guest</p>
                    <Link to="/signup"><span class="login-account">Create New Account</span></Link>
                    
                </form> 
            </div>
        </div>
    )
}