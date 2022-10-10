import {
  SignInForm,
  SignUpOrganizationForm,
  SignUpIndividualForm,
} from "./components/FormComponents.js/AuthenticationForms";
import { ContactUsForm } from "./components/FormComponents.js/ContactForms";
import { ContactUsCard } from "./components/CardComponents/ContactAndInfoCards";

function App() {
  return (
    <div>
      <ContactUsForm />
      <ContactUsCard />
    </div>
  );
}

export default App;
