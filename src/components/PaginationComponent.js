import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const PaginationBar = ({ data, currentPage, handlePageChange, itemsPerPage,totalPages, setTotalPages }) => {
  // const [totalPages, setTotalPages] = useState(0);

  // Calculated the total pages based on the data length and items per page
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data]);


  const entriesRange = () => {
    const initial = (currentPage - 1) * itemsPerPage;
    const final = (initial + itemsPerPage);

    const adjustedFinal = final > data.length ? data.length : final;

    return `${initial} to ${adjustedFinal} of ${data.length}`;
  }
  return (
    <nav
      role="navigation"
      aria-label="Page Navigation"
      className="d-flex justify-content-center justify-content-md-between align-items-center fs-sm"
    >
      <p className="d-none d-md-block page-link placeholderTextColor fs-sm m-0">
        Showing {entriesRange()} entries
      </p>
      <ul className="list-unstyled d-flex justify-content-between align-items-center PaginationBar mb-0">
        <li className="page-item mx-0 pe-2">
          <Button
            className="bg-transparent lightTextColor fs-sm border-0"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
        </li>
        {/* Mapped over the total pages to render a button for each page */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li
            className="page-item mx-1"
            aria-label={`Goto Page ${page}`}
            key={page}
          >
            <a
              className={`page-link btn px-2 py-1 fs-sm border border-1 rounded-1  ${
                currentPage === page ? "pagination-btn" : ""
              }`}
              href="./"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item mx-0 ps-2">
          <Button
            className="bg-transparent lightTextColor fs-sm border-0"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};


/* NOTE: to use this component


1. Use the getSlicedData function to map over only the data for the current page 
          {getSlicedData().map((conflict) => {}

2. Pass the conflicts data as a prop to the PaginationBar component 
      <PaginationBar data={conflictsData.conflicts} />

      NOTE: you can also check the conflictsTable.js file fo the source code.
*/