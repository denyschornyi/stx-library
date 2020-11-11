import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  shallow(<App />);
});
// it("contain form", () => {
//   const app = shallow(<App />);
//   expect(app.containsMatchingElement([<div></div>])).toEqual(true);
// });
