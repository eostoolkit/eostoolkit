/**
 *
 * Asynchronously loads the component for ClaimRewards
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
