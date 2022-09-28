import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ThankYouPopUpImg from '../../assets/images/Happy People.jpg'


/** Please Note that the ThankYouPopUp Modal works with the confirm button **/ 
export const ThankYouPopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="border border-0 Modal-Btn" variant="primary" onClick={handleShow}>
        Confirm
      </Button>

        {/* <div className="ModalPopUp"> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='text-center border border-0 justify-content-center flex-column pb-0'>
          <img className='w-50' src={ThankYouPopUpImg} alt="...." />
          <Modal.Title className='ModalTitle'>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center border border-0 ModalMessage'>The entire team at MyDoshBox is very grateful to you for trusting us to keep your transactions secure. For any improvements you may have in mind please contact our customer care.</Modal.Body>
        <Modal.Footer className='border border-0 text-center justify-content-center'>
          <Button className="border border-0 Modal-Btn" variant="primary" onClick={handleClose}>
            Home
          </Button >
        </Modal.Footer>
      </Modal>
        {/* </div> */}
    </>
  );
}