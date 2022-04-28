import { render, fireEvent, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import UserContext from "./userContext";


const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>,
    renderOptions,
  )
}

it("smoke", function () {
  render(<Homepage />);
});

it("renders the homepage without logging in", function () {
  render(<Homepage />,);

  const img = screen.queryByAltText("brand");

  expect(img).not.toBeNull();
});

it("renders the homepage with someone logged in", function () {
  const providerProps = {
    value: "testuser"
  }

  customRender(<Homepage />, providerProps);

  const welcomeText = screen.getByText(/^Welcome/);

  expect(welcomeText).toHaveTextContent("Welcome to Jobly, testuser");
});