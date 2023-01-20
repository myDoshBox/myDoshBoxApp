import React from "react";
import { Link } from "react-router-dom";
import { ScrollUpIcon } from "./IconComponent/NavigationAndViewIcon";
import FooterLogo from "../images/FooterLogo.jpg";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "./IconComponent/SocialMediaIcons";
import { SubscribeForm } from "../components/FormComponents.js/ContactForms";
import { useRef, useState } from "react";

const TextDecoration = {
  textDecoration: "none",
};
export const Footer = () => {
  const disappearEl = useRef(null);

  const handleDisappear = () => {
    disappearEl.style.display = "none";
  };

  return <></>;
};
