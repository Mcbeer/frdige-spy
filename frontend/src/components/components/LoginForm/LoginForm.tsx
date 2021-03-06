import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  authenticate,
  checkAuthStatus,
} from "../../../store/Actions/UserActions";
import { StoreModel } from "../../../store/StoreModel";
import "./LoginForm.scss";

export const LoginForm = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENTID || "";
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state: StoreModel) => state.user.authenticated
  );

  useEffect(() => {
    if (authenticated) {
      // @ts-ignore
      console.log({ referrer: location?.state?.referrer });
      // @ts-ignore
      if (location?.state?.referrer === "/login") {
        history.push("/");
        return;
      } else {
        // @ts-ignore
        history.push(location?.state?.referrer || "/");
      }
    } else {
      dispatch(checkAuthStatus());
    }
  });

  const handleGoogleLoginResponse = (response: unknown) => {
    console.log({ response });
    dispatch(authenticate(response));
  };

  return (
    <div className="LoginForm">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={handleGoogleLoginResponse}
        onFailure={handleGoogleLoginResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
