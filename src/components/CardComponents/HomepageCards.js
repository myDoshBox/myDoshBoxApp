import { Container } from "react-bootstrap";

// WhyChooseUsCard
export const WhyChooseUsCard = () => {
  // const { icon, title, text } = props;

  return (
    <Container>
      <div className="row">
        <div className="w-25 d-flex flex-column align-items-center">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_511_2998)">
              <path
                d="M27.2832 5.02591C27.169 5.01415 27.0539 5.01415 26.9398 5.02591H3.4847C3.33437 5.02823 3.18504 5.05077 3.04073 5.09293L15.1452 17.1472L27.2832 5.02591Z"
                fill="#006747"
              />
              <path
                d="M28.5232 6.19043L16.3265 18.3368C16.0126 18.6488 15.588 18.824 15.1454 18.824C14.7028 18.824 14.2782 18.6488 13.9643 18.3368L1.87655 6.28257C1.83939 6.41915 1.81969 6.55989 1.81792 6.70142V23.455C1.81792 23.8994 1.99443 24.3255 2.30862 24.6397C2.62281 24.9539 3.04894 25.1304 3.49328 25.1304H26.9483C27.3927 25.1304 27.8188 24.9539 28.133 24.6397C28.4472 24.3255 28.6237 23.8994 28.6237 23.455V6.70142C28.617 6.52689 28.5831 6.35448 28.5232 6.19043ZM4.6409 23.455H3.47652V22.2571L9.56646 16.2175L10.7476 17.3986L4.6409 23.455ZM26.9316 23.455H25.7588L19.6521 17.3986L20.8333 16.2175L26.9232 22.2571L26.9316 23.455Z"
                fill="#006747"
              />
            </g>
            <defs>
              <clipPath id="clip0_511_2998">
                <rect
                  width="30.1565"
                  height="30.1565"
                  fill="white"
                  transform="translate(0.201111)"
                />
              </clipPath>
            </defs>
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
