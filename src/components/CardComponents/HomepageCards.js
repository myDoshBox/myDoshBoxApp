import { Container } from "react-bootstrap";

// WhyChooseUsCard
export const WhyChooseUsCard = () => {
  // const { icon, title, text } = props;

  return (
    <Container>
      <div className="row">
        <div className="w-25 d-flex flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#006747"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <h5 className="why-choose-us-card-head text-center mt-3">
            UNLIMITED EMAIL ADDRESSES
          </h5>
          <p className="text-center why-choose-us-card-text ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            a.
          </p>
        </div>
      </div>
    </Container>
  );
};

// ContactUsCard
