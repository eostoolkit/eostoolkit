/**
 *
 * Asynchronously loads the component for Scatter
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Connector'),
  loading: () => null,
});
