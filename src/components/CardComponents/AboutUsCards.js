import { Container } from "react-bootstrap";
import cardImage from "../../assets/images/aboutusPix.png";
import cardImage2 from "../../assets/images/aboutusPix2.png";

// CoreValueCard
export const CoreValueCard = () => {
  return (
    <Container className=" p-5">
      <div className="row">
        <div className="coreValueStyle col-sm-12 col-md-4 col-lg-4  c p-4 pt-5 ">
          <h3 className="">Daily Hard Work</h3>
          <p>Lorem ipsum dolor sit amet </p>
          <p className="col-lg-11">
            Lorem ipsum dolor sit amet conur adipiscing dolor sit amet dolor sit
            amet
          </p>
        </div>
      </div>
    </Container>
  );
};

// TeamsCard
export const TeamsCard = () => {
  return (
    <Container className="row my-5 ms-5 ">
      <div className="d-flex col-xs-12 col-sm-12 col-md-12 col-lg-10 justify-content-between teamValueStyle p-5">
        <div className="mt-2  col-lg-5 col-md-5 col-sm-12">
          <img
            src={cardImage}
            alt="aboutPix image"
            className="aboutImagePix resizeStyle d-block mx-lg-auto "
          />
          <p className="col-sm-10 mt-3 d-flex d-lg-none .d-xl-block d-md-none .d-lg-block">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices ma uris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
          </p>
          <p className="d-lg-none .d-xl-block d-md-none .d-lg-block">
            <b>Edwards Tope</b>
          </p>
          <p className="d-lg-none .d-xl-block mx-5 ms-5 d-md-none .d-lg-block">
            CEO
          </p>
        </div>

        <div className="my-5 ms-5 smallScreen">
          <p className="col-sm-2 col-md-8 col-lg-12 smallScreen">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices ma uris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
          </p>
          <div className="d-flex justify-content-end me-5">
            <p>
              <b>Edwards Tope</b>
            </p>
          </div>
          <p className="d-flex justify-content-end mx-5">CEO</p>
        </div>
      </div>
    </Container>
  );
};

// TeamsCard
export const TeamsCardTwo = () => {
  return (
    <Container className="row my-5 ms-5 ">
      <div className="d-flex col-xs-12 col-sm-12 col-md-12 col-lg-10 justify-content-between teamValueStyle2 p-5">
        <div className="mt-2 col-lg-5 col-md-5 col-sm-12">
          <img
            src={cardImage2}
            alt="aboutPix image"
            className="aboutImagePix resizeStyle d-block mx-lg-auto "
          />
          <p className="col-sm-10 mt-3 d-flex d-lg-none .d-xl-block smallHide d-md-none .d-lg-block">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices ma uris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
          </p>
          <p className="d-lg-none .d-xl-block d-md-none .d-lg-block">
            <b>Edwards Tope</b>
          </p>
          <p className="d-lg-none .d-xl-block mx-5 ms-5 d-md-none .d-lg-block">
            CEO
          </p>
        </div>

        <div className="my-5 ms-5 smallScreen">
          <p className="col-sm-2 col-md-8 col-lg-12 smallScreen">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices ma uris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
          </p>
          <div className="d-flex justify-content-end me-5">
            <p>
              <b>Edwards Tope</b>
            </p>
          </div>
          <p className="d-flex justify-content-end mx-5">CEO</p>
        </div>
      </div>
    </Container>
  );
};
