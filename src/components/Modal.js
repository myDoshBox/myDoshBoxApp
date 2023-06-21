import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ThankYouPopUpImg from "../images/Happy People.jpg";
import { ModalBtn } from "./ButtonsComponent/OtherButtons";
import evidence from "../images/productimage.jpg";

/** Please Note that the GeneralModal works with the openModalText Button **/
export const GeneralModal = ({
  openModalText,
  closeModalText,
  modalMessage,
  modalTitle,
  modalRoute,
  modalBtnStyle,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalBtn
        styles={modalBtnStyle}
        onclick={handleShow}
        text={openModalText}
      />

      <Modal show={show} onHide={handleClose} className="GeneralModal">
        <Modal.Header className="text-center border border-0 justify-content-center flex-column pb-0">
          <img className="w-50 mb-3" src={ThankYouPopUpImg} alt={modalTitle} />
          <Modal.Title className="">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fw-normal">
          {modalMessage}
        </Modal.Body>
        <Modal.Footer className="border border-0 text-center justify-content-center pt-0">
          <Link to={modalRoute}>
            <ModalBtn
              styles={modalBtnStyle}
              onclick={handleClose}
              text={closeModalText}
            />
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const DisputeDetailsModal = ({
  openModalText,
  modalRoute,
  modalBtnStyle,
}) => {
  const [show, setShow] = useState(false);
  const [showYou, setShowYou] = useState(false);
  const [showCounterParty, setShowCounterParty] = useState(false);
  const [showNeutral, setShowNeutral] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleYouBtnClick = () => {
    setShowYou(true);
    setShowCounterParty(false);
    setShowNeutral(false);
  };

  const handleCounterPartyBtnClick = () => {
    setShowCounterParty(true);
    setShowYou(false);
    setShowNeutral(false);
  };

  const handleNeutralBtnClick = () => {
    setShowYou(false);
    setShowCounterParty(false);
    setShowNeutral(true);
  };

  return (
    <>
      <ModalBtn
        styles={modalBtnStyle}
        onclick={handleShow}
        text={openModalText}
      />

      <Modal show={show} onHide={handleClose} className="DisputeDetailsModal">
        <Modal.Header closeButton>
          <h6 className="m-0 text-small">
            Details of Disputed Transaction 2700023H
          </h6>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="">
              <h4 className="m-0 fw-medium">₦ 3,000,000.00</h4>
              <div className="d-flex align-items-center justify-content-start">
                <p className="m-0 text-small">22 September, 2022</p>
                <svg
                  className="mx-2"
                  width="2"
                  height="15"
                  viewBox="0 0 2 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="14"
                    x2="1"
                    y2="1"
                    stroke="#4B4453"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="m-0 text-small">4:15 pm (GMT)</p>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center rounded-1 mb-3 mt-2">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9484 14.3504L6.64844 10.0504L6.64844 4.65039H8.64844L8.64844 9.25039L12.3484 12.9504L10.9484 14.3504Z"
                  fill="#FF0000"
                  fill-opacity="0.4"
                />
                <rect
                  x="1.39844"
                  y="1.40039"
                  width="16.2"
                  height="16.2"
                  rx="4.25"
                  stroke="#FF0000"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
              </svg>

              <p
                className="m-0 text-small ms-2"
                style={{ color: "rgba(255, 0, 0, 0.4)" }}
              >
                Awaiting CounterParty Claims
              </p>
            </div>
          </div>
          <div className="">
            <div class="row g-2 mb-4 pb-2">
              <button
                type="button"
                class="w-100 w-md-50 btn btn-outline-secondary EscrowTransactTypeBtn rounded-1"
                onClick={handleYouBtnClick}
              >
                You
              </button>
              <div className="d-flex justify-content-between align-items-center p-0">
                <button
                  type="button"
                  class="btn btn-outline-secondary EscrowTransactTypeBtn rounded-1"
                  onClick={handleCounterPartyBtnClick}
                  style={{ width: "49%" }}
                >
                  CounterParty
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary EscrowTransactTypeBtn rounded-1"
                  onClick={handleNeutralBtnClick}
                  style={{ width: "49%" }}
                >
                  Neutral
                </button>
              </div>
            </div>

            {showYou && (
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <label htmlFor="name" className="text-small m-0">
                      Name
                    </label>
                    <p id="name" className="text-small m-0">
                      Olasunkanmi Idris
                    </p>
                  </div>
                  <div>
                    <label htmlFor="contact" className="text-small m-0">
                      Contact
                    </label>
                    <p id="contact" className="text-small m-0">
                      +2348105410146
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="claim" className="text-small m-0">
                    Claim
                  </label>
                  <p
                    id="claim"
                    className="text-small m-0"
                    style={{ textAlign: "justify" }}
                  >
                    This Escrow Agreement (the "Agreement") is made and entered
                    into on [Date] by and between [Buyer's Name] (the "Buyer")
                    and [Seller's Name] (the "Seller"), and [Escrow Platform's
                    Name] (the "Escrow Platform").
                  </p>
                </div>

                <div className="mt-4">
                  <label htmlFor="evidence" className="text-small m-0">
                    Evidence
                  </label>
                  <div id="evidence" className="d-flex overflow-auto">
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                  </div>
                </div>
              </div>
            )}
            {showCounterParty && (
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <label htmlFor="name" className="text-small m-0">
                      Name
                    </label>
                    <p id="name" className="text-small m-0">
                      Bunmi Davies
                    </p>
                  </div>
                  <div>
                    <label htmlFor="contact" className="text-small m-0">
                      Contact
                    </label>
                    <p id="contact" className="text-small m-0">
                      +2348156723165
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="claim" className="text-small m-0">
                    Claim
                  </label>
                  <p
                    id="claim"
                    className="text-small m-0"
                    style={{ textAlign: "justify" }}
                  >
                    This Escrow Agreement (the "Agreement") is made and entered
                    into on [Date] by and between [Buyer's Name] (the "Buyer")
                    and [Seller's Name] (the "Seller"), and [Escrow Platform's
                    Name] (the "Escrow Platform").
                  </p>
                </div>

                <div className="mt-4">
                  <label htmlFor="evidence" className="text-small m-0">
                    Evidence
                  </label>
                  <div id="evidence" className="d-flex overflow-auto">
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                  </div>
                </div>
              </div>
            )}
            {showNeutral && (
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <label htmlFor="name" className="text-small m-0">
                      Name
                    </label>
                    <p id="name" className="text-small m-0">
                      Korodele Nelson
                    </p>
                  </div>
                  <div>
                    <label htmlFor="contact" className="text-small m-0">
                      Contact
                    </label>
                    <p id="contact" className="text-small m-0">
                      +2348105410146
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="claim" className="text-small m-0">
                    Claim
                  </label>
                  <p
                    id="claim"
                    className="text-small m-0"
                    style={{ textAlign: "justify" }}
                  >
                    This Escrow Agreement (the "Agreement") is made and entered
                    into on [Date] by and between [Buyer's Name] (the "Buyer")
                    and [Seller's Name] (the "Seller"), and [Escrow Platform's
                    Name] (the "Escrow Platform").
                  </p>
                </div>

                <div className="mt-4">
                  <label htmlFor="evidence" className="text-small m-0">
                    Evidence
                  </label>
                  <div id="evidence" className="d-flex overflow-auto">
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                    <img
                      src={evidence}
                      alt="evidence"
                      className="rounded-1 w-50 me-3"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-between">
          <ModalBtn
            styles={`w-25 m-0 text-small CloseBtnStyle GeneralBtnStyle1 btn all-btn`}
            onclick={handleClose}
            text="Close"
          />

          <Link className="m-0" style={{ width: "72%" }}>
            <ModalBtn
              styles={`w-100 m-0 text-small GeneralBtnStyle1 btn all-btn text-white`}
              onclick={handleClose}
              lefticon={
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 8.5C1 10.3565 1.7375 12.137 3.05025 13.4497C4.36301 14.7625 6.14348 15.5 8 15.5C9.85652 15.5 11.637 14.7625 12.9497 13.4497C14.2625 12.137 15 10.3565 15 8.5C15 6.64348 14.2625 4.86301 12.9497 3.55025C11.637 2.2375 9.85652 1.5 8 1.5C6.14348 1.5 4.36301 2.2375 3.05025 3.55025C1.7375 4.86301 1 6.64348 1 8.5ZM16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM8.5 5C8.5 4.86739 8.44732 4.74021 8.35355 4.64645C8.25979 4.55268 8.13261 4.5 8 4.5C7.86739 4.5 7.74021 4.55268 7.64645 4.64645C7.55268 4.74021 7.5 4.86739 7.5 5L7.5 10.793L5.354 8.646C5.26011 8.55211 5.13278 8.49937 5 8.49937C4.86722 8.49937 4.73989 8.55211 4.646 8.646C4.55211 8.73989 4.49937 8.86722 4.49937 9C4.49937 9.13278 4.55211 9.26011 4.646 9.354L7.646 12.354C7.69245 12.4006 7.74762 12.4375 7.80837 12.4627C7.86911 12.4879 7.93423 12.5009 8 12.5009C8.06577 12.5009 8.13089 12.4879 8.19163 12.4627C8.25238 12.4375 8.30755 12.4006 8.354 12.354L11.354 9.354C11.4479 9.26011 11.5006 9.13278 11.5006 9C11.5006 8.86722 11.4479 8.73989 11.354 8.646C11.2601 8.55211 11.1328 8.49937 11 8.49937C10.8672 8.49937 10.7399 8.55211 10.646 8.646L8.5 10.793V5Z"
                    fill="white"
                  />
                </svg>
              }
              text="Download"
            />
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
