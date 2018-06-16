import Dashboard from "layouts/Dashboard.jsx";
import NotFoundPage from "containers/NotFoundPage/Loadable.js"

var indexRoutes = [
  { path: "/", name: "Home", component: Dashboard },
  { path: "", name: "Notfound", component: NotFoundPage }
];

export default indexRoutes;
