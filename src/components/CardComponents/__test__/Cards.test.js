import { render, screen } from "@testing-library/react";
import { AnalyticsCard } from "../UsersCards";
import { BrowserRouter as Router } from "react-router-dom";

// used to prevent the Link
const RouteGuard = ({ test, text }) => {
  return (
    <Router>
      {test}
    </Router>
  )
}

describe("AnalyticsCard", () => {
  it("should test if the text prop truly works", async () => {
    render(
      <RouteGuard test={[<AnalyticsCard text="Total Profits" />]} />
    );
    const cardElement = screen.getByText(/total profits/i);
    expect(cardElement).toBeInTheDocument();
  });

  it("should test if the value prop truly works", async () => {
    render(
      <RouteGuard test={[<AnalyticsCard value="500,000" />]} />
    );
    const cardElement = screen.getByText(/500,000/i);
    expect(cardElement).toBeInTheDocument();
  });
});
