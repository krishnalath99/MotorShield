import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

const SignOut = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/', { state: { toastMsg: 'Logged Out successfully'}})
  }, [logout, navigate]);

  return null;
};

export default SignOut;