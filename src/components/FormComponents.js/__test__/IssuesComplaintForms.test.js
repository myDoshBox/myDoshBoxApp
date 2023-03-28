import { render, screen, waitFor } from "@testing-library/react";
import { Reportissuesform } from "../IssuesComplaintForms";
import user from "@testing-library/user-event";

const getDefectName = () => {
  return;
  screen.getByRole("textbox", {
    name: /defect name/i,
  });
};
const defectdescribtion = () => {
  return;
  screen.getByRole("textbox", {
    name: /defect name/i,
  });
};

// const buttonClick = () => {
//   return;
//   screen.getByRole("button", { name: /send report/i });
// };

it("onSubmit is called when field pass validation ", () => {
  user.type(getDefectName(), "bruno");
});

it("onSubmit is called fwhen field pass validation ", () => {
  user.type(defectdescribtion(), "bruno");
});

// it("onClick of the button ", () => {
//   user.click(buttonClick(), "bruno");
// });
