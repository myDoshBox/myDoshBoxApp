import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { TicketCards } from "../../components/CardComponents/TicketCard";
import TicketData from "../../data/TicketData.json";

export const GeneratedTicket = () => {
  return (
    <section className="d-flex">
      {/* side Bar Section Starts */}
      <div>
        <UserSidenav />
      </div>
      {/* side Bar Section Ends*/}
      <div className="align-self-center mx-auto p-4">
        {TicketData.Ticket1.map((ticket) => {
          return (
            <div key={ticket.id}>
              <TicketCards {...ticket} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
