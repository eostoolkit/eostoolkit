/**
 *
 * Asynchronously loads the component for Tokens
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
