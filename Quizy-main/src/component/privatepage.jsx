import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';


const withAuth = (Component) => {
  return (props) => {
    const { isLoggedIn } =useAuth();

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
