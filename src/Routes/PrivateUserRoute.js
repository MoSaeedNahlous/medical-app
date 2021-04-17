import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateUserRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem('jwtToken') ? (
          <Redirect to='/404' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateUserRoute;
