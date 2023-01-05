import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { GoogleIcon } from "../IconComponent/SocialMediaIcons";
// import { SignUpButton } from "../ButtonsComponent/AuthenticationButtons";
// import { GoogleSignInButton } from "../ButtonsComponent/AuthenticationButtons";
// import { GoogleSignUpButton } from "../ButtonsComponent/AuthenticationButtons";
// import { GuestNavSignInButton } from "../ButtonsComponent/AuthenticationButtons";
// import { SignUpIndividual } from "../ButtonsComponent/AuthenticationButtons";
// import { SignUpOrganization } from "../ButtonsComponent/AuthenticationButtons";

//SignInForm
export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [passwordToggle, setpasswordToggle] = useState(false);
  const handleShowHide = () => {
    setpasswordToggle(!passwordToggle);
  };

  return (
    <Container>
      <div className="pt-5">
        <h2>Sign In</h2>
        <p>Welcome back! Please enter your details</p>
      </div>
      <Form>
        <Form.Group className="my-3">
          <div className="">
            <div className="align-items-center">
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
                className="rounded-3  border mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="inputStyle">
            <div className="">
              <input
                className="rounded-3 border "
                style={{ width: "31.25rem", height: "3.4rem" }}
                id="password"
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {passwordToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  className="toggleBtnStyle"
                  fill="gray"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                  onClick={handleShowHide}
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  className="toggleBtnStyle"
                  fill="gray"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                  onClick={handleShowHide}
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
          <Form.Check
            className="checkboxStyle "
            type="checkbox"
            label="Remember information"
          />
        </Form.Group>

        <div className="pb-3">
          <GeneralBtn
            text={`Sign In`}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>
        <div className="pb-2 outline">
          <GeneralBtn
            text={`Sign In with Google`}
            styles={`GoogleAuthBtn btn`}
            lefticon={<GoogleIcon />}
          />
        </div>
        <p className="mb-5 ms-5">Don’t have an account? Sign up</p>
      </Form>
    </Container>
  );
};

//SignUpIndividualForm
//                   className="toggleBtnStyle"
//                   onClick={handleOrganPasswordShow}
//                   icon="bxs:show"
//                   color="gray"
//                   width="25"
//                 />
//               ) : (
//                 <Icon
//                   className="toggleBtnStyle"
//                   onClick={handleOrganPasswordShow}
//                   icon="bxs:hide"
//                   color="gray"
//                   width="25"
//                 />
//               )}
//             </div>
//           </div>
//         </Form.Group>

//         <Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
//           <Form.Check
//             className=" w-50"
//             type="checkbox"
//             label="By ticking this box you are indicating you have read and accept our terms and privacy policy."
//           />
//         </Form.Group>

//         <div className="sign-up-section">
//           {/* <div className="pb-3 mt-4 ">
//             <SignUpButton />
//           </div>
//           <div className=" pb-2 ">
//             <GoogleSignUpButton />
//           </div> */}
//           <p className="mb-5"> Already have an account? Sign in</p>
//         </div>
//       </Form>
//     </Container>
//   );
// };
