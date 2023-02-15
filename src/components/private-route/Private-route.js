import { useContext } from "react";
import { Navigate } from 'react-router-dom';


import { UserContext } from "../../context/context";


export const PrivateRoute = ({children})=>{
  const [user] = useContext(UserContext);
  if(user) return children;
  return (<Navigate to="/signin" replace />);
}