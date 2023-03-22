import { render, screen } from "@testing-library/react";
import AboutUsCard from "../AboutUsCards";

it("should get text render into title prop", () => {
  render(<AboutUsCard title="My header" />);
  const headingElement = screen.getByText(/My header/i);
  expect(headingElement).toBeInTheDocument();
});
