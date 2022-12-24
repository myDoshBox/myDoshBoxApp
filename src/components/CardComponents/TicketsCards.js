import { EditTicketButton } from "../ButtonsComponent/EditButtons";
import { ProceedButton } from "../ButtonsComponent/TransactionButtons";
import {
  ViewMoreButton,
  ViewDetailsButton,
  BackButton,
} from "../ButtonsComponent/NavigationAndViewButtons";
// import { ViewMoreButton } from "../ButtonsComponent/NavigationAndViewButtons";
import {
  ResendProductButton,
  ContestComplaintButton,
} from "../ButtonsComponent/EditButtons";
import { Table, Card, Container } from "react-bootstrap";

// TicketCard
export const TicketCard = () => {
  return (
    <div
      className="card shadow rounded-3 border-0 p-4"
      style={{ width: "55rem" }}
    >
      <h3 className="text-center mt-5">TICKET No.19234</h3>
      <div className="d-flex justify-content-evenly m-5  ">
        <div className="">
          <h5 className="my-3">FULL NAME :</h5>
          <h5 className="my-3">E-MAIL ADDRESS : </h5>
          <h5 className="my-3">PHONE NUMBER : </h5>
          <h5 className="my-3">TRANSACTION ID : </h5>
          <h5 className="my-3">COMPLAINT TYPE : </h5>
        </div>

        <div className="me-5 my-3 ">
          <p className="">OPEYEMI ADNREWSON</p>
          <p className="">opeyemiandrewson@gmail.com</p>
          <p className=""> 08123456789</p>
          <p className="">4rsGDrb4rP3</p>
          <p className=""> Incomplete Items</p>
        </div>
      </div>

      <div className=" ms-5">
        <h5 className="">FURTHER INFORMATION:</h5>
        <p className="pb-5">
          Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod interdum
          sodales eget maecenas sem. Ultrices a donec urna semper ante. Eget
          aliquet enim elit lorem hac feugiat. Eu convallis at amet pretium
          vestibulum et ultr
        </p>
      </div>
      <div className="d-flex justify-content-between  ">
        <EditTicketButton />
        <ProceedButton />
      </div>
    </div>
  );
};

// SellerTicketSummaryCard
export const SellerTicketSummaryCard = () => {
  return (
    <div
      className="card shadow rounded-3 border-0 p-5"
      style={{ width: "55rem" }}
    >
      <h3 className="text-center mt-5">TICKET No.19234</h3>
      <div className="d-flex justify-content-evenly m-5 ">
        <div className="">
          <h5 className="my-3">FULL NAME :</h5>
          <h5 className="my-3">TRANSACTION ID : </h5>
          <h5 className="my-3">COMPLAINT TYPE : </h5>
        </div>

        <div className="me-5 my-3 ">
          <p className="">OPEYEMI ADNREWSON</p>
          <p className="">4rsGDrb4rP3</p>
          <p className=""> Incomplete Items</p>
        </div>
      </div>

      <div className="ms-5 ">
        <h5 className="">FURTHER INFORMATION:</h5>
        <p className="pb-5">
          Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod interdum
          sodales eget maecenas sem. Ultrices a donec urna semper ante. Eget
          aliquet enim elit lorem hac feugiat. Eu convallis at amet pretium
          vestibulum et ultr
        </p>
      </div>
      <div className="d-flex justify-content-between  ">
        <ResendProductButton />
        <ContestComplaintButton />
      </div>
    </div>
  );
};

// ContestTicketCard
export const ContestTicketCard = () => {
  return (
    <div
      className="card shadow rounded-3 border-0 p-5"
      style={{ width: "55rem" }}
    >
      <h3 className="text-center mt-5">CONTEST No.19234</h3>
      <div className="d-flex justify-content-evenly m-5 ">
        <div className="smStyle">
          <h5 className="my-3">FULL NAME :</h5>
          <h5 className="my-3">TRANSACTION ID : </h5>
          <h5 className="my-3">COMPLAINT TYPE : </h5>
        </div>

        <div className="me-5 my-3 ">
          <p className="">OPEYEMI ADNREWSON</p>
          <p className="">4rsGDrb4rP3</p>
          <p className=""> Incomplete Items</p>
        </div>
      </div>

      <div className="ms-5 ">
        <h5 className="">FURTHER INFORMATION:</h5>
        <p className="pb-5">
          Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod interdum
          sodales eget maecenas sem. Ultrices a donec urna semper ante. Eget
          aliquet enim elit lorem hac feugiat. Eu convallis at amet pretium
          vestibulum et ultr
        </p>
      </div>
      <div className="d-flex justify-content-between  ">
        <EditTicketButton />
        <ProceedButton />
      </div>
    </div>
  );
};

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
              Status: <span>Ongoing</span>{" "}
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
