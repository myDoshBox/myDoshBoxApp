// WhyChooseUsCard
export const WhyChooseUsCard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="container p-2">
      <div className="pt-3">
        <img src={image} alt="" className="mx-auto" />
      </div>
      <div className="pt-4">
        <h5 className="text-center">{title}</h5>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export const OurProcessFlow = ({ image, title }) => {
  return (
    <div className="p-5">
      <div>
        <div className="pb-3">
          <img src={image} className="mx-auto" alt="..." />
        </div>
        <div className="text-center">{title}</div>
      </div>
    </div>
  );
};
