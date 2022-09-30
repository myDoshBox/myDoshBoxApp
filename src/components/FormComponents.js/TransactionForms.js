import { useState } from "react";
import { Card, Form } from "react-bootstrap";

//EscrowInitiationForm
export const EscrowInitiationForm = () => {
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form>
    </Card>
  );
};
//SellerDeliverGoodsForm
//BankTransferForm
//BuyerConfirmProductDeliveryForm
