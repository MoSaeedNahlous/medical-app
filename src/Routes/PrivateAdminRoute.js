import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserGlobalContext } from '../context/userContext/UserState';
// مسار الخاص للأدمن حيث نتيح في هذا المسار الوصول الى أماكن لايمكن لأحد الوصول اليها


const PrivateAdminRoute = ({ component: Component, ...rest }) => {
    const context = useContext(UserGlobalContext)
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('jwtToken') && context.user.isAdmin  ? (
          <Component {...props} />
        ) : (
          <Redirect to='/404' />
        )
      }
    />
  );
};

export default PrivateAdminRoute;
