import React, { useState } from "react";

import { getFontSize } from "./PasswordValidationInput.utils";
import "./PasswordValidationInput.scss";
import showEyeIcon from "assets/icons/show-eye.svg";
import hideEyeIcon from "assets/icons/hide-eye.svg";

export default function PasswordValidationInput(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { style, ...otherProps } = props;
  return (
    <div className="PasswordValidationInput">
      <input
        {...otherProps}
        type={isPasswordVisible ? "text" : "password"}
        style={{ ...style, fontSize: getFontSize(otherProps.value) }}
      ></input>
      <img
        src={isPasswordVisible ? hideEyeIcon : showEyeIcon}
        onClick={() => setIsPasswordVisible((isVisible) => !isVisible)}
        className="show-password-icon"
      ></img>
    </div>
  );
}
