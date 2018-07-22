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
import Airgrab from 'containers/Airgrab/Loadable';
import Donate from 'containers/Donate/Loadable';
import Network from 'containers/Network/Loadable';
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
  CloudDownload,
  Settings,
} from '@material-ui/icons';

const dashRoutes = [
  {
    path: '/home',
    name: 'Support',
    icon: Favorite,
    component: Donate,
  },
  {
    path: '/networks',
    name: 'Network',
    icon: Settings,
    component: Network,
    hide: true,
  },
  {
    path: '/governance',
    name: 'Governance',
    icon: AccountBalance,
    component: Governance,
  },
  {
    path: '/airgrab',
    name: 'Airgrab Tokens',
    icon: CloudDownload,
    component: Airgrab,
  },
  {
    path: '/search',
    name: 'Find Accounts',
    icon: Search,
    component: SearchAccount,
  },
  {
    path: '/create',
    name: 'Create Account',
    icon: PersonAdd,
    component: CreateAccount,
  },
  {
    path: '/transfer',
    name: 'Transfer Tokens',
    icon: Payment,
    component: Transfer,
  },
  {
    collapse: true,
    path: '/account',
    name: 'Manage Account',
    state: 'openAccount',
    icon: AssignmentInd,
    views: [
      {
        path: '/account/delegate',
        name: 'Delegate (Stake)',
        mini: 'DG',
        component: Delegate,
      },
      {
        path: '/account/undelegate',
        name: 'Undelegate (Unstake)',
        mini: 'UN',
        component: Undelegate,
      },
      {
        path: '/account/buyram',
        name: 'Buy Ram (EOS)',
        mini: 'BR',
        component: BuyRam,
      },
      {
        path: '/account/sellram',
        name: 'Sell Ram (bytes)',
        mini: 'SR',
        component: SellRam,
      },
      {
        path: '/account/refund',
        name: 'Refund',
        mini: 'R',
        component: Refund,
      },
      {
        path: '/account/permissions',
        name: 'Manage Permissions',
        mini: 'P',
        component: SimplePermissions,
      },
    ],
  },
  {
    collapse: true,
    path: '/vote',
    name: 'Manage Voting',
    state: 'openVote',
    icon: AssignmentTurnedIn,
    views: [
      {
        path: '/vote/pick',
        name: 'Vote',
        mini: 'V',
        component: Home,
      },
      {
        path: '/vote/beproxy',
        name: 'Become Proxy',
        mini: 'BP',
        component: CreateProxy,
      },
      {
        path: '/vote/setproxy',
        name: 'Set Proxy',
        mini: 'SP',
        component: SetProxy,
      },
    ],
  },
  {
    path: '/forumpost',
    name: 'Eosio Forum Post',
    icon: Forum,
    component: ForumPost,
  },
  {
    path: '/bidname',
    name: 'Premium Names',
    icon: Gavel,
    component: BidName,
  },
  {
    collapse: true,
    path: '/block-producer',
    name: 'Block Producer',
    state: 'openBlockProducer',
    icon: DeveloperBoard,
    views: [
      {
        path: '/block-producer/claim-rewards',
        name: 'Claim Producer Rewards',
        mini: 'C',
        component: ClaimRewards,
      },
    ],
  },
  { redirect: true, path: '/account/buybytes', pathTo: '/account/buyram', name: 'Buy Ram (bytes)' },
  { redirect: true, path: '/', pathTo: '/home', name: 'Home' },
];
export default dashRoutes;
