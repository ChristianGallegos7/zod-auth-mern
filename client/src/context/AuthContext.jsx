import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Erro("no auth context")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data)
        }
    }

    return (
        <AuthContext.Provider value={{ signup, isAuthenticated, errors, user }}>
            {children}
        </AuthContext.Provider>
    )
}