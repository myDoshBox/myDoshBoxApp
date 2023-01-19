import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { Card, Container, Nav, Tab, Dropdown } from "react-bootstrap";

import { CalendarButton } from "../ButtonsComponent/MiscBtns";
import { Link } from "react-router-dom";
// DisputesCard
export const MiniDisputesCard = () => {
  return (
    <div
      className="border-0 shadow rounded  mini-disputes-card p-2"
      style={{ width: "100%" }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="row">
          <div className="">
            <Nav variant="pills" className="disputes-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Disputes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">History</Nav.Link>
              </Nav.Item>
              <Dropdown className="mt-2 ms-lg-5">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="border-0 disputes-sort-btn  "
                >
                  Sort
                </Dropdown.Toggle>

                <Dropdown.Menu className="text-center">
                  <Dropdown.Item className="border-bottom">Name</Dropdown.Item>
                  <Dropdown.Item className="border-bottom">
                    Newest
                  </Dropdown.Item>
                  <Dropdown.Item>Oldest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
          <div className="col-12">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex justify-content-between px-4 mt-2">
                  <div className="d-flex">
                    <div className="rounded-circle p-3 bg-primary"></div>
                    <div className="d-flex flex-column ms-3">
                      <span className=" mini-disputes-name">
                        Korode Okesanya
                      </span>
                      <span className=" mini-disputes-mail">
                        emmywears@gmail.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <GeneralBtn
                      text={`View`}
                      styles={`GeneralBtnStyle1 btn all-btn text-white`}
                    />
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="first">
                <div className="d-flex justify-content-between px-4 mt-3">
                  <div className="d-flex">
                    <div className="rounded-circle p-3 bg-primary"></div>
                    <div className="d-flex flex-column ms-3">
                      <span className=" mini-disputes-name">
                        Korode Okesanya
                      </span>
                      <span className=" mini-disputes-mail">
                        emmywears@gmail.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <GeneralBtn
                      text={`View`}
                      styles={`GeneralBtnStyle1 btn all-btn text-white`}
                    />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <div className="d-flex justify-content-between px-4 mt-3">
                  <div className="d-flex">
                    <div className="rounded-circle p-3 bg-primary"></div>
                    <div className="d-flex flex-column ms-3">
                      <span className=" mini-disputes-name">
                        Korode Okesanya
                      </span>
                      <span className=" mini-disputes-mail">
                        emmywears@gmail.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <GeneralBtn
                      text={`View`}
                      styles={`GeneralBtnStyle1 btn all-btn text-white`}
                    />
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <div className="d-flex justify-content-between px-4 mt-3">
                  <div className="d-flex">
                    <div className=" rounded-circle p-3 bg-primary"></div>
                    <div className="d-flex flex-column ms-3">
                      <span className=" mini-disputes-name">
                        Olasukanmi Idris
                      </span>
                      <span className=" mini-disputes-mail">
                        emmywears@gmail.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <GeneralBtn
                      text={`View`}
                      styles={`GeneralBtnStyle1 btn all-btn text-white`}
                    />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export const ConflictIssuesCards = () => {
  return (
    <div
      className="card rounded-3 border-0 GreenBackgroundColor"
      style={{ width: "18rem" }}
    >
      <div className="p-3">
        <h5 className="card-title text-white">Card title</h5>
        <p className="card-text text-white">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
