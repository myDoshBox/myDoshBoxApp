<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0251f6c8df41aca3a7970e088b28e1ee5f409550
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

        {/* <div className="ModalPopUp"> */}
=======
>>>>>>> 74cae954fde404da9f8b20c3269f57fe2b65e7da
>>>>>>> origin/NavbarComponents
=======

      {/* <div className="ModalPopUp"> */}
>>>>>>> 0251f6c8df41aca3a7970e088b28e1ee5f409550
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-center border border-0 justify-content-center flex-column pb-0">
          <img className="w-50" src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className="ModalTitle">Thank You</Modal.Title>
        </Modal.Header>
<<<<<<< HEAD
<<<<<<< HEAD
        <Modal.Body className="border border-0 ModalMessage">
=======
        <Modal.Body className="text-center border border-0 ModalMessage">
>>>>>>> 0251f6c8df41aca3a7970e088b28e1ee5f409550
          The entire team at MyDoshBox is very grateful to you for trusting us
          to keep your transactions secure. For any improvements you may have in
          mind please contact our customer care.
        </Modal.Body>
<<<<<<< HEAD
        <Modal.Footer className="border border-0 text-center justify-content-center pt-0">
=======
        <Modal.Footer className="border border-0 text-center justify-content-center">
>>>>>>> 0251f6c8df41aca3a7970e088b28e1ee5f409550
          <Button
            className="border border-0 Modal-Btn"
            variant="primary"
            onClick={handleClose}
          >
<<<<<<< HEAD
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
=======
>>>>>>> 0251f6c8df41aca3a7970e088b28e1ee5f409550
            Home
          </Button>
        </Modal.Footer>
      </Modal>
<<<<<<< HEAD
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
=======
      {/* </div> */}
    </>
  );
};
>>>>>>> 0251f6c8df41aca3a7970e088b28e1ee5f409550
