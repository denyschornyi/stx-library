import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { ToastContainer } from "react-toastify";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("render HeaderForm", () => {
    expect(wrapper.find(HeaderForm)).toHaveLength(1);
  });
  it("render ToastContainer", () => {
    expect(wrapper.find(ToastContainer)).toHaveLength(1);
  });
});
