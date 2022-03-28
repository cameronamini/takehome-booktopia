import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders input", () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("searchbar");
    expect(input).toBeInTheDocument();
  });
  it("renders logo", () => {
    const { getByTestId } = render(<App />);
    const logo = getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
