// ResolveConflictButton
// BuyerStatement
// SellersStatement
// BuyersFault
// SellersFault
// InitiateDisputeButton
// DropConflict
// InvolveNeutrals
// Submit
import { Button } from "react-bootstrap";

// ResolveConflictButton
export const ResolveConflictButton = () => {
  return (
    <Button className=" ResolveBtn border-0 mt-5">Resolve Conflict</Button>
  );
};

// BuyerStatement
export const BuyersStatementButton = () => {
  return (
    <Button className="BuyersStatementBtn border-0 mt-5 ms-3">
      Buyers Statement
    </Button>
  );
};

// SellersStatement
export const SellersStatementButton = () => {
  return (
    <Button className="SellersStatementBtn border-0 mt-5 ms-3">
      Sellers Statement
    </Button>
  );
};

// BuyersFault
export const BuyersFaultButton = () => {
  return (
    <Button className="BuyersFaultBtn border-0 mt-5 ms-3">Buyers Fault</Button>
  );
};

// SellersFault
export const SellersFaultButton = () => {
  return (
    <Button className="BuyersFaultBtn border-0 mt-5 ms-3">Sellers Fault</Button>
  );
};
// InitiateDisputeButton
export const InitiateDisputeButton = () => {
  return (
    <Button className="InitiateDisputeBtn border-0 mt-5 ms-3">
      Initiate Dispute
    </Button>
  );
};

// DropConflict
export const DropConflictButton = () => {
  return (
    <Button className="DropConflictBtn border-0 mt-5 ms-3">
      Drop Conflict
    </Button>
  );
};

// InvolveNeutrals
export const InvolveNeutralsButton = () => {
  return (
    <Button className="DropConflictBtn border-0 mt-5 ms-3">
      Involve Neutrals
    </Button>
  );
};

// Submit
export const SubmitButton = () => {
  return <Button className="SubmitBtn border-0 mt-5 ms-3">Submit</Button>;
};
