import React from "react";

import "./Avatar.scss";

type AvatarProps = {
  avatar: string;
};

export const Avatar = ({ avatar }: AvatarProps) => {
  return (
    <div className="Avatar">
      <img className="Avatar__image" src={avatar} alt="Avatar" />
    </div>
  );
};
