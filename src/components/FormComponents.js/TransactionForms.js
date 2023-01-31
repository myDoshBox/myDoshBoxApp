import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import { GeneralModal } from "../Modal";

//    <DeliveryForm
//   heading="Confirm Product At Delivery"
//   sub_text="Sincerely Acknowledge Product condition at point of delivery"
//   label="christianugochukwugabriel@gmail.com"
// />

//DeliveryForm
export const DeliveryForm = ({ heading, sub_text, checkList }) => {
  return (
    <div className="mx-lg-5 mt-5 shadow InitiateEscrow w-100 p-3 p-lg-5 ">
      <h4 className="fs-4 text-center ">{heading}</h4>
      <p className="text-center confirm-delivery-pText">{sub_text}</p>
      <Form>
        <Form.Group className="ms-lg-5 ps-lg-4 mt-4">
          {checkList.map((check, index) => (
            <Form.Check
              key={index}
              className="mb-4"
              type="checkbox"
              id={`check${index}`}
              label={check.label}
              required
            />
          ))}
        </Form.Group>

        <div className="d-flex justify-content-center mt-5">
          <Link to="/escrow">
            <GeneralBtn
              text="Cancel"
              styles="GeneralBtnStyle1 btn all-btn text-white me-3 pale-red"
            />
          </Link>
           <GeneralModal
           openModalText="Confirm"
          modalBtnStyle="GeneralBtnStyle1 btn all-btn text-white"
          modalTitle="Thank You"
          modalMessage="The entire team at MyDoshBox is very grateful to you for trusting us to keep your transactions secure. For any improvements you may have in mind please contact our customer care."
          modalRoute="../home"
          closeModalText="Home"
          />
        </div>
      </Form>
    </div>
  );
};
