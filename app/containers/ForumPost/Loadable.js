/**
 *
 * Asynchronously loads the component for ForumPost
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
