// Internationalization
import React from 'react';
import { FormattedMessage } from 'react-intl';

// Primary components
import Home from 'containers/HomePage/Loadable';
import CreateAccount from 'containers/CreateAccount/Loadable';
import CreateProxy from 'containers/CreateProxy/Loadable';
import SetProxy from 'containers/SetProxy/Loadable';
import BuyRam from 'containers/BuyRam/Loadable';
import SellRam from 'containers/SellRam/Loadable';
import Delegate from 'containers/Delegate/Loadable';
import Undelegate from 'containers/Undelegate/Loadable';
import Transfer from 'containers/Transfer/Loadable';
import Governance from 'containers/Governance/Loadable';
import SearchAccount from 'containers/SearchAccount/Loadable';
import SimplePermissions from 'containers/SimplePermissions/Loadable';
import ClaimRewards from 'containers/ClaimRewards/Loadable';
import Refund from 'containers/Refund/Loadable';
import BidName from 'containers/BidName/Loadable';
import ForumPost from 'containers/ForumPost/Loadable';
import Blockone from 'containers/Blockone/Loadable';
// @material-ui/icons
import {
  AccountBalance,
  Search,
  PersonAdd,
  AssignmentInd,
  AssignmentTurnedIn,
  Payment,
  DeveloperBoard,
  Gavel,
  Forum,
  Favorite,
} from '@material-ui/icons';

// Messages
import messages from './messages';

const dashRoutes = [
  {
    path: '/home',
    name: <FormattedMessage {...messages.support} />,
    icon: Favorite,
    component: Blockone,
  },
  {
    path: '/governance',
    name: <FormattedMessage {...messages.governance} />,
    icon: AccountBalance,
    component: Governance,
  },
  {
    path: '/search',
    name: <FormattedMessage {...messages.search} />,
    icon: Search,
    component: SearchAccount,
  },
  {
    path: '/create',
    name: <FormattedMessage {...messages.create} />,
    icon: PersonAdd,
    component: CreateAccount,
  },
  {
    path: '/transfer',
    name: <FormattedMessage {...messages.transfer} />,
    icon: Payment,
    component: Transfer,
  },
  {
    collapse: true,
    path: '/account',
    name: <FormattedMessage {...messages.manage} />,
    state: 'openAccount',
    icon: AssignmentInd,
    views: [
      {
        path: '/account/delegate',
        name: <FormattedMessage {...messages.manageDelegate} />,
        mini: 'DG',
        component: Delegate,
      },
      {
        path: '/account/undelegate',
        name: <FormattedMessage {...messages.manageUndelegate} />,
        mini: 'UN',
        component: Undelegate,
      },
      {
        path: '/account/buyram',
        name: <FormattedMessage {...messages.manageBuyram} />,
        mini: 'BR',
        component: BuyRam,
      },
      {
        path: '/account/sellram',
        name: <FormattedMessage {...messages.manageSellram} />,
        mini: 'SR',
        component: SellRam,
      },
      {
        path: '/account/refund',
        name: <FormattedMessage {...messages.manageRefund} />,
        mini: 'R',
        component: Refund,
      },
      {
        path: '/account/permissions',
        name: <FormattedMessage {...messages.managePermissions} />,
        mini: 'P',
        component: SimplePermissions,
      },
    ],
  },
  {
    collapse: true,
    path: '/vote',
    name: <FormattedMessage {...messages.voting} />,
    state: 'openVote',
    icon: AssignmentTurnedIn,
    views: [
      {
        path: '/vote/pick',
        name: <FormattedMessage {...messages.votingProducer} />,
        mini: 'V',
        component: Home,
      },
      {
        path: '/vote/beproxy',
        name: <FormattedMessage {...messages.votingAssignProxy} />,
        mini: 'BP',
        component: CreateProxy,
      },
      {
        path: '/vote/setproxy',
        name: <FormattedMessage {...messages.votingSetProxy} />,
        mini: 'SP',
        component: SetProxy,
      },
    ],
  },
  {
    path: '/forumpost',
    name: <FormattedMessage {...messages.forumPost} />,
    icon: Forum,
    component: ForumPost,
  },
  {
    path: '/bidname',
    name: <FormattedMessage {...messages.bidName} />,
    icon: Gavel,
    component: BidName,
  },
  {
    collapse: true,
    path: '/block-producer',
    name: <FormattedMessage {...messages.producer} />,
    state: 'openBlockProducer',
    icon: DeveloperBoard,
    views: [
      {
        path: '/block-producer/claim-rewards',
        name: <FormattedMessage {...messages.producerClaim} />,
        mini: 'C',
        component: ClaimRewards,
      },
    ],
  },
  { redirect: true, path: '/account/buybytes', pathTo: '/account/buyram', name: 'Buy Ram (bytes)' },
  { redirect: true, path: '/', pathTo: '/home', name: 'Home' },
];
export default dashRoutes;
