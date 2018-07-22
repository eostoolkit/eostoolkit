import Dashboard from 'layouts/Dashboard';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
const indexRoutes = [
  { path: '/', name: 'Home', component: Dashboard },
  { path: '', name: 'Notfound', component: NotFoundPage },
];

export default indexRoutes;
