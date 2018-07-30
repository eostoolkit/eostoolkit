// Primary containers
import CreateAccount from 'containers/CreateAccount/Loadable';
import CreateProxy from 'containers/CreateProxy/Loadable';
import ResignProxy from 'containers/ResignProxy/Loadable';
import SetProxy from 'containers/SetProxy/Loadable';
import BuyRam from 'containers/BuyRam/Loadable';
import SellRam from 'containers/SellRam/Loadable';
import Delegate from 'containers/Delegate/Loadable';
import Undelegate from 'containers/Undelegate/Loadable';
import Transfer from 'containers/Transfer/Loadable';
import SearchAccount from 'containers/SearchAccount/Loadable';
import SimplePermissions from 'containers/SimplePermissions/Loadable';
import ClaimRewards from 'containers/ClaimRewards/Loadable';
import BidName from 'containers/BidName/Loadable';
import ForumPost from 'containers/ForumPost/Loadable';
import Airgrab from 'containers/Airgrab/Loadable';
import Donate from 'components/Features/DonateForm';
import Network from 'containers/Network/Loadable';

// Primary components
import GovernancePage from 'components/Pages/GovernancePage/Loadable';

// @material-ui/icons
import {
  AccountBalance,
  Search,
  PersonAdd,
  AssignmentInd,
  AssignmentTurnedIn,
  Payment,
  DeveloperBoard,
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
    component: GovernancePage,
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
        path: '/account/permissions',
        name: 'Manage Permissions',
        mini: 'P',
        component: SimplePermissions,
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
        path: '/vote/setproxy',
        name: 'Set Proxy',
        mini: 'SP',
        component: SetProxy,
      },
      {
        path: '/vote/createproxy',
        name: 'Create Proxy',
        mini: 'CP',
        component: CreateProxy,
      },
      {
        path: '/vote/resignproxy',
        name: 'Resign Proxy',
        mini: 'RP',
        component: ResignProxy,
      },
    ],
  },
  {
    collapse: true,
    path: '/community',
    name: 'Community Features',
    state: 'openCommunity',
    icon: Forum,
    views: [
      {
        path: '/community/forumpost',
        name: 'Eosio Forum Post',
        mini: 'FP',
        component: ForumPost,
      },
      {
        path: '/community/bidname',
        name: 'Premium Names',
        mini: 'PN',
        component: BidName,
      },
    ],
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
        name: 'Claim Rewards',
        mini: 'CR',
        component: ClaimRewards,
      },
    ],
  },
  { redirect: true, path: '/vote/beproxy', pathTo: '/vote/createproxy', name: 'Create Proxy' },
  //{ redirect: true, path: '/bidname', pathTo: '/community/bidname', name: 'Bid Names' },
  { redirect: true, path: '/forumpost', pathTo: '/community/forumpost', name: 'Forum Post' },
  { redirect: true, path: '/account/buybytes', pathTo: '/account/buyram', name: 'Buy Ram (bytes)' },
  { redirect: true, path: '/', pathTo: '/home', name: 'Home' },
];
export default dashRoutes;
