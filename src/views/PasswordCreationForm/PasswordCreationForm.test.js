import React from "react";
import { shallow } from "enzyme";

import PasswordCreationForm from "./PasswordCreationForm";
import handleNextButtonClickUtil from "./PasswordCreationForm";
import { useState } from "react";

function WrapperWithDefaultParams() {
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [clue, setClue] = useState("");
  const handleNextButtonClick = (setActiveStepIndex, steps) =>
    handleNextButtonClick(setActiveStepIndex, steps);

  <PasswordCreationForm>
    {{
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
    ;
  </PasswordCreationForm>;
}

describe("PasswordCreationForm (2º Step)", () => {
  it("renders without crashing", () => {
    const editor = shallow(<WrapperWithDefaultParams />);
    expect(editor.exists()).toBe(true);
  });
});
