// Primary components
import Home from "containers/HomePage/Loadable.js";
import Scatter from "containers/Scatter/Loadable.js";
import CreateAccount from "containers/CreateAccount/Loadable.js";
import CreateProxy from "containers/CreateProxy/Loadable.js";
import SetProxy from "containers/SetProxy/Loadable.js";
import BuyRam from "containers/BuyRam/Loadable.js";
import BuyRamBytes from "containers/BuyRamBytes/Loadable.js";
import SellRam from "containers/SellRam/Loadable.js";
import Delegate from "containers/Delegate/Loadable.js";
import Undelegate from "containers/Undelegate/Loadable.js";
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
        component: Delegate
      },
      {
        path: "/account/undelegate",
        name: "Undelegate (Unstake)",
        mini: "UN",
        component: Undelegate
      },
      {
        path: "/account/buyram",
        name: "Buy Ram (EOS)",
        mini: "BR",
        component: BuyRam
      },
      {
        path: "/account/buybytes",
        name: "Buy Ram (bytes)",
        mini: "BR",
        component: BuyRamBytes
      },
      {
        path: "/account/sellram",
        name: "Sell Ram (bytes)",
        mini: "SR",
        component: SellRam
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
        component: CreateProxy
      },
      {
        path: "/vote/setproxy",
        name: "Set Proxy",
        mini: "SP",
        component: SetProxy
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
