/**
 *
 * Asynchronously loads the component for BuyRamBytes
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
