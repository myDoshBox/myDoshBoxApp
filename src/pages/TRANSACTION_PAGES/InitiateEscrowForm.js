import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import CustomBtn from "../../components/ButtonsComponent/GenandAuthBtn";
import { UserDashboardNavbar } from "../../components/NavbarComponents/TopNavbars";

const InitiateEscrow = () => {
  return (
    <>
      <div className="contestPage">
        <div className="row">
          <div className="col-lg-3 col-sm-12"></div>

          <div className="col-lg-9 col-sm-12">
            <UserDashboardNavbar />
            <div className="mt-5">
              <InitiateEscrowForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InitiateEscrowForm = () => {
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
    <div className="px-lg-5">
      <Form
        onSubmit={handleSubmit}
        className="w-100 mt-5 shadow InitiateEscrow p-3 p-lg-5 rounded"
      >
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
          <small className="small-text text-danger fst-italic fw-lighter">
            *This field is required
          </small>
          <span className="escrow-form-error ms-3">
            {formErrors.phoneNumber}
          </span>
        </Form.Group>

        <Form.Group className="mb-3">
          <label className="">What type of transaction are you making?</label>
          <div className="d-flex">
            <div className="d-flex justify-content-between border border-1 rounded-1 px-2 pt-2 pb-1 me-3 EscrowChoice">
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
            <div className="d-flex justify-content-between border border-1 rounded-1 px-2 pt-2 pb-1 EscrowChoice">
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
          <small className="small-text text-danger fst-italic fw-lighter">
            *This field is required
          </small>
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
              <small className="small-text text-danger fst-italic fw-lighter">
                *This field is required
              </small>
            </Form.Group>
            <div className="form-group mb-3">
              <label for="category">Category</label>
              <select
                className="form-select escrow-dropdown-field border"
                id="category"
                placeholder="Pick your product category"
              >
                <option
                  className="escrow-dropdown-field"
                  value="Jewelry and Ornaments"
                >
                  Jewelry and Ornaments
                </option>
                <option
                  className="escrow-dropdown-field"
                  value="Food and Nutrition"
                >
                  Food and Nutrition
                </option>
                <option
                  className="escrow-dropdown-field"
                  value="Clothing and Textiles"
                >
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
              <div className="input-group">
                <input
                  className="form-control escrow-price-field"
                  aria-label="price in Naira"
                  type="number"
                  placeholder="Enter the amount the product costs"
                  id="price"
                  name="price"
                  value={transaction.price}
                  onChange={handleChange}
                />
                <span className="input-group-text ngn2">₦</span>
              </div>
              <small className="small-text text-danger fst-italic fw-lighter">
                *There is a 5% service charge on each transaction
              </small>
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
                as="textarea"
                rows={3}
                placeholder="Enter product description"
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
                <small className="d-block small-text text-danger fst-italic fw-lighter">
                  *Service charge included
                </small>
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
                placeholder="Enter service name"
              />
              <small className="small-text text-danger fst-italic fw-lighter">
                *This field is required
              </small>
            </Form.Group>
            <Form.Group className="form-group mb-3">
              <label for="category">Category</label>
              <select
                className="form-select escrow-dropdown-field border"
                id="category"
                placeholder="Pick your service category"
              >
                <option className="escrow-dropdown-field" value="web design">
                  web design
                </option>
                <option className="escrow-dropdown-field" value="hair styling">
                  hair styling
                </option>
                <option
                  className="escrow-dropdown-field"
                  value="Catering and event planning"
                >
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
                  onChange={handleChange}
                />
                <span className="input-group-text ngn2">₦</span>
              </div>
              <small className="small-text text-danger fst-italic fw-lighter">
                *There is a 5% service charge on each transaction
              </small>
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
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter service description"
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
            <Form.Group className="form-group mb-3">
              <label for="from">Service Timeline</label>
              <div className="row">
                <div className="col-6 input-group w-50">
                  <label for="from" className="input-group-text">
                    From
                  </label>
                  <input
                    type="date"
                    className="form-control escrow-input-field date-input-field"
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
                    className="form-control escrow-input-field date-input-field"
                    id="to"
                    placeholder="To"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="my-4 d-flex align-items-end text-end flex-column">
              <div>
                <label for="total" className="me-3">
                  Total
                </label>
                <span
                  id="total"
                  name="total"
                  value={transaction.total}
                  onChange={handleChange}
                  className="ngn btn rounded-1"
                >
                  ₦ {transaction.total}
                </span>
              </div>
              <div>
                <small className="d-block small-text text-danger fst-italic fw-lighter">
                  *Service charge included
                </small>
              </div>
            </Form.Group>
          </>
        )}
        <div className="d-flex justify-content-center">
            <CustomBtn
            to="../../userdashboard"
              value="Cancel"
              styles="GeneralBtnStyle1 btn all-btn text-white me-3 pale-red"
            />
            <CustomBtn
            to="../transactionsummary"
              value="Proceed"
              styles="GeneralBtnStyle1 btn all-btn text-white"
            />
        </div>
      </Form>
    </div>
  );
};

export default InitiateEscrow;
