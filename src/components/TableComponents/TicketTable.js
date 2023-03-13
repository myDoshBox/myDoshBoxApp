import { memo } from "react";
import { useState } from "react";
import ticketsData from "../../data/TicketData.json";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { Link } from "react-router-dom";

// AdminDashbordTicketHistoryCard
export const MiniTicketsHistory = memo(({ style }) => {
  console.count("MiniTicketsHistory: ");
  const [max, setMax] = useState(5);
  return (
    <div className={`${style} mb-3 mb-md-0`}>
      <div className={`card p-3 shadow rounded border-0 h-100`}>
        <h6 className="pb-3 m-0">Tickets History</h6>
        <table className="table m-0 h-100">
          <thead>
            <tr>
              <th scope="col" className="opacity-50">
                Ticket Id
              </th>
              <th scope="col" className="opacity-50">
                Date Issued
              </th>
              <th scope="col" className="opacity-50">
                Date Resolved
              </th>
            </tr>
          </thead>
          <tbody className="h-100">
            {Object.entries(ticketsData)
              .slice(0, max)
              .map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td className="text-center text-small">{value[0].id}</td>
                    <td className="text-center text-small">
                      {value[0].date_issued}
                    </td>
                    <td className="text-center text-small">
                      {value[0].date_resolved}
                    </td>
                  </tr>
                );
              })}
            <Link
              to={"/tickets-history"}
              className="d-flex justify-content-center pt-3 text-decoration-none w-100"
              style={{ whiteSpace: "nowrap" }}
            >
              <GeneralBtn
                text="View More"
                styles="GeneralBtnStyle1 btn all-btn text-white"
                link={"tickets-history"}
              />
            </Link>
          </tbody>
        </table>
      </div>
    </div>
  );
});
