import React from "react";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { Cancel } from "../IconComponent/NeutralsDashboardIcons";
import { Link } from "react-router-dom";
import {
  GeneratedTicketCardProps,
  OtherTicketProps,
} from "../ComponentInterfaces/CardInterface/TicketCardInterface";

// For Generated Ticket Card
export const GeneratedTicketCard = (props: GeneratedTicketCardProps) => {
  const {
    tell,
    transaction_id,
    compliant_type,
    Img,
    Img1,
    Img2,
    Img3,
    Futher_info,
    btn1,
    btn2,
    btn3,
    link1,
    link2,
    link3,
  } = props;
  return (
    <section>
      <div>
        <div className="card border-0 shadow">
          <div className="card-body p-4">
            <span className="d-flex justify-content-end">
              <Link to={"../../userdashboard"}>
                <GeneralBtn lefticon={<Cancel />} />
              </Link>
            </span>
            <h5 className="card-title text-center">TICKET No.19234</h5>
            <table className="mt-4">
              <tr>
                <td className="fw-bold">PHONE NUMBER :</td>
                <td className="text-muted p-2">{tell}</td>
              </tr>
              <tr>
                <td className="fw-bold">TRANSACTION ID :</td>
                <td className="text-muted p-2">{transaction_id}</td>
              </tr>
              <tr>
                <td className="fw-bold">COMPLAINT TYPE :</td>
                <td className="text-muted p-2">{compliant_type}</td>
              </tr>
            </table>
            {/* Image Collapse section starts */}
            <div>
              <div className="mt-2 mx-auto">
                <span className="d-flex">
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    data-bs-target="#collapseExample"
                  >
                    <img src={Img} alt="" />
                  </a>

                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                    data-bs-target="#collapseExample1"
                  >
                    <img src={Img} alt="" />
                  </a>
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample2"
                    data-bs-target="#collapseExample2"
                  >
                    <img src={Img} alt="" />
                  </a>
                </span>
              </div>
              <span className="d-flex mb-3">
                <div
                  className="collapse collapse-horizontal"
                  id="collapseExample"
                >
                  <div className="w-75 d-flex">
                    <img src={Img1} className="" alt="" />
                  </div>
                </div>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseExample1"
                >
                  <div className="w-75 d-flex">
                    <img src={Img2} className="" alt="" />
                  </div>
                </div>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseExample2"
                >
                  <div className="w-75 d-flex">
                    <img src={Img3} className="" alt="" />
                  </div>
                </div>
              </span>
            </div>
            {/* Image Collapse section Ends */}
            <div className="mb-4">
              <h5>FURTHER INFORMATION: </h5>
              <p>{Futher_info}</p>
            </div>
            <div className="mb-3 d-flex justify-content-md-evenly flex-column flex-md-row">
              <Link to={link1} className="mx-auto mb-2">
                <GeneralBtn
                  text={btn1}
                  styles=" GeneralBtnStyle1 btn all-btn text-white rounded-1 px-3"
                  link={""}
                  lefticon={""}
                  righticon={""}
                  onclick={undefined}
                />
              </Link>
              <Link to={link2} className="mx-auto mb-2">
                <GeneralBtn
                  text={btn2}
                  styles=" GeneralBtnStyle1 btn all-btn text-white rounded-1 px-4"
                  link={""}
                  lefticon={""}
                  righticon={""}
                  onclick={undefined}
                />
              </Link>
              <Link to={link3} className="mx-auto mb-2">
                <GeneralBtn
                  text={btn3}
                  styles=" GeneralBtnStyle1 btn all-btn text-white rounded-1 bg-danger px-4"
                  link={""}
                  lefticon={""}
                  righticon={""}
                  onclick={undefined}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// For | SellerResolveCoflictNotification |SellersGeneratedContestTicket
export const OtherTicket = (props: OtherTicketProps) => {
  const {
    full_name,
    transaction_id,
    compliant_type,
    Img,
    Img1,
    Img2,
    Img3,
    Futher_info,
    btn1,
    btn2,
  } = props;
  return (
    <section>
      <div>
        <div className="card border-0 shadow" style={{ width: "40rem" }}>
          <div className="card-body p-4">
            <span className="d-flex justify-content-end">
              <GeneralBtn lefticon={<Cancel />} />
            </span>
            <h5 className="card-title text-center">TICKET No.19234</h5>
            <table className="mt-4">
              <tr>
                <td className="fw-bold">Full Name :</td>
                <td className="text-muted p-2">{full_name}</td>
              </tr>

              <tr>
                <td className="fw-bold">TRANSACTION ID :</td>
                <td className="text-muted p-2">{transaction_id}</td>
              </tr>
              <tr>
                <td className="fw-bold">COMPLAINT TYPE :</td>
                <td className="text-muted p-2">{compliant_type}</td>
              </tr>
            </table>
            {/* Image Collapse section starts */}
            <div>
              <div className="mt-2 mx-auto">
                <span className="d-flex">
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    data-bs-target="#collapseExample"
                  >
                    <img src={Img} alt="" />
                  </a>

                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                    data-bs-target="#collapseExample1"
                  >
                    <img src={Img} alt="" />
                  </a>
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample2"
                    data-bs-target="#collapseExample2"
                  >
                    <img src={Img} alt="" />
                  </a>
                </span>
              </div>
              <span className="d-flex mb-3">
                <div
                  className="collapse collapse-horizontal"
                  id="collapseExample"
                >
                  <div className="w-75 d-flex">
                    <img src={Img1} className="" alt="" />
                  </div>
                </div>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseExample1"
                >
                  <div className="w-75 d-flex">
                    <img src={Img2} className="" alt="" />
                  </div>
                </div>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseExample2"
                >
                  <div className="w-75 d-flex">
                    <img src={Img3} className="" alt="" />
                  </div>
                </div>
              </span>
            </div>
            {/* Image Collapse section Ends */}
            <div className="mb-4">
              <h5>FURTHER INFORMATION: </h5>
              <p>{Futher_info}</p>
            </div>
            <div className="mb-3 d-flex justify-content-evenly">
              <GeneralBtn
                text={btn1}
                styles=" GeneralBtnStyle1 btn all-btn text-white rounded-1"
                link={""}
                lefticon={""}
                righticon={""}
                onclick={undefined}
              />
              <GeneralBtn
                text={btn2}
                styles=" GeneralBtnStyle1 btn all-btn text-white rounded-1"
                link={""}
                lefticon={""}
                righticon={""}
                onclick={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
