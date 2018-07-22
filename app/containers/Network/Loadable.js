/**
 *
 * Asynchronously loads the component for Airgrab
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
