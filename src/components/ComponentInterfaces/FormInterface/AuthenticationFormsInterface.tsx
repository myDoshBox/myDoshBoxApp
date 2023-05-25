// imporSt { ReactNode } from "react";

export interface personProps {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  checked: boolean;
}
export interface personDetailsProps {
  personDetails: string;
}
export interface passwordToggleProps {
  passwordToggle: boolean;
}
export interface passwordToggle1Props {
  passwordToggle1: boolean;
}
export interface submissionProps {
  submission: boolean;
}
export interface errorsProps {
  confirmPassword: string;
  password: string;
  checked: boolean;
  email: string;
  phoneNumber: number;
  //   errors: {};
}
