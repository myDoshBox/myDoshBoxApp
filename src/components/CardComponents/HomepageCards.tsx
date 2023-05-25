import React from "react";
import {
  WhyChooseUsCardProps,
  OurProcessFlowProps,
} from "../ComponentInterfaces/CardInterface/HomepageCardsInterface";

// WhyChooseUsCard
export const WhyChooseUsCard = (props: WhyChooseUsCardProps) => {
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

export const OurProcessFlow = ({ image, title }: OurProcessFlowProps) => {
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
