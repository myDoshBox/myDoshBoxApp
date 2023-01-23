import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ThankYouPopUpImg from "../images/Happy People.jpg";
import { GeneralBtn } from "./ButtonsComponent/GenandAuthBtn";

/** Please Note that the GeneralModal works with the openModalText Button **/
export const GeneralModal = ({
  openModalText,
  closeModalText,
  modalMessage,
  modalTitle,
  modalRoute,
  modalBtnStyle
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GeneralBtn
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
          <GeneralBtn
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
