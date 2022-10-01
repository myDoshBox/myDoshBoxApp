import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

//EscrowInitiationForm
export const EscrowInitiationForm = () => {
  const [transaction, setTransaction] = useState({
    email: "",
    description: "",
    quantity: 0,
    price: 0,
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
        quantity: 0,
        price: 0,
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
    parseFloat(transaction.total);
  };
  totalCalc();
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 escrow-form-field"
          controlId="formBasicEmail"
        >
          <Form.Label className="escrow-label">Sellers Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            value={transaction.email}
            onChange={handleChange}
            className="escrow-input-field"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 escrow-form-field"
          controlId="formBasicEmail"
        >
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            id="description"
            name="description"
            value={transaction.description}
            onChange={handleChange}
            className="escrow-input-field"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 escrow-form-field"
          controlId="formBasicEmail"
        >
          <Form.Label>Quantity of Items</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter email"
            id="quantity"
            name="quantity"
            value={transaction.quantity}
            onChange={handleChange}
            className="escrow-input-field"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 escrow-form-field"
          controlId="formBasicEmail"
        >
          <Form.Label>Quantity of Items</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter email"
            id="price"
            name="price"
            value={transaction.price}
            onChange={handleChange}
            className="escrow-input-field"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 escrow-form-field"
          controlId="formBasicEmail"
        >
          <Form.Label>Quantity of Items</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter email"
            id="completionDate"
            name="completionDate"
            value={transaction.completionDate}
            onChange={handleChange}
            className="escrow-input-field"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 escrow-form-field"
          controlId="formBasicEmail"
        >
          <Form.Label>Quantity of Items</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter email"
            id="image"
            name="image"
            value={transaction.image}
            onChange={handleChange}
            className="escrow-input-field"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity of Items</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter email"
            id="total"
            name="total"
            value={transaction.total}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};
//SellerDeliverGoodsForm
//BankTransferForm
//BuyerConfirmProductDeliveryForm
