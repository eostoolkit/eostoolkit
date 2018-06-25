/**
 *
 * Asynchronously loads the component for CreateProxy
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
