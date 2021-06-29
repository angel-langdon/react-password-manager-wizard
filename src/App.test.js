import React from "react";

import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("displays correct feedback if everything is done properly", () => {
    const app = render(<App />);
    const nextButton = app.container.querySelector("#next-button");
    expect(app.container.querySelector(".ProductInformation")).toBeTruthy();
    nextButton.click();
    expect(app.container.querySelector(".PasswordCreationForm")).toBeTruthy();
    fireEvent.change(app.container.querySelector("#password-input"), {
      target: { value: "hola123HOLA" },
    });
    expect(app.container.querySelector("#password-input").value).toBe(
      "hola123HOLA"
    );
    fireEvent.change(app.container.querySelector("#repeated-password-input"), {
      target: { value: "hola123HOLA" },
    });
    expect(app.container.querySelector("#repeated-password-input").value).toBe(
      "hola123HOLA"
    );
    nextButton.click();
  });
});

//describe("PasswordValidationInput", () => {
//  it("updates the password on input change", () => {
//    const component = render(<WrapperWithDefaultParams />);
//    const input = component.container.querySelector("#password-input");
//    fireEvent.change(input, { target: { value: "hola" } });
//    expect(input.value).toBe("hola");
//  });
//
//  it("limits the input value to the maximum number of specified characters", () => {
//    const component = render(<WrapperWithDefaultParams />);
//    const input = component.container.querySelector("#password-input");
//    fireEvent.change(input, { target: { value: "h".repeat(25) } });
//    fireEvent.change(input, { target: { value: "h".repeat(26) } });
//    fireEvent.change(input, { target: { value: "h".repeat(50) } });
//    expect(input.value).toBe("h".repeat(MAX_PASSWORD_LENGTH));
//  });
//
//  it("shows the password when the show password button is clicked and hides it when its clicked another time", () => {
//    const component = render(<WrapperWithDefaultParams />);
//    const button = component.container.querySelector(".show-password-icon");
//    const input = component.container.querySelector("#password-input");
//    fireEvent.change(input, { target: { value: "hola".repeat(26) } });
//    button.click();
//    expect(input.type).toBe("text");
//    button.click();
//    expect(input.type).toBe("password");
//  });
//});
//
