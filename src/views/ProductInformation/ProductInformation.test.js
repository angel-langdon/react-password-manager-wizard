import React from "react";
import { shallow } from "enzyme";

import ProductInformation from "./ProductInformation";

describe("ProductInformation (1º Step)", () => {
  it("renders without crashing", () => {
    const editor = shallow(<ProductInformation />);
    expect(editor.exists()).toBe(true);
  });
});
