import React from "react";
import { shallow } from "enzyme";
import { HeaderForm } from "./HeaderForm";
import { Form } from "reactstrap";

describe("HeaderForm", () => {
  it("Contains a children", () => {
    const wrapper = shallow(<HeaderForm />);
    expect(
      wrapper.containsMatchingElement([
        <div className="main-image">
          <div className="filter"></div>
          <h1></h1>
          <p></p>
          <div className="form-wrapper">
            <Form></Form>
          </div>
        </div>
      ])
    ).toEqual(true);
  });
});
