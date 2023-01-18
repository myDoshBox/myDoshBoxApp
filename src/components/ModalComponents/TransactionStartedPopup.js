import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ThankYouPopUpImg from "../../assets/images/Happy People.jpg";

/** Please Note that the TransactionStartedPopUp Modal works with the I Agree button **/
export const BuyerTransactionStartedPopUp = () => {
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
        I Agree
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-center border border-0 justify-content-center flex-column pb-0">
          <img className="w-50" src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className="ModalTitle">Seller Notified</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-justify border border-0 ModalMessage">
          Seller Ellandrofiles has just been notified of the transaction you
          created. You will be notified once the seller has accepted the
          transaction
        </Modal.Body>
        <Modal.Footer className="border border-0 text-center justify-content-center pt-0">
          <Button
            className="border border-0 Modal-Btn"
            variant="primary"
            onClick={handleClose}
          >
            Notifications
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const SellerTransactionStartedPopUp = () => {
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
        I Agree
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-center border border-0 justify-content-center flex-column pb-0">
          <img className="w-50" src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className="ModalTitle">Buyer Notified</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-justify border border-0 ModalMessage">
          Buyer Ellandrofiles has just been notified of the transaction you
          created. You will be notified once the Buyer has accepted the
          transaction
        </Modal.Body>
        <Modal.Footer className="border border-0 text-center justify-content-center pt-0">
          <Button
            className="border border-0 Modal-Btn"
            variant="primary"
            onClick={handleClose}
          >
            Notifications
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
