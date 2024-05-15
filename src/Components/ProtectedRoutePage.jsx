import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutePage = (props) => {
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
        navigate("/login")
    }
  }, [])

  return props.children
}

export default ProtectedRoutePage