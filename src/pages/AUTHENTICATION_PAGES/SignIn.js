import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";

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
								<Icon
									className="toggleBtnStyle"
									onClick={handleShowHide}
									icon="bxs:show"
									color="gray"
									width="25"
								/>
							) : (
								<Icon
									className="toggleBtnStyle"
									onClick={handleShowHide}
									icon="bxs:hide"
									color="gray"
									width="25"
								/>
							)}
						</div>
					</div>
				</Form.Group>

				<Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
					<Form.Check
						className="checkboxStyle"
						type="checkbox"
						label="Remember information"
					/>
				</Form.Group>

				<div className="pb-3">
					<GeneralBtn
						text={`sign in`}
						styles={`GeneralBtnStyle1 btn all-btn text-white`}
					/>
				</div>
				<div className="pb-2">
					<GeneralBtn
						text={`Sign In with Google`}
						styles={`GoogleAuthBtn btn`}
					/>
				</div>
				<p className="mb-5 ms-5">Don’t have an account? Sign up</p>
			</Form>
		</Container>
	);
};
