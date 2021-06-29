import React from "react";

import "./CenteredAlert.scss";

export default function CenteredAlert(props) {
  return (
    <div className="CenteredAlert">
      <div className="content-container">{props.children}</div>
    </div>
  );
}
