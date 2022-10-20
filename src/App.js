import { LearnMoreCard, NotificationCard } from "./components/CardComponents/InfoCards";
import { AllUsersCard, AnalyticsNewUsersCard, MiniProfileCard, MiniUsersCard, TotalUsersCard, UserProfileCard, UserTransactionsCard } from "./components/CardComponents/UsersCards";

function App() {
  return (
    <div>
      <AnalyticsNewUsersCard /> 
      <TotalUsersCard />  
      <MiniProfileCard />
      <LearnMoreCard />
      <NotificationCard />
      <UserProfileCard />
      <UserTransactionsCard />
      <AllUsersCard />
      <MiniUsersCard />
    </div>
  );
}

export default App;
