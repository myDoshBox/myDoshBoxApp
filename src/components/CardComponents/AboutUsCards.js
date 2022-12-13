import { Container } from "react-bootstrap";
import cardImage from "../../images/aboutusPix.png";
import cardImage2 from "../../images/aboutusPix2.png";

// CoreValueCard
export const CoreValueCard = (props) => {
	const { title, subtitle, description } = props;
	return (
		// <Container className="p-5">
		<Container>
			<div className="row">
				<div className="coreValueStyle">
					<h3 className="">{title}</h3>
					<h5>{subtitle}</h5>
					<p>{description}</p>
				</div>
			</div>
		</Container>
	);
};

// TeamsCard
export const TeamsCard = (props) => {
	const { images, description, name, job_description } = props;
	return (
		<Container className="row my-5 ms-5 ">
			<div className="d-flex col-sm-12 col-md-12 col-lg-10 justify-content-between teamValueStyle p-5">
				<div className="mt-2  col-lg-5 col-md-5 col-sm-12">
					<img
						src={images}
						alt="aboutPix image"
						className="aboutImagePix resizeStyle d-block mx-lg-auto "
					/>
					<p className="col-sm-10 mt-3 d-flex d-lg-none .d-xl-block d-md-none .d-lg-block">
						{description}
					</p>
					<p className="d-lg-none .d-xl-block d-md-none .d-lg-block">
						<b>{name}</b>
					</p>
					<p className="d-lg-none .d-xl-block mx-5 ms-5 d-md-none .d-lg-block">
						{job_description}
					</p>
				</div>

				<div className="my-5 ms-5 smallScreen">
					<p className="col-sm-2 col-md-8 col-lg-12 smallScreen">
						{description}
					</p>
					<div className="d-flex justify-content-end me-5">
						<p>
							<b>{name}</b>
						</p>
					</div>
					<p className="d-flex justify-content-end mx-5">{job_description}</p>
				</div>
			</div>
		</Container>
	);
};

// TeamsCard
export const TeamsCardTwo = () => {
	return (
		<Container className="row my-5 ms-5 ">
			<div className="d-flex col-xs-12 col-sm-12 col-md-12 col-lg-10 justify-content-between teamValueStyle2 p-5">
				<div className="mt-2 col-lg-5 col-md-5 col-sm-12">
					<img
						src={cardImage2}
						alt="aboutPix image"
						className="aboutImagePix resizeStyle d-block mx-lg-auto "
					/>
					<p className="col-sm-10 mt-3 d-flex d-lg-none .d-xl-block smallHide d-md-none .d-lg-block">
						Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices ma uris. Maecenas
						vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
					</p>
					<p className="d-lg-none .d-xl-block d-md-none .d-lg-block">
						<b>Edwards Tope</b>
					</p>
					<p className="d-lg-none .d-xl-block mx-5 ms-5 d-md-none .d-lg-block">
						CEO
					</p>
				</div>

				<div className="my-5 ms-5 smallScreen">
					<p className="col-sm-2 col-md-8 col-lg-12 smallScreen">
						Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices ma uris. Maecenas
						vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
					</p>
					<div className="d-flex justify-content-end me-5">
						<p>
							<b>Edwards Tope</b>
						</p>
					</div>
					<p className="d-flex justify-content-end mx-5">CEO</p>
				</div>
			</div>
		</Container>
	);
};

export const NewTeamCard = (props) => {
	const { images, description, name, job_description } = props;
	return (
		<div className="card mb-3">
			<div className="row g-0 d-flex justify-content-center align-items-center">
				<div className="col-md-4 col-sm-12">
					<img
						src={cardImage}
						className="img-fluid rounded-start w-100"
						alt={name}
					/>
				</div>
				<div className="col-md-8 col-sm-12">
					<div className="card-body">
						<p className="card-text">{description}</p>
						<h5 className="card-title">{name}</h5>
						<p className="card-text">
							<small className="text-muted">{job_description}</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
