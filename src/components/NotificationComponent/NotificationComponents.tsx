// the text and design(design|text) used for this component includes:
// completed|Completed, canceled|Canceled, refunded|Refunded, dispute|In Dispute, pending-confirmation|Pending Confirmation, awaiting|Awaiting Delivery, pending-payment|Pending Payment, resolved|Resolved, unresolved|Unresolved

export const Notifications = ({ text, styles }) => {
  return <div className={`text-center d-flex justify-content-center align-items-center rounded-pill ${styles}`}>{text}</div>;
};


// the code below shows how to use the component above
// <Notifications
// 	text="Pending Confirmation"
// 	styles="pending-confirmation"
// />;
