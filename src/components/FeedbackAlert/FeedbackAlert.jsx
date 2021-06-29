import React from "react";

import "./FeedbackAlert.scss";

export default function FeedbackAlert(props) {
  return (
    <div className="FeedbackAlert">
      <div className="row">
        <img
          className="icon"
          src={props.iconImage}
          alt="feedback-alert-icon"
        ></img>
        <div className="column">
          <div className="label">{props.label}</div>
          <div className="description">{props.description}</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom-button-container">
        <button className="tertiary" onClick={props.onButtonClick}>
          {props.buttonText}
          <div style={{ fontSize: "2em", marginLeft: "10px" }}>&rsaquo;</div>
        </button>
      </div>
    </div>
  );
}
