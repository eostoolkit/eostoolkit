// ##############################
// // // RegularForms view styles
// #############################

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { tooltip } from "assets/jss/material-dashboard-pro-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/customCheckboxRadioSwitch.jsx";

const regularFormsStyle = {
  ...customCheckboxRadioSwitch,
  formTooltip: {
    ...tooltip,
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  staticFormGroup: {
    marginLeft: "0",
    marginRight: "0",
    paddingBottom: "10px",
    margin: "8px 0 0 0",
    position: "relative",
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  },
  staticFormControl: {
    marginBottom: "0",
    paddingTop: "8px",
    paddingBottom: "8px",
    minHeight: "34px"
  }
};

export default regularFormsStyle;
