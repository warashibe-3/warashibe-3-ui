import Login from "src/pages";
import { fireEvent, render } from "test/test-utils";

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Login />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Login />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText("Button"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
