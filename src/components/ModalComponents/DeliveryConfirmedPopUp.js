import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ThankYouPopUpImg from "../../images/Happy People.jpg";

/** Please Note that the DeliveryConfirmedPopUp Modal works with the confirm button **/
export const DeliveryConfirmedPopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="border border-0 Modal-Btn"
        variant="primary"
        onClick={handleShow}
      >
        Confirm
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-center border border-0 justify-content-center flex-column pb-0">
          <img className="w-50" src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className="ModalTitle">Delivery Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border border-0 ModalMessage">
          Buyer Opeyemi has successfully confirmed delivery of transaction ID
          2D47HJ7 and the sum of 3000naira has been paid to your account in the
          next 24 hours
        </Modal.Body>
        <Modal.Footer className="border border-0 text-center justify-content-center pt-0">
          <Button
            className="border border-0 Modal-Btn"
            variant="primary"
            onClick={handleClose}
          >
            Home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
