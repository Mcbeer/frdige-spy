import React from "react";
import { AccountSettings } from "../../components/AccountSettings/AccountSettings";
import { Profile } from "../../components/Profile/Profile";
import "./Settings.scss";

export const Settings = () => {
  return (
    <div className="Settings">
      <div className="Settings__profile">
        <Profile />
      </div>

      <div className="Settings__account-settings">
        <AccountSettings />
      </div>
    </div>
  );
};
