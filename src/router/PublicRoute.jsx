import { Navigate } from "react-router-dom"

export const PublicRoute = ({logged, children}) => {
  
    return  logged ? <Navigate to="/"/> : children
}
