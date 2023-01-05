import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { GeneralBtnStyle1 } from "../../components/ButtonsComponent/Button";

const EscrowAgreement = () => {
  


  return (
    <div className="d-flex w-100">
      <div className="d-none d-lg-block">
      <UserSidenav />
      </div>

      <div className="ms-lg-5 mt-5 shadow InitiateEscrow w-100 p-3 p-lg-5 ">
        <h1>Escrow Initiation Agreement</h1>
          <p>This Escrow Agreement (the "Agreement") is made and entered into on [Date] by and between [Buyer's Name] (the "Buyer") and [Seller's Name] (the "Seller"), and [Escrow Platform's Name] (the "Escrow Platform").

RECITALS
A. The Buyer desires to purchase from the Seller and the Seller desires to sell to the Buyer the following item or service (the "Item"):
[Insert description of Item, including any relevant details such as name, quantity, price, etc.]
B. The Buyer and the Seller agree to use the Escrow Platform to facilitate the transaction and hold the purchase price in escrow until the Item has been delivered and accepted by the Buyer.
-
AGREEMENT
Item and Purchase Price. The Buyer agrees to purchase the Item from the Seller for the purchase price of [Insert purchase price]. The Buyer agrees to pay the purchase price to the Escrow Platform, which will hold the funds in escrow until the Item has been delivered and accepted by the Buyer.
Delivery and Acceptance. The Seller agrees to deliver the Item to the Buyer within [Insert number] days of receiving payment from the Escrow Platform. The Buyer agrees to accept the Item upon delivery, unless the Item is not as described in the Agreement or is defective. In such cases, the Buyer may reject the Item and request a refund of the purchase price.
Refunds. If the Buyer rejects the Item or requests a refund for any other reason, the Escrow Platform will release the purchase price to the Buyer and the transaction will be considered terminated. If the Buyer does not reject the Item within [Insert number] days of delivery, the Item will be considered accepted and the Escrow Platform will release the purchase price to the Seller.
Dispute Resolution. In the event of a dispute between the Buyer and the Seller, the parties agree to work with the Escrow Platform to resolve the issue in a fair and amicable manner. If the dispute cannot be resolved through mutual agreement, the parties agree to submit to binding arbitration.
Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of [Insert state].
Entire Agreement. This Agreement constitutes the entire agreement between the parties and supersedes any prior agreements or understandings, whether written or oral. This Agreement may not be amended or modified except in writing signed by both parties.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date and year first above written.
[Buyer's signature/name]                                                                                                          [Escrow Platform's signature]</p>
        <div className="d-flex justify-content-evenly">
          <GeneralBtnStyle1 text="I Agree" />
        </div>
      </div>
    </div>
  );
};

export default EscrowAgreement;
