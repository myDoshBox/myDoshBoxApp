import faqData from "../../data/dummyData/faqData.json";
import { GuestNavbar } from "../../components/NavbarComponents/TopNavbars";

const FAQs = () => {
	return (
		<>
			{/* <GuestNavbar /> */}
			<div className="FAQs row justify-content-center gy-5 mx-3 mt-3">
				{faqData.faqs.map((faq) => (
					<div key={faq.id} className="col-md-6 px-3">
						<h6 className="fs-6 text-white text-center py-3 mb-0 faqs-header">
							{faq.header}
						</h6>
						{faq.accordions.map((accordion) => (
							<div
								key={accordion.id}
								className="accordion accordion-flush border"
								id={`accordion-${accordion.id}`}>
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingOne">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse-${accordion.id}`}
											data-bs-parent={`#accordion-${accordion.id}`}
											aria-expanded="false"
											aria-controls={`collapse-${accordion.id}`}>
											{accordion.title}
										</button>
									</h2>
									<div
										id={`collapse-${accordion.id}`}
										className="accordion-collapse collapse"
										aria-labelledby="flush-headingOne"
										data-bs-parent={`#accordion-${accordion.id}`}>
										<div className="accordion-body">{accordion.details}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
};

export default FAQs;
