// Primary components
import Home from "containers/HomePage/Loadable.js";
import Scatter from "containers/Scatter/Loadable.js";
import CreateAccount from "containers/CreateAccount/Loadable.js";

// @material-ui/icons
import {
  AccountBalance,
  Search,
  PersonAdd,
  AssignmentInd,
  AssignmentTurnedIn,
  Payment,
  VpnKey,
} from "@material-ui/icons";

var dashRoutes = [
  {
    path: "/home",
    name: "Governance",
    icon: AccountBalance,
    component: Home
  },
  {
    path: "/search",
    name: "Find Accounts",
    icon: Search,
    component: Home
  },
  {
    path: "/create",
    name: "Create Account",
    icon: PersonAdd,
    component: CreateAccount
  },
  {
    path: "/transfer",
    name: "Transfer EOS",
    icon: Payment,
    component: Home
  },
  {
    collapse: true,
    path: "/account",
    name: "Manage Account",
    state: "openAccount",
    icon: AssignmentInd,
    views: [
      {
        path: "/account/delegate",
        name: "Delegate (Stake)",
        mini: "DG",
        component: Home
      },
      {
        path: "/account/undelegate",
        name: "Undelegate (Unstake)",
        mini: "UN",
        component: Home
      },
      {
        path: "/account/ram",
        name: "Manage Ram",
        mini: "R",
        component: Home
      },
      {
        path: "/account/permissions",
        name: "Manage Permissions",
        mini: "P",
        component: Home
      },
    ]
  },
  {
    collapse: true,
    path: "/vote",
    name: "Manage Voting",
    state: "openVote",
    icon: AssignmentTurnedIn,
    views: [
      {
        path: "/vote/pick",
        name: "Vote",
        mini: "V",
        component: Home
      },
      {
        path: "/vote/beproxy",
        name: "Become Proxy",
        mini: "BP",
        component: Home
      },
      {
        path: "/vote/setproxy",
        name: "Set Proxy",
        mini: "SP",
        component: Home
      },
    ]
  },

  // {
  //   collapse: true,
  //   path: "-page",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: Image,
  //   views: pages
  // },
  // {
  //   collapse: true,
  //   path: "/forms",
  //   name: "Forms",
  //   state: "openForms",
  //   icon: ContentPaste,
  //   views: [
  //     {
  //       path: "/forms/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms
  //     },
  //     {
  //       path: "/forms/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms
  //     },
  //     {
  //       path: "/forms/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms
  //     },
  //     { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: GridOn,
  //   views: [
  //     {
  //       path: "/tables/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables
  //     },
  //     {
  //       path: "/tables/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables
  //     },
  //     {
  //       path: "/tables/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: Place,
  //   views: [
  //     {
  //       path: "/maps/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps
  //     },
  //     {
  //       path: "/maps/full-screen-maps",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap
  //     },
  //     {
  //       path: "/maps/vector-maps",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap
  //     }
  //   ]
  // },
  // { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  // { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  // { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
