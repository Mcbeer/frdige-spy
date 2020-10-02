import React from "react";
import { LoginFooter } from "../../shared/LoginFooter/LoginFooter";
import { LoginForm } from "../../shared/LoginForm/LoginForm";
import { LoginHeader } from "../../shared/LoginHeader/LoginHeader";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="Login">
      {/* {user.loading && <FullPageLoading />} */}
      <div className="Login__header">
        <LoginHeader />
      </div>
      <div className="Login__form">
        <LoginForm />
      </div>
      <div className="Login__footer">
        <LoginFooter />
      </div>
    </div>
  );
};
