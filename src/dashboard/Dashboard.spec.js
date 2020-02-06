// Test away
import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect.js";

import Dashboard from "./Dashboard";

//test1-Dashboard
test("Dashboard.js renders properly", () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});


//test2-Dashboard
test("Display component renders properly", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText("Unlocked")).toBeInTheDocument();
});


//test3-Dashboard
test("Controls component renders properly", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText("Close Gate")).toBeInTheDocument();
});