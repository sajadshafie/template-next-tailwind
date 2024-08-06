import { render, screen } from "@/utils/jestNextIntlWrapper";
import Tooltip from ".";

describe("Tooltip check", () => {
  test("Tooltip check have string as child string props", () => {
    render(<Tooltip title="test" message="sdfsdf" />);
    const getTooltip = screen.getByTestId("tooltip");
    expect(getTooltip).toHaveTextContent(/[a-z]/);
  });

  test("Tooltip check title and have child component or DOMElemnent", () => {
    render(
      <Tooltip title="test">
        <div data-testid="child-tooltip">fsdfsdfsdf</div>
      </Tooltip>,
    );
    const getTooltip = screen.getByTestId("child-tooltip");
    expect(getTooltip).toBeInTheDocument();
  });

  test("Tooltip check title as String", () => {
    render(
      <Tooltip title="test">
        <div data-testid="child-tooltip">fsdfsdfsdf</div>
      </Tooltip>,
    );
    const getTooltip = screen.getByTestId("tooltip");
  });
});
