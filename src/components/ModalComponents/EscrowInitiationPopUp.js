import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ThankYouPopUpImg from '../../assets/images/Happy People.jpg'


/** Please Note that the EscrowInitiationPopUp Modal works with the I Agree button **/ 
export const EscrowInitiationPopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="border border-0 Modal-Btn" variant="primary" onClick={handleShow}>
        Confirm
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='text-center border border-0 justify-content-center flex-column pb-0'>
          <img className='w-50' src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className='ModalTitle'>Transaction Started</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-justify border border-0 ModalMessage'>A transaction has been started between you buyer (OPeyemi andrewson) and seller(Ellandrofiles). please go to the transactions page and confirm delivery once you receive the goods</Modal.Body>
        <Modal.Footer className='border border-0 text-center justify-content-center pt-0'>
          <Button className="border border-0 Modal-Btn" variant="primary" onClick={handleClose}>
          Notifications
          </Button >
        </Modal.Footer>
      </Modal>
    </>
  );
}