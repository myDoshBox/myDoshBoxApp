import { Accordion, Container } from "react-bootstrap";

// ContactUsCard

export const ContactUsCard = () => {
  return (
    <Container>
      <div className="row contact-card">
        <div className="col-sm-12 col-lg-6">
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et mass
            hendrerit
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            <hr />
          </p>
          <div className="row align-items-center">
            <div className="col-sm-2 col-lg-1">
              <svg
                width="37"
                height="55"
                viewBox="0 0 41 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4998 28.4688C24.9871 28.4688 28.6248 24.8311 28.6248 20.3438C28.6248 15.8564 24.9871 12.2188 20.4998 12.2188C16.0124 12.2188 12.3748 15.8564 12.3748 20.3438C12.3748 24.8311 16.0124 28.4688 20.4998 28.4688Z"
                  stroke="#006747"
                  stroke-width="4.0625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.7495 28.4688C30.6557 42.6875 20.4995 58.9375 20.4995 58.9375C20.4995 58.9375 10.3432 42.6875 4.24946 28.4688C-1.84429 14.25 8.31196 2.0625 20.4995 2.0625C32.687 2.0625 42.8432 14.25 36.7495 28.4688Z"
                  stroke="#006747"
                  stroke-width="4.0625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="col-sm-10 col-lg-9 mx-lg-3">
              <h4>Our Office Location</h4>
              <a href="https://goo.gl/maps/f1zEmLsMM2L9SHY89" target={"_blank"}>
                The 8thGear Space, 11b Colin Onabule Crescent, Diamond Estate
                Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria
              </a>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-sm-2 col-lg-1">
              <svg
                width="35"
                height="52"
                viewBox="0 0 40 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02043 1.91004L10.0691 0.935376C12.9279 0.0230425 15.9823 1.49921 17.2063 4.38354L19.6429 10.1295C20.7026 12.6314 20.1133 15.5752 18.1866 17.4055L12.8174 22.4999C13.1489 25.5485 14.1746 28.549 15.8916 31.5014C17.5221 34.3578 19.7091 36.8579 22.3233 38.8539L28.7719 36.7005C31.2143 35.8874 33.8776 36.8252 35.3736 39.0267L38.8671 44.155C40.6096 46.7164 40.2951 50.2467 38.1333 52.417L35.8184 54.7432C33.5121 57.058 30.2169 57.8995 27.1711 56.9475C19.9744 54.7035 13.3643 48.0424 7.32926 36.964C1.28576 25.8687 -0.847739 16.4507 0.931595 8.72138C1.67959 5.46871 3.99443 2.87621 7.02043 1.91004V1.91004Z"
                  fill="#006747"
                />
              </svg>
            </div>

            <div className="col-sm-10 col-lg-9 mx-lg-3">
              <h4>Phone</h4>
              <a href="tel:+2349012345678" className="d-block ">
                +234 901 234 5678
              </a>
              <a href="tel:+2349012345678" className="d-block">
                +234 901 234 5678
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6"></div>
      </div>
    </Container>
  );
};
// FAQsCard
export const FAQsCard = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-sm-12 col-lg-6 mt-5">
          <Accordion className="">
            <div className="faq-head">Accordion Item #1</div>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-sm-12 col-lg-6 mt-5">
          <Accordion className="">
            <div className="faq-head">Accordion Item #1</div>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-6 mt-5">
          <Accordion className="">
            <div className="faq-head">Accordion Item #1</div>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-sm-12 col-lg-6 mt-5">
          <Accordion className="">
            <div className="faq-head">Accordion Item #1</div>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};
