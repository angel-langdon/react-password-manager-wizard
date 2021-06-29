import React from "react";
import { mount, shallow } from "enzyme";

import PasswordCreationForm from "./PasswordCreationForm";
import handleNextButtonClickUtil from "./PasswordCreationForm";
import { useState } from "react";

function WrapperWithDefaultParams() {
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [clue, setClue] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const handleNextButtonClick = () =>
    handleNextButtonClickUtil(setActiveStepIndex, steps);

  return (
    <PasswordCreationForm
      {...{
        password,
        setPassword,
        repeatedPassword,
        setRepeatedPassword,
        clue,
        setClue,
        nextButtonClicked,
        setNextButtonClicked,
        handleNextButtonClick,
      }}
    ></PasswordCreationForm>
  );
}

describe("PasswordCreationForm (2º Step)", () => {
  it("renders without crashing", () => {
    const component = mount(<WrapperWithDefaultParams />);
    expect(component.exists()).toBe(true);
  });
});
