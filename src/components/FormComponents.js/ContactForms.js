import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Icon } from "@iconify/react";
import { SubmitButton } from "../ButtonsComponent/ConflictButtons";

//ContactUsForm
export const ContactUsForm = () => {
	const [contactUs, setcontactUs] = useState({
		name: "",
		email: "",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setcontactUs({ ...contactUs, [name]: value });
	};

	return (
		<Container className="">
			<Form>
				<h4>Send us a message</h4>

				<Form.Group className="my-3">
					<div className="row ">
						<div className="col-12 col-md-8 col-lg-6 align-items-center">
							<Form.Control
								type="text"
								placeholder="Name"
								id="name"
								name="name"
								value={contactUs.name}
								onChange={handleChange}
								className="contactInputFormStyle labelStyle mb-1"
							/>
						</div>
					</div>
				</Form.Group>

				<Form.Group className="my-3 ">
					<div className="row ">
						<div className="col-12 col-md-8 col-lg-6 align-items-center">
							<Form.Control
								type="email"
								placeholder="Email"
								id="email"
								name="email"
								value={contactUs.email}
								onChange={handleChange}
								className="contactInputFormStyle labelStyle mb-1"
							/>
						</div>
					</div>
				</Form.Group>

				<Form.Group className="my-3">
					<div className="row ">
						<div className="col-12 col-md-8 col-lg-6 align-items-center">
							<FloatingLabel
								className="labelStyle"
								controlId="floatingTextarea2"
								label="Enter your message">
								<Form.Control
									className="textAreaStyle contactInputFormStyle"
									as="textarea"
									placeholder="Enter your message"
									style={{ height: "100px" }}
								/>
							</FloatingLabel>
						</div>
					</div>
				</Form.Group>

				<Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
					<Form.Check
						className="checkboxStyle"
						type="checkbox"
						label="I accept the Terms of Sevice"
					/>
				</Form.Group>

				<div className="mt-1">
					<SubmitButton />
				</div>
			</Form>
		</Container>
	);
};
