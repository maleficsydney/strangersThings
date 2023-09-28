import { useEffect } from "react";
import { Route } from "react-router-dom";

export default function AuthView({ component: Component, isAuthenticated, ...rest }) {

    <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
    // useEffect(() => {
    //     if (!token) {
            
    //     }
    // })

    return <Component {...rest} />
    
}