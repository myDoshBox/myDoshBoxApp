import { memo } from "react";
import {
  FinancialReport,
  LineSparkline,
} from "../components/CardComponents/Analytics";
import {
  AnalyticsCard,
  MiniUsersCard,
} from "../components/CardComponents/UsersCards";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CompletedTransactionIcon,
  TotalUsersIcon,
  OpenTicketsIcon,
  ClosedTicketsIcon,
} from "../components/IconComponent/AdminDashboardIcons";
import { UserDashboardNavbar } from "../components/NavbarComponents/TopNavbars";
import { MiniTicketsHistory } from "../components/TableComponents/TicketTable";
import { AdminRecentTransactionsCard } from "../components/TableComponents/TransactionTable";
import { TopCustomers } from "./UsersPage";

const AdminDashboard = memo(() => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-12 px-0"></div>

      <div className="col-lg-9 col-sm-12">
        <div className="mt-3 pe-lg-5">
          <UserDashboardNavbar />
        </div>
        <div className="mx-auto w-100 px-3 pe-lg-5 ps-lg-0 my-5">
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <AnalyticsCard
              value="1000"
              text="New Users"
              BigIcon={<TotalUsersIcon />}
              SmallIcon={<ArrowUpIcon />}
              percentChange="15% More"
              ResponsiveWidth={`col-md-4`}
            />
            <AnalyticsCard
              value="300"
              text="Completed Transactions"
              BigIcon={<CompletedTransactionIcon />}
              SmallIcon={<ArrowUpIcon />}
              percentChange="5% More"
              ResponsiveWidth={`col-md-4`}
            />
            <AnalyticsCard
              value="500,000"
              text="Total Profits"
              BigIcon={<LineSparkline />}
              SmallIcon={<ArrowDownIcon />}
              percentChange="5% Less"
              ResponsiveWidth={`col-md-4`}
            />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <FinancialReport style={`col-md-6`} />
            <MiniUsersCard style={`col-md-6`} />
          </div>
          <div className="row gx-md-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <AnalyticsCard
              value="100"
              text="Open Conflicts"
              BigIcon={<OpenTicketsIcon />}
              ResponsiveWidth={`col-md-6`}
            />
            <AnalyticsCard
              value="350"
              text="Closed Conflicts"
              BigIcon={<ClosedTicketsIcon />}
              ResponsiveWidth={`col-md-6`}
            />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <MiniTicketsHistory style={`col-md-6`} />
            <AdminRecentTransactionsCard style={`col-md-6`} />
          </div>
          <TopCustomers />
        </div>
      </div>
    </div>
  );
});

export default AdminDashboard;

// Tests

// AnalyticsCard:
// Test that the component renders correctly with the given props (value, text, BigIcon, SmallIcon, and percentChange).
// Test that the component correctly displays the percentage change as either a positive or negative change.
// Test that the component handles invalid or missing props gracefully.
// FinancialReport:
// Test that the component renders correctly and displays the financial report data as expected.
// Test that the component handles empty or missing data gracefully.
// All Users:
// Test that the component renders correctly and displays the list of users as expected.
// Test that the component handles empty or missing data gracefully.
// Open Conflicts and Closed Conflicts:
// Test that the components render correctly and display the correct number of open or closed conflicts respectively.
// Test that the components handle empty or missing data gracefully.
// Tickets History:
// Test that the component renders correctly and displays the ticket history data as expected.
// Test that the component handles empty or missing data gracefully.
// Recent Transactions:
// Test that the component renders correctly and displays the recent transactions data as expected.
// Test that the component handles empty or missing data gracefully.
// Top Customer:
// Test that the component renders correctly and displays the top customer data as expected.
// Test that the component handles empty or missing data gracefully.

// COMPONENT TEST
// Render test - Ensure that the component can be rendered without any errors.

// Props test - Ensure that the component handles different types of props correctly, including valid and invalid props.

// State test - If the component has internal state, ensure that it updates as expected when specific events occur.

// Event test - If the component contains interactive elements, such as buttons or links, ensure that the corresponding events are triggered when clicked or hovered over.

// Snapshot test - If the component generates a snapshot or renders a specific output based on certain input, ensure that the output matches the expected result.

// Accessibility test - Ensure that the component meets accessibility standards, such as providing descriptive labels for form inputs or ensuring that interactive elements are keyboard accessible.

// Performance test - Measure the performance of the component, including its load time and rendering time, to ensure that it meets performance requirements.

// Edge case test - Test the component with extreme or unexpected inputs to ensure that it can handle unexpected scenarios gracefully.

// As an admin dashboard created in React, you should test the following:

// Unit tests for individual components - You can test each component separately to ensure that it works as expected. This helps to catch errors early and ensure that each component performs as intended.

// Integration tests for combined components - You can test how each component works together in the admin dashboard. This ensures that the overall behavior of the dashboard is as intended.

// End-to-end tests for the entire dashboard - You can test the entire admin dashboard to ensure that all features and functionality work as expected. This can be done using automation tools like Cypress or Selenium.

// Performance tests - You can also perform load and stress tests to check how the dashboard performs under different user loads and stress levels. This helps to identify performance bottlenecks and areas for improvement.

// Security tests - You can also perform security tests to identify vulnerabilities in the admin dashboard and ensure that it is secure from external threats.
