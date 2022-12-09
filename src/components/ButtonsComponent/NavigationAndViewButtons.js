import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

export const ScrollUpButton = () => {
	return (
		<>
			<Button className="ScrollUpBtnStyle" variant="">
				<Icon icon="akar-icons:arrow-up" color="black" width="24" />
			</Button>
		</>
	);
};

export const PreviousButton = () => {
	return (
		<Button className="GeneralBtnStyle1 border-0">
			<span className="">
				<Icon
					className=""
					icon="ic:outline-arrow-back-ios"
					color="white"
					width="15"
				/>
				Prev
			</span>
		</Button>
	);
};

export const NextButton = () => {
	return (
		<Button className="GeneralBtnStyle1 border-0">
			<span className="ms-1">
				Next
				<svg
					width="20"
					height="12"
					viewBox="0 0 15 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="ms-2 mb-1">
					<path
						d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"
						fill="white"
					/>
				</svg>
			</span>
		</Button>
	);
};

export const BackButton = () => {
	return (
		<Button className="GeneralBtnStyle1 border-0">
			<span className="BackBtnStyle">
				<Icon
					className="mx-2"
					icon="eva:arrow-circle-left-outline"
					color="white"
					width="20"
				/>
				Back
			</span>
		</Button>
	);
};

export const LearnMoreButton = () => {
	return <Button className="GeneralBtnStyle1 border-0">Learn More</Button>;
};

export const ViewMoreButton = () => {
	return <Button className="GeneralBtnStyle1 border-0">View More</Button>;
};

// ViewDetailsButton
export const ViewDetailsButton = () => {
  return (
    <Button className="ViewComplaintBtnStyle border-0 mt-5 ms-3">
      View Details
    </Button>
  );
};

export const ViewComplaintButton = () => {
	return <Button className="GeneralBtnStyle1 border-0">View Complaint</Button>;
};
