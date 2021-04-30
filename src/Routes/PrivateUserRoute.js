import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// مسار الخاص للمستخدم حيث نتيح في هذا المسار الوصول الى أماكن لايمكن للضيف الوصول اليها


const PrivateUserRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem('jwtToken') ? (
          // <Redirect to='/medical-app/404' />
          null
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateUserRoute;
