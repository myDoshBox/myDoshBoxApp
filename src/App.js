import { SignInForm } from "./components/FormComponents.js/AuthenticationForms";
import { SignUpIndividualForm } from "./components/FormComponents.js/AuthenticationForms";
import { SignUpOrganizationForm } from "./components/FormComponents.js/AuthenticationForms";
import { ContactUsForm } from "./components/FormComponents.js/ContactForms";

function App() {
  return (
    <div>
      <SignInForm />
      <SignUpIndividualForm />
      <SignUpOrganizationForm />
      <ContactUsForm />
      {/* <BankTransferForm /> */}
    </div>
  );
}

export default App;
