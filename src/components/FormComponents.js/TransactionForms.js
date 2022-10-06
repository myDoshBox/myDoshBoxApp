import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import {
  ProceedButton,
  ConfirmButton,
} from "../ButtonsComponent/TransactionButtons";

//BuyerEscrowInitiationForm
export const BuyerEscrowInitiationForm = () => {
  const [transaction, setTransaction] = useState({
    email: "",
    description: "",
    quantity: "",
    price: "",
    completionDate: Date,
    total: 0,
    image: File,
  });

  const [transactionDetails, setTransactionDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransaction({ ...transaction, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      transaction.email &&
      transaction.description &&
      transaction.quantity &&
      transaction.price &&
      transaction.completionDate &&
      transaction.total &&
      transaction.image
    ) {
      setTransactionDetails([...transactionDetails, transaction]);
      setTransaction({
        email: "",
        description: "",
        quantity: "",
        price: "",
        completionDate: Date,
        total: 0,
        image: File,
      });
    }
  };

  const totalCalc = () => {
    transaction.total =
      parseInt(transaction.quantity) * parseFloat(transaction.price) +
      0.05 * parseFloat(transaction.price);
    transaction.total = transaction.total.toFixed(2);
  };
  totalCalc();
  return (
    <Container>
      <Form onSubmit={handleSubmit} className="escrow-form">
        <Form.Group className="my-5  escrow-form-field">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-4  text-md-end">
              <Form.Label className="escrow-form-label">
                Sellers Email
              </Form.Label>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Form.Control
                type="email"
                placeholder="Enter sellers email"
                id="email"
                name="email"
                value={transaction.email}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Item Description
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <Form.Control
                type="text"
                placeholder="Enter the description of the item"
                id="description"
                name="description"
                value={transaction.description}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Quantity of Items
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                id="quantity"
                name="quantity"
                value={transaction.quantity}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Price of Items
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12 d-flex price-field">
              <Form.Control
                type="number"
                placeholder="Enter the amount the items cost"
                id="price"
                name="price"
                value={transaction.price}
                onChange={handleChange}
                className="escrow-price-field"
              />
              <span className="ngn2">NGN</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Delivery/Completion Date
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="date"
                placeholder="Enter email"
                id="completionDate"
                name="completionDate"
                value={transaction.completionDate}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Attach Images
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="file"
                placeholder="Enter email"
                id="image"
                name="image"
                value={transaction.image}
                onChange={handleChange}
                className="escrow-input-field escrow-images"
                accept="image/*"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5">
          <div className="row ">
            <div className="col-sm-2 col-lg-4 text-md-end"></div>
            <div className="col-sm-10 col-lg-8 ms-sm-auto row align-items-center">
              <div className="col-4 text-end">
                <Form.Label>Total :</Form.Label>
              </div>
              <div className="col-8 d-flex align-items-center">
                <span className="ngn">NGN</span>
                <Form.Control
                  type="number"
                  id="total"
                  name="total"
                  value={transaction.total}
                  onChange={handleChange}
                  className="total-input border-0 "
                  disabled
                />
              </div>
            </div>
          </div>
        </Form.Group>
        <div className="d-flex justify-content-center pb-5 mt-5">
          <ProceedButton />
        </div>
      </Form>
    </Container>
  );
};
// SellersEscrowInitiationForm
export const SellersEscrowInitiationForm = () => {
  const [transaction, setTransaction] = useState({
    email: "",
    description: "",
    quantity: "",
    price: "",
    completionDate: Date,
    total: 0,
    image: File,
  });

  const [transactionDetails, setTransactionDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransaction({ ...transaction, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      transaction.email &&
      transaction.description &&
      transaction.quantity &&
      transaction.price &&
      transaction.completionDate &&
      transaction.total &&
      transaction.image
    ) {
      setTransactionDetails([...transactionDetails, transaction]);
      setTransaction({
        email: "",
        description: "",
        quantity: "",
        price: "",
        completionDate: Date,
        total: 0,
        image: File,
      });
    }
  };

  const totalCalc = () => {
    transaction.total =
      parseInt(transaction.quantity) * parseFloat(transaction.price) +
      0.05 * parseFloat(transaction.price);
    transaction.total = transaction.total.toFixed(2);
  };
  totalCalc();
  return (
    <Container>
      <Form onSubmit={handleSubmit} className="escrow-form">
        <Form.Group className="my-5  escrow-form-field">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-4  text-md-end">
              <Form.Label className="escrow-form-label">
                Buyers Email
              </Form.Label>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Form.Control
                type="email"
                placeholder="Enter buyers email"
                id="email"
                name="email"
                value={transaction.email}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Item Description
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <Form.Control
                type="text"
                placeholder="Enter the description of the item"
                id="description"
                name="description"
                value={transaction.description}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Quantity of Items
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                id="quantity"
                name="quantity"
                value={transaction.quantity}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Price of Items
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12 d-flex price-field">
              <Form.Control
                type="number"
                placeholder="Enter the amount the items cost"
                id="price"
                name="price"
                value={transaction.price}
                onChange={handleChange}
                className="escrow-price-field"
              />
              <span className="ngn2">NGN</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Delivery/Completion Date
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="date"
                placeholder="Enter email"
                id="completionDate"
                name="completionDate"
                value={transaction.completionDate}
                onChange={handleChange}
                className="escrow-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 escrow-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="escrow-form-label">
                Attach Images
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="file"
                placeholder="Enter email"
                id="image"
                name="image"
                value={transaction.image}
                onChange={handleChange}
                className="escrow-input-field escrow-images"
                accept="image/*"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5">
          <div className="row ">
            <div className="col-sm-2 col-lg-4 text-md-end"></div>
            <div className="col-sm-10 col-lg-8 ms-sm-auto row align-items-center">
              <div className="col-4 text-end">
                <Form.Label>Total :</Form.Label>
              </div>
              <div className="col-8 d-flex align-items-center">
                <span className="ngn">NGN</span>
                <Form.Control
                  type="number"
                  id="total"
                  name="total"
                  value={transaction.total}
                  onChange={handleChange}
                  className="total-input border-0 "
                  disabled
                />
              </div>
            </div>
          </div>
        </Form.Group>
        <div className="d-flex justify-content-center pb-5 mt-5">
          <ProceedButton />
        </div>
      </Form>
    </Container>
  );
};
//SellerDeliverGoodsForm
export const SellerDeliverGoodsForm = () => {
  return (
    <Container>
      <Form className="deliver-goods-form">
        <h3 className="text-center confirm-delivery-head">
          Confirm Product At Delivery
        </h3>
        <p className="text-center confirm-delivery-pText">
          Sincerely Acknowledge Product condition at point of delivery
        </p>
        <div className=" mb-3 d-flex justify-content-center">
          <Form.Check
            type="checkbox"
            id="check1"
            label=" I acknowledge that the product have no defects when being sent out for delivery "
            required
          />
        </div>
        <div className=" mb-3 d-flex justify-content-center">
          <Form.Check
            type="checkbox"
            id="check1"
            label=" I acknowledge that the product have no defects when being sent out for delivery "
            required
          />
        </div>
        <div className=" mb-3 d-flex justify-content-center">
          <Form.Check
            type="checkbox"
            id="check1"
            label=" I acknowledge that the product have no defects when being sent out for delivery "
            required
          />
        </div>
        <div className="d-flex justify-content-center pb-3 mt-3">
          <ConfirmButton />
        </div>
      </Form>
    </Container>
  );
};
//BuyerConfirmProductDeliveryForm
export const BuyerConfirmProductDeliveryForm = () => {
  return (
    <Container>
      <div className="deliver-goods-form">
        <h3 className="text-center confirm-delivery-head">
          Confirm Completion / Delivery
        </h3>
        <p className="text-center confirm-delivery-pText">
          Sincerely Acknowledge that you are satisfied with the goods delivered
          or service provided{" "}
        </p>
        <Form>
          <div className=" mb-3 d-flex justify-content-center">
            <Form.Check
              type="checkbox"
              id="check1"
              label=" I acknowledge that i am pleased with the goods received and have no complaints  "
              required
            />
          </div>
          <div className=" mb-3 d-flex justify-content-center">
            <Form.Check
              type="checkbox"
              id="check1"
              label=" I acknowledge that i am pleased with the goods received and have no complaints  "
              required
            />
          </div>
          <div className=" mb-3 d-flex justify-content-center">
            <Form.Check
              type="checkbox"
              id="check1"
              label=" I acknowledge that i am pleased with the goods received and have no complaints  "
              required
            />
          </div>
          <div className="d-flex justify-content-center pb-3 mt-3">
            <ConfirmButton />
          </div>
        </Form>
      </div>
    </Container>
  );
};
//BankTransferForm
export const BankTransferForm = () => {
  const [bankTransfer, setBankTransfer] = useState({
    transactionId: "",
    depositorName: "",
    amountPaid: "",
    dateOfPayment: Date,
    timeOfPayment: "",
  });

  const [bankTransferDetails, setBankTransferDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBankTransfer({ ...bankTransfer, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      bankTransfer.transactionId &&
      bankTransfer.depositorName &&
      bankTransfer.amountPaid &&
      bankTransfer.timeOfPayment &&
      bankTransfer.dateOfPayment
    ) {
      setBankTransferDetails([...bankTransferDetails, bankTransfer]);
      setBankTransfer({
        transactionId: "",
        depositorName: "",
        amountPaid: "",
        dateOfPayment: Date,
        timeOfPayment: "",
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="bank-transfer-form pt-5">
        <h3 className="text-center confirm-delivery-head ">
          Bank Transfer Form
        </h3>
        <p className="text-center confirm-delivery-pText">
          Sincerely Acknowledge that you are satisfied with the goods delivered
          or service provided
        </p>
        <Container>
          <div className="account-details d-flex flex-column justify-content-center align-items-start mt-5 p-3">
            <p>
              Account Number: <b>0456536668</b>
            </p>
            <p>
              Bank: <b> Guaranty Trust Bank (GTB)</b>
            </p>
            <p>
              Account Name: <b>Olasunkanmi Mohammed IDRIS </b>
            </p>
          </div>
        </Container>
        <Form.Group className="my-5  bank-transfer-form-field">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-4  text-md-end">
              <Form.Label className="bank-transfer-form-label">
                Transaction ID
              </Form.Label>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Form.Control
                type="text"
                // placeholder="Enter buyers email"
                id="transactionId"
                name="transactionId"
                value={bankTransfer.transactionId}
                onChange={handleChange}
                className="bank-transfer-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 bank-transfer-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="bank-transfer-form-label">
                Depositor Name
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <Form.Control
                type="text"
                placeholder="Enter name of account that made payment"
                id="depositorName"
                name="depositorName"
                value={bankTransfer.depositorName}
                onChange={handleChange}
                className="bank-transfer-input-field"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-5 bank-transfer-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="bank-transfer-form-label">
                Amount Paid
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="number"
                placeholder="Enter the amount that was paid"
                id="amountPaid"
                name="amountPaid"
                value={bankTransfer.amountPaid}
                onChange={handleChange}
                className="bank-transfer-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 bank-transfer-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="bank-transfer-form-label">
                Date of Payment
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="date"
                placeholder="Enter the date payment was paid"
                id="dateOfPayment"
                name="dateOfPayment"
                value={bankTransfer.dateOfPayment}
                onChange={handleChange}
                className="bank-transfer-input-field"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-5 bank-transfer-form-field">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 text-md-end">
              <Form.Label className="bank-transfer-form-label">
                Time of Payment
              </Form.Label>
            </div>
            <div className="col-lg-6 col-md-8  col-sm-12">
              <Form.Control
                type="time"
                placeholder="Enter the amount the items cost"
                id="timeOfPayment"
                name="timeOfPayment"
                value={bankTransfer.timeOfPayment}
                onChange={handleChange}
                className="bank-transfer-input-field"
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};
