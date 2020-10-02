import React from "react";
import { useSelector } from "react-redux";
import { StoreModel } from "../../../store/StoreModel";
import { Avatar } from "./Avatar/Avatar";

import "./Profile.scss";

export const Profile = () => {
  const user = useSelector((state: StoreModel) => state.user.profile);
  return (
    <div className="Profile">
      <div className="Profile__avatar">
        <Avatar avatar={user.avatar_url} />
      </div>
      <div className="Profile__name">
        <p className="Profile__name__text">{user.name}</p>
      </div>
    </div>
  );
};
