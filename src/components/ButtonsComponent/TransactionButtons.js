import { Button } from "react-bootstrap";

export const CreateTransactionButton = () => {
	return (
		<Button className="GeneralBtnStyle1 all-btn border-0">
			<span className="ms-1">Start a Transaction</span>
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
		</Button>
	);
};

export const NewTransactionButton = () => {
	return (
		<Button className="GeneralBtnStyle1 all-btn border-0">
			New Transaction
		</Button>
	);
};

export const ProceedButton = () => {
	return (
		<Button type="submit" className="GeneralBtnStyle1 border-0 all-btn">
			PROCEED
		</Button>
	);
};

export const ConfirmDeliveryButton = () => {
	return (
		<Button className="GeneralBtnStyle2 border-0">Confirm Delivery</Button>
	);
};

export const IAgreeButton = () => {
	return <Button className="GeneralBtnStyle1 all-btn border-0">I Agree</Button>;
};

export const ConfirmButton = () => {
	return (
		<Button type="submit" className="GeneralBtnStyle2 border-0">
			Confirm
		</Button>
	);
};

export const DeliverProductButton = () => {
	return <Button className="GeneralBtnStyle2 border-0">Deliver Product</Button>;
};
