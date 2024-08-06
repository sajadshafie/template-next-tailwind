import { render, screen, cleanup } from "@/utils/jestNextIntlWrapper";
import Typography from "./index";
import React from "react";

afterEach(() => {
  cleanup();
});

describe("Typography Check Child And Text", () => {
  test("You Passed Text to Typography", async () => {
    render(<Typography message="message.error_messages.textField_req" />);

    const getTypo = screen.getByTestId("typography");
    expect(getTypo).toHaveTextContent(/[a-z]/);
  });

  test("You Passed React Node To Typography", () => {
    render(
      <Typography>
        <span data-testid="child">hello</span>
      </Typography>,
    );

    const getTypo = screen.getByTestId("child");
    expect(getTypo).toBeInTheDocument();
  });
});
