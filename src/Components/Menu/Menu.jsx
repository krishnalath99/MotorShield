import React, { useEffect, useState } from 'react'
import './Menu.css'
import { Link, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {
  
  const location = useLocation();
  const [isToastDisplayed, setIsToastDisplayed] = useState(false)

  useEffect(() => {
    const toastMessage = location.state?.toastMessage;
    if (toastMessage && !isToastDisplayed) {
      toast.success(toastMessage, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsToastDisplayed(true);
    }
  }, [location]);

  return (
    <div className="card-menu">
      <Link to='/policy-menu' className="card">Buy Insurance Policy</Link>
      <Link to='/claim-menu' className="card">Claim Insurance Policy</Link>
      <ToastContainer />
    </div>
  )
}

export default Menu