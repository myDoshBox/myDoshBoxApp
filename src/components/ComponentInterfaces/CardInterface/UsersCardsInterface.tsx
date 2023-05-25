import { RelativeRoutingType } from "react-router-dom";

export interface AnalyticsCardProps {
  ResponsiveWidth: string;
  BigIcon: string;
  SmallIcon: string;
  text: string;
  value: string;
  link: string;
  change: string;
}
export interface UserDashboardCardProps {
  text: string;
  icon: string;
  link: string;
  relative?: RelativeRoutingType | undefined;
}
export interface UserDashboardCard2Props {
  text: string;
  icon: string;
  link: string;
}
