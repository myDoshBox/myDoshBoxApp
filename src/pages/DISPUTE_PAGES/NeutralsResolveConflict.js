// import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import { Cancel } from "../../components/IconComponent/NeutralsDashboardIcons";
import brokenScreen1 from "../../images/brokenScreen1.png";
import brokenScreen2 from "../../images/brokenScreen2.png";
import brokenScreen3 from "../../images/brokenScreen3.png";
import fixedPhone1 from "../../images/fixedphone1.png";
import fixedPhone2 from "../../images/fixedphone2.png";
import fixedPhone3 from "../../images/fixedphone3.png";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import UsersSideNav from "../../components/NavbarComponents/UsersSideNav";
import { useState } from "react";

const NeutralsResolveConflict = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <UsersSideNav />
        </div>

        <div className="col-lg-9 col-sm-12">
          <NeutralsResolveConflictCard />
        </div>
      </div>
    </div>
  );
};

const NeutralsResolveConflictCard = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment("");
  };
  return (
    <section className="container mt-5">
      <div className="card resolve-card px-3 px-md-4 px-lg-5 py-2 py-md-3 py-lg-4 shadow border-0">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Nav className="justify-content-center" variant="pills">
                <Nav.Item className="mx-auto my-2">
                  <Nav.Link eventKey="first">Buyers Statement</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto my-2">
                  <Nav.Link eventKey="second">Sellers Statement</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <BuyersStatement />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <SellersStatement />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Col sm={12}>
        <form onSubmit={handleSubmit}>
          <textarea
            class="form-control mx-auto my-4"
            placeholder="Leave a Message here"
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ height: "10rem", width: "100%" }}
          ></textarea>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 mb-2 text-center text-md-end">
              <GeneralBtn
                value="Sellers Fault"
                styles="GeneralBtnStyle1 btn all-btn text-white"
              />
            </div>
            <div className="col-md-6 col-sm-12 text-center text-sm-start">
              <GeneralBtn
                value="Buyers Fault"
                styles="GeneralBtnStyle1 btn all-btn text-white"
              />
            </div>
          </div>
        </form>
      </Col>
    </section>
  );
};

const BuyersStatement = () => {
  return (
    <div>
      <div className="my-4">
        <h5>PROBLEM STATEMENT : </h5>
        <p>
          Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod interdum
          sodales eget maecenas sem. Ultrices a donec urna semper ante. Eget
          aliquet enim elit lorem hac feugiat. Eu convallis at amet pretium
          vestibulum et ultrices rutrum. Viverra vel congue laoreet cursus
          gravida morbi. A morbi nulla ut nisi, felis. Ultricies molestie
          pretium mauris, id amet vitae congue laoreet cursus gravida morbi. A
          morbi nulla ut nisi, felis. Ultricies molestie pretium mauris, id amet
          vitae congue laoreet cursus gravida morbi. A morbi nulla ut nisi,
          felis. Ultricies molestie pretium mauris, id amet vitae.
        </p>
      </div>
      <div>
        <h5>IMAGE EVIDENCE :</h5>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={brokenScreen1} className="p-1 w-75 mx-auto" alt="" />
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={brokenScreen2} className="p-1 w-75 mx-auto" alt="" />
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={brokenScreen3} className="p-1 w-75 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
const SellersStatement = () => {
  return (
    <div>
      <div className="my-4">
        <h5>PROBLEM STATEMENT : </h5>
        <p>
          Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod interdum
          sodales eget maecenas sem. Ultrices a donec urna semper ante. Eget
          aliquet enim elit lorem hac feugiat. Eu convallis at amet pretium
          vestibulum et ultrices rutrum. Viverra vel congue laoreet cursus
          gravida morbi. A morbi nulla ut nisi, felis. Ultricies molestie
          pretium mauris, id amet vitae congue laoreet cursus gravida morbi. A
          morbi nulla ut nisi, felis. Ultricies molestie pretium mauris, id amet
          vitae congue laoreet cursus gravida morbi. A morbi nulla ut nisi,
          felis. Ultricies molestie pretium mauris, id amet vitae.
        </p>
      </div>
      <div>
        <h5>IMAGE EVIDENCE :</h5>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={fixedPhone1} className="p-1 w-75 mx-auto" alt="" />
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={fixedPhone2} className="p-1 w-75 mx-auto" alt="" />
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={fixedPhone3} className="p-1 w-75 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeutralsResolveConflict;
