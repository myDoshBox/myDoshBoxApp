import { NeutralViewTransactionCard } from "../../../components/CardComponents/NeutralCards";

export const NeutralViewTransaction = () => {
  return (
    <section className="row">
      {/* <div className="col-3">
        <NeutralsSideNav />
      </div> */}
      <div className="col-9">
        <NeutralViewTransactionCard />
      </div>
    </section>
  );
};
