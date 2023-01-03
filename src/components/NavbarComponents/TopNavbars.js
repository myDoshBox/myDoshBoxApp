import { Nav, Navbar, Container, Form } from "react-bootstrap";
import logo from "../../images/doshbox Navlogo.png";
import logo2 from "../../images/doshlogolight.jpg";
import image from "../../images/Image.jpg";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { Link, Outlet } from "react-router-dom";
import { useRef } from "react";

export const GuestNavbar = () => {
	const disappearEl = useRef(null);
	const handleDisappear = () => {
		disappearEl.style.display = "none";
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary guest-nav sticky-top bg-white mb-5">
				<button
					className="navbar-toggler hamburgerIcon"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<Link to="/">
					<img src={logo} alt="logo" className="my-auto navbar-brand" />
				</Link>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div
						className="navbar-nav ms-auto nav-text"
						id="navnav"
						ref={disappearEl}>
						<Link
							to="/"
							className="nav-link nav-links"
							onClick={handleDisappear}>
							Home
						</Link>
						<Link
							to="/aboutus"
							className="nav-link nav-links"
							onClick={handleDisappear}>
							About Us
						</Link>
						<Link
							to="/pricingpage"
							className="nav-link nav-links"
							onClick={handleDisappear}>
							Pricing
						</Link>
						<Link
							to="/faqs"
							className="nav-link nav-links"
							onClick={handleDisappear}>
							FAQs
						</Link>
						<Link
							to="/contactus"
							className="nav-link nav-links"
							onClick={handleDisappear}>
							Contact Us
						</Link>
						<Link
							to="/"
							className="nav-links nav-btn"
							onClick={handleDisappear}>
							<GeneralBtn
								text={"Sign Up"}
								styles={"GeneralBtnStyle1 btn all-btn text-white"}
							/>
						</Link>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export const UserDashboardNavbar = () => {
	return (
		<Container>
			<Nav className="justify-content-end userDashboardNav" activeKey="/home">
				<Nav.Item className=" mx-md-5 mt-2">
					<Form className="searchField">
						<Form.Control
							type="text"
							placeholder="search"
							className="search border-1 rounded-4 "
						/>
					</Form>
				</Nav.Item>
				<Nav.Item className="d-flex ms-md-5">
					<div>
						<span className="d-block text-end">John Doe</span>
						<span className="d-block text-end">Admin</span>
					</div>
					<div className="mt-1 ms-2">
						<img src={image} alt="" />
					</div>
				</Nav.Item>
			</Nav>
		</Container>
	);
};
