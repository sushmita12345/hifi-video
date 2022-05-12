import {createContext, useContext, useState}  from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const getToken = JSON.parse(localStorage.getItem("login-token"));
    const [token, setToken] = useState(getToken?.token)
    const [user, setUser] = useState(getToken?.user)

    const loginHandler = async (email, password)  => {
        try {
            
            const response = await axios.post(`/api/auth/login`, {email, password})
            if(response.status === 200 || response.status === 201){
                navigate("/category")
                localStorage.setItem("login-token", JSON.stringify({token: response.data.encodedToken, user: response.data.foundUser}))
                setUser(response.data.foundUser)
                setToken(response.data.encodedToken)
            }
           
        } catch (error) {
            console.error(error);
        }       
        
    }

    const logoutFun = () => {
        setToken("");
        setUser("");
        localStorage.removeItem("login-token");
      };

    return (
        <AuthContext.Provider value={{loginHandler, token, setToken, user, setUser, logoutFun}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}