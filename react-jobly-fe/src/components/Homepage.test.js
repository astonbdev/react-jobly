import { render, fireEvent, screen } from "@testing-library/react";
import Homepage from "./Homepage"

it("smoke", function () {
  render(<Homepage />);
});

it("renders the homepage without logging in", function () {
  render(<Homepage />);

  const img = screen.queryByAltText("brand");

  expect(img).not.toBeNull()
});