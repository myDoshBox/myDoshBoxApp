import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import { app } from "./firebase";
import { useLazyCreateIndividualGoogleQuery } from "../../redux/slices/userSlices/allUsersAPISlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCredentials } from "../../redux/slices/userSlices/allUsersAuthSlice";

const OAuth = () => {
  const initialValues = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    checked: false,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.usersauth);

  useEffect(() => {
    if (userInfo) {
      navigate("/userdashboard");
    }
  }, [navigate, userInfo]);

  const [googlesignup, { isLoading }] = useLazyCreateIndividualGoogleQuery();

  const handleGoogleSubmit = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const gooagleAuthDetails = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        console.log(result?.user?.phoneNumber);
        // console.log(result?.user?.displayName);
        // console.log(result?.user?.email);
        // console.log(result?.user?.emailVerified);
        // console.log(result?.user?.photoURL);
        // console.log(result?.user?.refreshToken);
        // console.log((await result?.user?.getIdTokenResult()).token);

        const postDataInfo = {
          email: result?.user?.email,
          phone_number: result?.user?.phoneNumber,
        };

        console.log({ ...postDataInfo });

        const res = await googlesignup({ ...postDataInfo }).unwrap();
        console.log(res);
        try {
          if (res?.status === "true") {
            // isLoading ? <p>Verifying.......</p> : navigate("/userdashboard");
            dispatch(setCredentials({ ...res }));
            navigate("/userdashboard");
            toast.success(res?.message);
          } else {
            toast.error(res?.data?.message); // Display error to the user
          }
        } catch (err) {
          // Log the error and display an appropriate message
          console.log(err);

          toast.error(err?.data?.message);
        }
      };

      gooagleAuthDetails();
      // async function signUpWithGoogle() {
      //   const result = await signInWithPopup(auth, provider);
      //   console.log(result?.user?.displayName);
      // }

      //       name,
      // email,
      // email_verified,
      // picture,
      // sub,

      // signUpWithGoogle();
      // signUpWithGoogle().then((les) => {
      //   console.log("les: ", les);
      // });
      // const postDataInfo =JSON.stringify({name: })

      // const res = await googleauth({})
      // signUpWithGoogle();
      // console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Button
        className="btn btn-outline-success bg-light text-dark"
        onClick={handleGoogleSubmit}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.5138 25.1038H52.5V25H30V35H44.1288C42.0675 40.8213 36.5288 45 30 45C21.7163 45 15 38.2837 15 30C15 21.7163 21.7163 15 30 15C33.8238 15 37.3025 16.4425 39.9513 18.7987L47.0225 11.7275C42.5575 7.56625 36.585 5 30 5C16.1937 5 5 16.1937 5 30C5 43.8063 16.1937 55 30 55C43.8063 55 55 43.8063 55 30C55 28.3238 54.8275 26.6875 54.5138 25.1038Z"
            fill="#FFC107"
          />
          <path
            d="M7.88257 18.3637L16.0963 24.3875C18.3188 18.885 23.7013 15 30.0001 15C33.8238 15 37.3026 16.4425 39.9513 18.7987L47.0226 11.7275C42.5576 7.56625 36.5851 5 30.0001 5C20.3976 5 12.0701 10.4212 7.88257 18.3637Z"
            fill="#FF3D00"
          />
          <path
            d="M29.9999 55C36.4574 55 42.3249 52.5288 46.7612 48.51L39.0237 41.9625C36.4293 43.9355 33.2592 45.0026 29.9999 45C23.4974 45 17.9762 40.8538 15.8962 35.0675L7.74365 41.3488C11.8812 49.445 20.2837 55 29.9999 55Z"
            fill="#4CAF50"
          />
          <path
            d="M54.5138 25.1038H52.5V25H30V35H44.1288C43.1428 37.7705 41.3667 40.1915 39.02 41.9637L39.0237 41.9613L46.7613 48.5087C46.2138 49.0062 55 42.5 55 30C55 28.3238 54.8275 26.6875 54.5138 25.1038Z"
            fill="#1976D2"
          />
        </svg>
        <span className="ms-2">Continue with Google</span>
      </Button>
    </div>
  );
};

export default OAuth;
