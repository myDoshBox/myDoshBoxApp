import { render, screen, fireEvent } from "@testing-library/react";
import CustomBtn from "./GenandAuthBtn.js";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { axe } from 'jest-axe';
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);


// Prevents errors related to using the Link component outside of a Router.
// This allows to test the CustomBtn component in isolation without having to set up a full Router for each test.
const RouteGuard = ({ test, text }) => {
  return <Router>{test}</Router>;
};

describe("Integration tests for CustomBtn component", () => {
  it("should test if a clear and descriptive label is added, either as text content or as an `aria-label` attribute.", async () => {
    render(
      <RouteGuard
        test={[
          <CustomBtn aria-label="Create Account" value="Create Account" />,
        ]}
      />
    );
    const buttonElement = screen.getByRole("button", {
      name: /create account/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should be accessible using only the keyboard", async () => {
    render(
      <RouteGuard
        test={[<CustomBtn value="Create Account" aria-label="Create Account" tabindex="1" />]}
      />
    );
    const buttonElement = screen.getByRole("button", {
      name: /create account/i,
    });
    expect(buttonElement).toHaveAttribute("tabindex");
  });

  it("should always have text", async () => {
    render(<RouteGuard test={[<CustomBtn value="Create Account" />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toBeTruthy();
  });

  it("should have a className prop", async () => {
    render(<RouteGuard test={[<CustomBtn className="btn GoogleAuthBtn" />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("btn GoogleAuthBtn");
  });

  it('has the correct type attribute when type prop is "submit"', () => {
    render(<RouteGuard test={[<CustomBtn type="submit" />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it('has the correct type attribute when type prop is "button"', () => {
    render(<RouteGuard test={[<CustomBtn type="button" />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "button");
  });

  it('has the correct type attribute when type prop is "reset"', () => {
    render(<RouteGuard test={[<CustomBtn type="reset" />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "reset");
  });

  it("should always be visible on the screen", async () => {
    render(<RouteGuard test={[<CustomBtn />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeVisible();
  });

  it("renders correctly on small screens", () => {
    window.innerWidth = 320;
    fireEvent(window, new Event("resize"));

    render(<RouteGuard test={[<CustomBtn />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly on medium screens", () => {
    window.innerWidth = 768;
    fireEvent(window, new Event("resize"));

    render(<RouteGuard test={[<CustomBtn />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly on large screens", () => {
    window.innerWidth = 1024;
    fireEvent(window, new Event("resize"));

    render(<RouteGuard test={[<CustomBtn />]} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("has a non-empty href attribute when used as a link", () => {
    render(<RouteGuard test={[<CustomBtn href="https://example.com" />]} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it('opens the link in a new tab when target="_blank" is set', () => {
    render(
      <RouteGuard
        test={[<CustomBtn href="https://example.com" target="_blank" />]}
      />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("has the correct type attribute when used inside a form", () => {
    render(
      <form>
        <RouteGuard test={[<CustomBtn type="submit" />]} />;
      </form>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("has a form attribute that matches the id of the parent form", () => {
    render(
      <form id="my-form">
        <RouteGuard test={[<CustomBtn type="submit" form="my-form" />]} />;
      </form>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("form", "my-form");
  });

  it("submits the form when clicked", () => {
    const handleSubmit = jest.fn();
    render(
      <form onSubmit={handleSubmit}>
        <RouteGuard test={[<CustomBtn type="submit" />]} />;
      </form>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("resets the form when clicked", () => {
    const handleReset = jest.fn();
    render(
      <form onReset={handleReset}>
        <RouteGuard test={[<CustomBtn type="reset" />]} />;
      </form>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleReset).toHaveBeenCalled();
  });

  it('opens the modal when clicked', () => {
    const handleOpenModal = jest.fn();
    render(<RouteGuard test={[<CustomBtn onClick={handleOpenModal}/>]} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOpenModal).toHaveBeenCalled();
  });

  it('is accessible', async () => {
    const { container } = render(<RouteGuard test={[<CustomBtn value="Start a transaction" aria-label="Start a transaction" title="Start a transaction" role="button" />]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

});
