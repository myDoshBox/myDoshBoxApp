import { Button } from "react-bootstrap";

export const PaginationBar = () => {
  return (
    <nav
      role="navigation"
      aria-label="Page Navigation"
      className="d-flex justify-content-center justify-content-md-between align-items-center fs-sm"
    >
      <p className="d-none d-md-block page-link placeholderTextColor fs-sm m-0">
        Showing 1 to 10 of 90 entries
      </p>
      <ul className="list-unstyled d-flex justify-content-between align-items-center PaginationBar mb-0">
        <li className="page-item mx-0 pe-2">
          <Button className="bg-transparent lightTextColor fs-sm border-0">
            Previous
          </Button>
        </li>
        <li className="page-item mx-1" aria-label="Goto Page 1">
          <a
            className="page-link text-black all-btn btn px-2 py-1 fs-sm border border-1 rounded-1"
            href="./"
          >
            1
          </a>
        </li>
        <li className="page-item mx-1" aria-current="page">
          <a
            className="page-link text-black all-btn btn px-2 py-1 fs-sm border border-1 rounded-1"
            href="./"
          >
            2
          </a>
        </li>
        <li className="page-item mx-0 ps-2">
          <Button className="bg-transparent lightTextColor fs-sm border-0">
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};
