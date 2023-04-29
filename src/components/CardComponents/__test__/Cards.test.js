import { render, fireEvent, screen } from "@testing-library/react";
import {
  AnalyticsCard,
  MiniProfileCard,
  UserDashboardCard2,
} from "../UsersCards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  MemoryRouter,
} from "react-router-dom";
import {
  ArrowUpIcon,
  TotalUsersIcon,
} from "../../IconComponent/AdminDashboardIcons";
import { Fragment } from "react";

// Prevents errors related to using the Link component outside of a Router.
// This allows to test the CustomBtn component in isolation without having to set up a full Router for each test.
const RouteGuard = ({ test }) => {
  return <Router>{test}</Router>;
};

describe("AnalyticsCard", () => {
  const props = {
    ResponsiveWidth: "col-12 col-lg-4",
    BigIcon: <TotalUsersIcon />,
    SmallIcon: <ArrowUpIcon />,
    text: "Pageviews",
    value: "4,569",
    link: "/analytics/pageviews",
    change: "10%",
  };

  it("renders a link with the correct props", async () => {
    render(<RouteGuard test={<AnalyticsCard {...props} />} />);

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/analytics/pageviews");
  });

  it("renders the props correctly", () => {
    render(<RouteGuard test={<AnalyticsCard {...props} />} />);

    expect(screen.getByText("Pageviews")).toBeInTheDocument();
    expect(screen.getByText("4,569")).toBeInTheDocument();
    expect(screen.getByText("10% than last week")).toBeInTheDocument();
  });

  // it('changes URL when link is clicked', () => {
  //   let  testNavigate = jest.fn();
  //   const TestComponent = () => {
  //     testNavigate = useNavigate();
  //     console.log('TestComponent rendered');
  //     console.log('testNavigate:', testNavigate);
  //     return <AnalyticsCard {...props} />;
  //   };
  //   render(
  //     <Router>
  //       <Routes>
  //         <Route path="*" element={<TestComponent />} />
  //       </Routes>
  //     </Router>
  //   );

  //   const link = screen.getByRole('link');
  //   fireEvent.click(link);
  //   expect(testNavigate).toHaveBeenCalledWith('/analytics/pageviews');
  // });
});

describe("UserDashboardCard2", () => {
  const props = {
    text: "Test Text",
    icon: <div>Test Icon</div>,
    link: "/test-link",
  };

  it("renders a link with the correct href", async () => {
    render(<RouteGuard test={<UserDashboardCard2 {...props} />} />);

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/test-link");
  });

  it("renders the text prop", async () => {
    render(<RouteGuard test={<UserDashboardCard2 {...props} />} />);

    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("renders the icon prop", async () => {
    render(<RouteGuard test={<UserDashboardCard2 {...props} />} />);

    expect(screen.getByText("Test Icon")).toBeInTheDocument();
  });
});

describe("MiniProfileCard", () => {
  it("renders without errors", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("displays the user's name", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    expect(screen.getByText("Olasunkanmi Idris")).toBeInTheDocument();
  });
  it("displays the user's phone number", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    expect(screen.getByText("+234 801 234 5678")).toBeInTheDocument();
  });
  it("displays the user's email address", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    expect(screen.getByText("sunkanmidris@gmail.com")).toBeInTheDocument();
  });
  it("displays the number of completed deals", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    expect(screen.getByText("100 deals completed")).toBeInTheDocument();
  });
  it("renders the user's rating with a clickable icon", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    const ratingIcons = screen.getAllByTestId("rating-icon");
    
    expect(ratingIcons.length).toBe(5);
  });
  
  it("displays the 'Edit Profile' button", () => {
    render(<RouteGuard test={<MiniProfileCard />} />);
    expect(
      screen.getByRole("button", { name: /edit profile/i })
    ).toBeInTheDocument();
  });
  it("navigates to the correct page when the 'Edit Profile' button is clicked", () => {
    render(
      <MemoryRouter>
        <MiniProfileCard />
        <Routes>
          <Route path="../updateprofile">
            <Fragment data-testid="updateprofile-page" />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const editProfileButton = screen.getByRole("button", {
      name: /edit profile/i,
    });
    fireEvent.click(editProfileButton);
    expect(screen.getByTestId("updateprofile-page")).toBeInTheDocument();
  });
});
