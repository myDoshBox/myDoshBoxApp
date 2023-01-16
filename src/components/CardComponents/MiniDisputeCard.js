import {
  ViewDetailsButton,
  BackButton,
} from "../ButtonsComponent/NavigationAndViewButtons";

// MiniDisputeCard
export const MiniDisputeCard = () => {
  return (
    <div className="">
      <div
        className="card shadow rounded-3 border-0"
        style={{ width: "40rem" }}
      >
        <div className="d-flex justify-content-end p-3 me-5">
          <BackButton />
        </div>
        <div className="warningStyle pb-1 ms-5 ">
          <p className="">
            Notice: in the event of a dispute, the contract between the buyer
            and the seller is reviewed. MyDoshBox presents this case before a
            court of justice
          </p>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="ms-5">
            <h5 className="pb-5 mt-5">Disputes</h5>
            <p className="">Aug 3</p>
            <p className="colorTextStyle">
              TransactionID: <span className="textStyle">2376490</span>
            </p>
            <p className="colorTextStyle">
              Status: <span>Ongoing</span>
            </p>
          </div>

          <div className="d-flex align-items-end flex-column mt-auto mb-5 me-5 mt-5">
            <ViewDetailsButton />
          </div>
        </div>
      </div>
    </div>
  );
};
