import React, { ReactNode, useState } from "react";
import { FaQrcode } from "react-icons/fa";
import { useSelector } from "react-redux";
import { StoreModel } from "../../../store/StoreModel";
import { Button, ButtonTypes } from "../Button/Button";

import "./AccountSettings.scss";

export const AccountSettings = () => {
  const account = useSelector((state: StoreModel) => state.account);

  console.log(account);
  const [showInviteCode, setShowInviteCode] = useState(false);
  return (
    <div className="AccountSettings">
      <AccountSettingsItem label="Invitation code">
        <Button
          type={ButtonTypes.ICON}
          onClick={() => setShowInviteCode(!showInviteCode)}
        >
          <FaQrcode size="15px" />
        </Button>
      </AccountSettingsItem>
    </div>
  );
};

type AccountSettingsItemProps = {
  label: string;
  children: ReactNode;
};

const AccountSettingsItem = ({ label, children }: AccountSettingsItemProps) => {
  return (
    <div className="AccountSettingsItem">
      <div className="AccountSettingsItem__label">
        <p className="AccountSettingsItem__label__text">{label}</p>
      </div>
      <div className="AccountSettingsItem__action">{children}</div>
    </div>
  );
};
