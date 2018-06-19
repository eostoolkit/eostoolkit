/**
 *
 * Asynchronously loads the component for CreateAccount
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
