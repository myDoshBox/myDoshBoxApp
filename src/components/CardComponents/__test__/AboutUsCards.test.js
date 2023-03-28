// import { render, screen } from "@testing-library/react";
// import { CoreValueCard, TeamsCard } from "../AboutUsCards";

// describe("CoreValueCard", () => {
//   it("should get text render into title prop", () => {
//     render(<CoreValueCard title="My header" />);
//     const headingElement = screen.getAllByRole("heading");
//     expect(headingElement.length).toBe(2);
//   });
//   it("should get text render into title parag", () => {
//     render(<CoreValueCard description="paragraph" />);
//     const headingElement = screen.getByText(/para/i);
//     expect(headingElement).toBeInTheDocument();
//   });
// });

// describe("TeamsCard", () => {
//   it("should get text render into title prop", () => {
//     render(<TeamsCard name="My header" />);
//     const headingElement = screen.getByText(/My header/i);
//     expect(headingElement).toBeInTheDocument();
//   });
//   it("should get text render into job_description prop", () => {
//     render(<TeamsCard job_description="My header" />);
//     const headingElement = screen.getByText(/My header/i);
//     expect(headingElement).toBeInTheDocument();
//   });
//   it("should get text render into describtion", () => {
//     render(<TeamsCard description="My header" />);
//     const headingElement = screen.getByText(/My header/i);
//     expect(headingElement).toBeInTheDocument();
//   });
//   it("should get text render the image prop", () => {
//     render(<TeamsCard images="img" />);
//     const headingElement = screen.getByTitle("img");
//     expect(headingElement).toBeInTheDocument();
//   });
// });
