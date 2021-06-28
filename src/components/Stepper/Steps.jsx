import React, { Fragment } from "react";

export default function Steps(props) {
  return props.steps.map((step, index) => (
    <Fragment key={index}>
      <div
        ref={props.indicatorRefs[index]}
        className={
          "step-indicator" + (props.activeStepIndex === index ? "-active" : "")
        }
      >
        {step}
      </div>
      {index + 1 !== props.steps.length ? (
        <div className="step-separator"></div>
      ) : null}
    </Fragment>
  ));
}
