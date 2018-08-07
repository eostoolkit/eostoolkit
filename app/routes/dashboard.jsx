// Primary components
import CreateAccount from 'components/Features/CreateAccountForm';
import CreateProxy from 'components/Features/CreateProxyForm';
import ResignProxy from 'components/Features/ResignProxyForm';
import SetProxy from 'components/Features/SetProxyForm';
import BuyRam from 'components/Features/BuyRamForm';
import SellRam from 'components/Features/SellRamForm';
import Delegate from 'components/Features/DelegateForm';
import Undelegate from 'components/Features/UndelegateForm';
import Refund from 'components/Features/RefundForm';
import Transfer from 'components/Features/TransferForm';
import SimplePermissions from 'components/Features/SimplePermissionsForm';
import ClaimRewards from 'components/Features/ClaimRewardsForm';
import BidName from 'components/Features/BidNameForm';
import Airgrab from 'components/Features/AirgrabForm';
import Donate from 'components/Features/DonateForm';
import VotingTable from 'containers/NetworkProducers';
// EOSIO FORUM
import ForumStatus from 'components/Features/ForumForms/Status';
import ForumPost from 'components/Features/ForumForms/Post';
import ForumProposal from 'components/Features/ForumForms/Propose';
import ForumVote from 'components/Features/ForumForms/Vote';
// containers
import Network from 'containers/Network/Loadable';
import SearchAccount from 'containers/SearchAccount/Loadable';

// Pages
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
    path: '/account/create',
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
      {
        path: '/account/refund',
        name: 'Refund Stake',
        mini: 'RS',
        component: Refund,
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
        path: '/vote/producers',
        name: 'Vote Producers',
        mini: 'VP',
        component: VotingTable,
      },
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
        path: '/community/forum/status',
        name: 'Forum Status',
        mini: 'FS',
        component: ForumStatus,
      },
      {
        path: '/community/forum/post',
        name: 'Forum Post',
        mini: 'FP',
        component: ForumPost,
      },
      {
        path: '/community/forum/proposal',
        name: 'Forum Proposal',
        mini: 'Pr',
        component: ForumProposal,
      },
      {
        path: '/community/forum/vote',
        name: 'Forum Vote',
        mini: 'FV',
        component: ForumVote,
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
  // { redirect: true, path: '/vote/beproxy', pathTo: '/vote/createproxy', name: 'Create Proxy' },
  // { redirect: true, path: '/bidname', pathTo: '/community/bidname', name: 'Bid Names' },
  // { redirect: true, path: '/forumpost', pathTo: '/community/forumpost', name: 'Forum Post' },
  // { redirect: true, path: '/account/buybytes', pathTo: '/account/buyram', name: 'Buy Ram (bytes)' },
  // { redirect: true, path: '/create', pathTo: '/account/create', name: 'Create Account' },
  { redirect: true, path: '/', pathTo: '/home', name: 'Home' },
];
export default dashRoutes;
