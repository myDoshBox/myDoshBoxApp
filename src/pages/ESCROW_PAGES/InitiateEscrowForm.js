import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { useState, useEffect } from "react";
import {
  Form,
} from "react-bootstrap";
import { GeneralBtnStyle1 } from "../../components/ButtonsComponent/Button";

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
    <div className="d-flex w-100">
      <div className="d-none d-lg-block">
      <UserSidenav />
      </div>

      <Form onSubmit={handleSubmit} className="ms-lg-5 mt-5 shadow InitiateEscrow w-100 p-3 p-lg-5 ">
        <Form.Group className="">
          <Form.Label className="m-0">Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            id="phoneNumber"
            name="phoneNumber"
            value={transaction.phoneNumber}
            onChange={handleChange}
            className="escrow-input-field"
          />
          <span className="escrow-form-error ms-3">
            {formErrors.phoneNumber}
          </span>
        </Form.Group>

        <Form.Group className="mb-3">
          <label className="">What type of transaction are you making?</label>
          <div className="d-flex">
            <div className="d-flex justify-content-between border border-1 rounded-1 px-2 py-2 me-3 EscrowChoice">
              <label className="form-check-label me-2 me-lg-3" for="buying">
                Buying
              </label>
              <input
                type="radio"
                className="form-check"
                id="buying"
                name="choice"
                value="buying"
              />
            </div>
            <div className="d-flex justify-content-between border border-1 rounded-1 px-2 py-2 EscrowChoice">
              <label className="form-check-label me-2 me-lg-3" for="selling">
                Selling
              </label>
              <input
                type="radio"
                className="form-check"
                id="selling"
                name="choice"
                value="selling"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <label className="">What are you transacting?</label>
          <div class="d-flex">
            <button
              type="button"
              class="w-50 btn btn-outline-primary me-3 EscrowTransactTypeBtn"
              onClick={handleProductButtonClick}
            >
              Product
            </button>
            <button
              type="button"
              class="w-50 btn btn-outline-secondary EscrowTransactTypeBtn"
              onClick={handleServiceButtonClick}
            >
              Service
            </button>
          </div>
        </Form.Group>

        {showProductForm && (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                className="escrow-input-field"
                placeholder="Enter product name"
              />
            </Form.Group>
            <div className="form-group mb-3">
              <label for="category">Category</label>
              <select
                className="form-select"
                id="category"
                placeholder="Pick your product category"
              >
                <option value="Jewelry and Ornaments">
                  Jewelry and Ornaments
                </option>
                <option value="Food and Nutrition">Food and Nutrition</option>
                <option value="Clothing and Textiles">
                  Clothing and Textiles
                </option>
              </select>
            </div>
            <Form.Group className="">
              <Form.Label className="m-0">Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                id="quantity"
                name="quantity"
                value={transaction.quantity}
                onChange={handleChange}
                className="escrow-input-field"
              />
              <span className="escrow-form-error ms-3">
                {formErrors.quantity}
              </span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Price</Form.Label>
              <div className="input-group mb-3">
  <input className="form-control" aria-label="price in Naira" type="number"
                  placeholder="Enter the amount the product costs"
                  id="price"
                  name="price"
                  value={transaction.price}
                  onChange={handleChange}/>
  <span className="input-group-text ngn2">₦</span>
</div>
              <span className="escrow-form-error ms-3">{formErrors.price}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="">Image</Form.Label>
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
            </Form.Group>
            <Form.Group className="">
              <Form.Label className="">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the description of the item"
                id="description"
                name="description"
                value={transaction.description}
                onChange={handleChange}
                className="escrow-input-field"
              />
              <span className="escrow-form-error">
                {formErrors.description}
              </span>
            </Form.Group>
            <Form.Group className="my-3 d-flex align-items-center justify-content-end text-end">
              <label for="total" className="">
                Total
              </label>
              <span>
              <span
                id="total"
                name="total"
                value={transaction.total}
                onChange={handleChange}
                className="ngn btn rounded-1"
              >
                ₦ {transaction.total}
              </span>
              <small className="d-block">*Service charge included</small>
              </span>
            </Form.Group>
          </>
        )}

        {showServiceForm && (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                className="escrow-input-field"
                placeholder="Enter service name" />
            </Form.Group>
            <Form.Group className="form-group mb-3">
              <label for="category">Category</label>
              <select
                className="form-select"
                id="category"
                placeholder="Pick your service category"
              >
                <option value="web design">web design</option>
                <option value="hair styling">hair styling</option>
                <option value="Catering and event planning">
                  Catering and event planning
                </option>
              </select>
            </Form.Group>
            <Form.Group className="">
              <Form.Label className="m-0">Price</Form.Label>
              <div class="input-group">
                <input
                  className="form-control escrow-price-field"
                  aria-label="Price"
                  type="number"
                  placeholder="Enter the amount the product costs"
                  id="price"
                  name="price"
                  value={transaction.price}
                  onChange={handleChange} />
                <span className="input-group-text ngn2">NGN</span>
              </div>
              <span className="escrow-form-error ms-3">
                {formErrors.price}
              </span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="">Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Attach Image(s)"
                id="image"
                name="image"
                value={transaction.image}
                onChange={handleChange}
                className="escrow-input-field escrow-images"
                accept="image/*" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the description of the item"
                id="description"
                name="description"
                value={transaction.description}
                onChange={handleChange}
                className="escrow-input-field" />
              <span className="escrow-form-error">
                {formErrors.description}
              </span>
            </Form.Group>
            <Form.Group className="form-group mb-3">
              <label for="from">Service Timeline</label>
              <div className="row">
                <div className="col-6 input-group w-50">
                  <label for="from" className="input-group-text">
                    From
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="from"
                    placeholder="From"
                  />
                </div>
                <div className="col-6 input-group w-50">
                  <label for="to" className="input-group-text">
                    To
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="to"
                    placeholder="To"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="my-3 d-flex align-items-center justify-content-end text-end">
              <label for="total" className="">
                Total
              </label>
              <span className="">
              <span
                id="total"
                name="total"
                value={transaction.total}
                onChange={handleChange}
                className="ngn btn rounded-1"
              >
                ₦ {transaction.total}
                </span>
                <small className="d-block">*Service charge included</small>
              </span>
            </Form.Group>
          </>
        )}
        <div className="d-flex justify-content-center">
          <GeneralBtnStyle1 text="Cancel" />
          <GeneralBtnStyle1 text="Proceed" />
        </div>
      </Form>
    </div>
  );
};

export default InitiateEscrow;
