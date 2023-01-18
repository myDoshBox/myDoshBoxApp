import { Form, Container } from "react-bootstrap";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import UsersSideNav from "../../components/NavbarComponents/UsersSideNav";

const SellerConfirmsReturnedGoods = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <UsersSideNav />
        </div>

        <div className="col-lg-8 col-sm-12">
          <SellerDeliverGoodsForm />
        </div>
      </div>
    </div>
  );
};

const SellerDeliverGoodsForm = () => {
  return (
    <>
      <div
        className="card shadow rounded-2 p-2 mx-auto mt-5"
        style={{ width: "85%" }}
      >
        <div class="card-body mx-auto">
          <div>
            <h4 className="text-center ">Confirm Product At Delivery</h4>
            <p className="text-center confirm-delivery-pText">
              Sincerely Acknowledge Product condition at point of delivery
            </p>
          </div>
          <Form>
            <Form.Check
              className="mb-4"
              type="checkbox"
              id="check1"
              label=" I acknowledge that the product have no defects when being sent out for delivery "
              required
            />
            <Form.Check
              className="mb-4"
              type="checkbox"
              id="check1"
              label=" I acknowledge that the product have no defects when being sent out for delivery "
              required
            />
            <Form.Check
              className="mb-4"
              type="checkbox"
              id="check1"
              label=" I acknowledge that the product have no defects when being sent out for delivery "
              required
            />

            <div className="d-flex justify-content-center pb-3 mt-3">
              <GeneralBtn
                text={"Confirm Delivery"}
                styles={"GeneralBtnStyle2 btn all-btn text-white"}
              />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SellerConfirmsReturnedGoods;
