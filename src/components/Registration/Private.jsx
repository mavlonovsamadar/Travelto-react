import { Navigate } from "react-router-dom";

import React from 'react'

export const Private = ({children}) => {
const auth = localStorage.getItem("auth");
if(!auth){
    return <Navigate to='/login' />
}

  return  children
}
