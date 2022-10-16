import { NextButton, PreviousButton } from "./ButtonsComponent/NavigationAndViewButtons";

export const PaginationBar = () => {
  return (
    // NOTE: Dynamically add the aria-current on each page
    <nav role="navigation" aria-label="Page Navigation">
      <ul className="list-unstyled d-flex justify-content-center align-items-center PaginationBar">
        <li className="page-item">
          <PreviousButton/>
        </li>
        <li className="page-item " aria-label="Goto Page 1"><a className="page-link border border-0" href="/page-1">1</a></li>
        <li className="page-item " aria-current="page" aria-label="Goto Page 2">
        <a className="page-link border border-0" href="/page-2">2</a>
        </li>
        <li className="page-item " aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">3</a></li>
        <li className="page-item " aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">4</a></li>
        <li className="page-item d-none d-md-block" aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">5</a></li>
        <li className="page-item d-none d-md-block" aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">6</a></li>
        <li className="page-item d-none d-md-block" aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">7</a></li>
        <li className="page-item d-none d-md-block" aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">8</a></li>
        <li className="page-item d-none d-md-block" aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">9</a></li>
        <li className="page-item d-none d-md-block" aria-label="Goto Page 3" aria-current="true"><a className="page-link border border-0" href="/page-3">10</a></li>
        <li className="page-item">
          <NextButton/>
        </li>
      </ul>
    </nav>
  );
};