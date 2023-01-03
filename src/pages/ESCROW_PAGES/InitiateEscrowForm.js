import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { useState, useEffect } from "react";
import {
  Form,
  FormCheck,
  FormGroup,
  FormLabel,
  Row,
  Col,
  Button,
  FormText,
} from "react-bootstrap";
// import { Input } from 'react-bootstrap/Form';


const InitiateEscrow = () => {
  const initialValues = {
    phoneNumber: "",
    description: "",
    quantity: "",
    price: "",
    completionDate: Date,
    total: 0,
    image: File,
  };
  const [transaction, setTransaction] = useState(initialValues);

  const [transactionDetails, setTransactionDetails] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransaction({ ...transaction, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      transaction.phoneNumber &&
      transaction.description &&
      transaction.quantity &&
      transaction.price &&
      transaction.completionDate &&
      transaction.total &&
      transaction.image
    ) {
      setTransactionDetails([...transactionDetails, transaction]);
      setTransaction(initialValues);
    }
    setFormErrors(validate(transaction));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(transaction);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.phoneNumber) {
      errors.phoneNumber = "*This field is required";
    }
    if (!values.description) {
      errors.description = "*This field is required";
    }
    if (!values.quantity) {
      errors.quantity = "*This field is required";
    }
    if (!values.price) {
      errors.price = "*This field is required";
    }

    return errors;
  };

  const totalCalc = () => {
    transaction.total =
      parseInt(transaction.quantity) * parseFloat(transaction.price) +
      0.05 * parseFloat(transaction.price);
    transaction.total = transaction.total.toFixed(2);
  };
  totalCalc();

  const [showProductForm, setShowProductForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);

  const handleProductButtonClick = () => {
    setShowProductForm(true);
    setShowServiceForm(false);
  };

  const handleServiceButtonClick = () => {
    setShowProductForm(false);
    setShowServiceForm(true);
  };

  return (
    <div className="d-flex">
      <UserSidenav />
      <div>
        <Form onSubmit={handleSubmit} className="escrow-form">
          <Form.Group className="my-5  escrow-form-field">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-4  text-md-end">
                <Form.Label className="escrow-form-label">
                  Phone Number
                </Form.Label>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={transaction.phoneNumber}
                  onChange={handleChange}
                  className="escrow-input-field"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12 text-md-end"></div>
              <div className="col-lg-6 col-md-8  col-sm-12">
                <span className="escrow-form-error ms-3">
                  {formErrors.phoneNumber}
                </span>
              </div>
            </div>
          </Form.Group>

          <div className="mb-3 border border-secondary border-0.5">
            <div className="align-items-center">
              <FormLabel className="mr-3">
                What type of transaction are you making?
              </FormLabel>
              <FormGroup className="w-50 mr-10">
                <FormCheck
                  type="radio"
                  id="buying"
                  name="choice"
                  label="Buying"
                />
              </FormGroup>
              <FormGroup className="w-50 ml-10">
                <FormCheck
                  type="radio"
                  id="selling"
                  name="choice"
                  label="Selling"
                />
              </FormGroup>
            </div>
          </div>
          <Row>
            <Col>
              <p className="text-muted font-weight-bold">
                What are you transacting?
              </p>
            </Col>
            <Col>
              <Button variant="outline-primary" className="w-50">
                Product
              </Button>
              <Button variant="outline-secondary" className="w-50">
                Service
              </Button>
            </Col>
          </Row>

          {showProductForm && (
            <FormGroup>
              <Form.Label for="name">Name</Form.Label>
              <Form.Control type="text" name="name" id="name" />
            </FormGroup>
          )}
          {showProductForm && (
            <FormGroup>
              <Form.Label for="category">Category</Form.Label>
              <Form.Control type="select" name="category" id="category">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Form.Control>
              <FormText>Example of a dropdown field</FormText>
            </FormGroup>
          )}
          {showProductForm && (
            <FormGroup>
              <Form.Label for="quantity">Quantity</Form.Label>
              <Form.Control type="number" name="quantity" id="quantity" />
            </FormGroup>
          )}
          {showServiceForm && (
            <FormGroup>
              <Form.Label for="service">Service</Form.Label>
              <Form.Control type="text" name="service" id="service" />
            </FormGroup>
          )}

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
            <div className="row">
              <div className="col-md-4 col-sm-12 text-md-end"></div>
              <div className="col-lg-6 col-md-8  col-sm-12">
                <span className="escrow-form-error ms-3">
                  {formErrors.quantity}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-5 escrow-form-field">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-12 text-md-end">
                <Form.Label className="escrow-form-label ms-3">
                  Price
                </Form.Label>
              </div>
              <div className="col-lg-6 col-md-8  col-sm-12 d-flex price-field">
                <Form.Control
                  type="number"
                  placeholder="Enter the amount the product cost"
                  id="price"
                  name="price"
                  value={transaction.price}
                  onChange={handleChange}
                  className="escrow-price-field"
                />
                <span className="ngn2">NGN</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12 text-md-end"></div>
              <div className="col-lg-6 col-md-8  col-sm-12">
                <span className="escrow-form-error ms-3">
                  {formErrors.price}
                </span>
              </div>
            </div>
          </Form.Group>
          {/* <Form.Group className="mb-5 escrow-form-field">
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
          <p>{formErrors.completionDate}</p>
        </Form.Group> */}

          <Form.Group className="mb-5 escrow-form-field">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-12 text-md-end">
                <Form.Label className="escrow-form-label">Image</Form.Label>
              </div>
              <div className="col-lg-6 col-md-8  col-sm-12">
                <Form.Control
                  type="file"
                  placeholder="Attach Image(s)"
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
          <Form.Group className="mb-5 escrow-form-field">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-4  text-md-end ">
                <Form.Label className="escrow-form-label">
                  Description
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
            <div className="row">
              <div className="col-md-4 col-sm-12 text-md-end"></div>
              <div className="col-lg-6 col-md-8  col-sm-12">
                <span className="escrow-form-error ms-3">
                  {formErrors.description}
                </span>
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
            {/* <ProceedButton /> */}
          </div>
        </Form>{" "}
      </div>
    </div>
  );
};

export default InitiateEscrow;
