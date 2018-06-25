/**
 *
 * Asynchronously loads the component for VoteUs
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
