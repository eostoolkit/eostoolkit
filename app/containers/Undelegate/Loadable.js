/**
 *
 * Asynchronously loads the component for Undelegate
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
