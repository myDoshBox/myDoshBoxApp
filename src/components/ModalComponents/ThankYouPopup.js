<<<<<<< HEAD
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ThankYouPopUpImg from "../../assets/images/Happy People.jpg";

/** Please Note that the ThankYouPopUp Modal works with the confirm button **/
export const ThankYouPopUp = () => {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

        {/* <div className="ModalPopUp"> */}
=======
>>>>>>> 74cae954fde404da9f8b20c3269f57fe2b65e7da
>>>>>>> origin/NavbarComponents
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-center border border-0 justify-content-center flex-column pb-0">
          <img className="w-50" src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className="ModalTitle">Thank You</Modal.Title>
        </Modal.Header>
<<<<<<< HEAD
        <Modal.Body className="border border-0 ModalMessage">
          The entire team at MyDoshBox is very grateful to you for trusting us
          to keep your transactions secure. For any improvements you may have in
          mind please contact our customer care.
        </Modal.Body>
        <Modal.Footer className="border border-0 text-center justify-content-center pt-0">
          <Button
            className="border border-0 Modal-Btn"
            variant="primary"
            onClick={handleClose}
          >
=======
<<<<<<< HEAD
        <Modal.Body className='text-center border border-0 ModalMessage'>The entire team at MyDoshBox is very grateful to you for trusting us to keep your transactions secure. For any improvements you may have in mind please contact our customer care.</Modal.Body>
        <Modal.Footer className='border border-0 text-center justify-content-center'>
=======
        <Modal.Body className='border border-0 ModalMessage'>The entire team at MyDoshBox is very grateful to you for trusting us to keep your transactions secure. For any improvements you may have in mind please contact our customer care.</Modal.Body>
        <Modal.Footer className='border border-0 text-center justify-content-center pt-0'>
>>>>>>> 74cae954fde404da9f8b20c3269f57fe2b65e7da
          <Button className="border border-0 Modal-Btn" variant="primary" onClick={handleClose}>
>>>>>>> origin/NavbarComponents
            Home
          </Button>
        </Modal.Footer>
      </Modal>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* </div> */}
=======
>>>>>>> 74cae954fde404da9f8b20c3269f57fe2b65e7da
>>>>>>> origin/NavbarComponents
    </>
  );
};
=======
>>>>>>> origin/chris
