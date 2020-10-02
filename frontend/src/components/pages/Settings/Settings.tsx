import React from "react";
import { AccountSettings } from "../../shared/AccountSettings/AccountSettings";
import { Profile } from "../../shared/Profile/Profile";

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
