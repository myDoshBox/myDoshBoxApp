import {
  SignInForm,
  SignUpOrganizationForm,
  SignUpIndividualForm,
} from "./components/FormComponents.js/AuthenticationForms";

function App() {
  return (
    <div>
      <SignInForm />

      <div className="row">
        <div className="col-12 col-lg-6">
          <SignUpIndividualForm />
        </div>
        <div className="col-12 col-lg-6">
          <SignUpOrganizationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
