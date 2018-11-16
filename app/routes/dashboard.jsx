// Primary components
import CreateAccount from 'components/Features/CreateAccountForm';
import CreateProxy from 'components/Features/CreateProxyForm';
import ResignProxy from 'components/Features/ResignProxyForm';
import SetProxy from 'components/Features/SetProxyForm';
import RamForm from 'components/Features/RamForm';
import StakeForm from 'components/Features/StakeForm';
import Refund from 'components/Features/RefundForm';
import Transfer from 'components/Features/TransferForm';
import SimplePermissions from 'components/Features/SimplePermissionsForm';
import ComplexPermissions from 'components/Features/ComplexPermissionsForm';
import LinkAuth from 'components/Features/LinkAuthForm';
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

// MULTISIG - OFFLINE SIGN
import MultisigCreate from 'components/Features/Multisig/Create';
import MultisigSign from 'components/Features/Multisig/Sign';
import MultisigPush from 'components/Features/Multisig/Push';

// containers
import Network from 'containers/Network';
import SearchAccount from 'containers/SearchAccount';

// Pages
import GovernancePage from 'components/Pages/GovernancePage';
import FeaturesPage from 'components/Pages/FeaturesPage';

// external Features
import ProxyTable from 'containers/ProxyInfo';
import HorusPay from 'containers/HorusPay';
import Karma from 'containers/Karma';
import Referendum from 'containers/Referendum';
import Grandpa from 'containers/Grandpa';

// @material-ui/icons
import {
  Dashboard,
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
  VpnKey,
  Games,
  Feedback,
  Extension
} from '@material-ui/icons';
import HorusIcon from 'components/Icons/Horus';
import KarmaIcon from 'components/Icons/Karma';

const dashRoutes = [
  { hide: true, path: '/networks', name: 'Network', component: Network },
  {
    path: '/home',
    name: 'Features',
    icon: Dashboard,
    component: FeaturesPage,
  },
  {
    path: '/community/forum/vote',
    name: 'Referendum',
    icon: Feedback,
    component: Referendum,
  },
  {
    path: '/donate',
    name: 'Donate',
    icon: Favorite,
    component: Donate,
  },
  {
    path: '/governance',
    name: 'Governance',
    icon: AccountBalance,
    component: GovernancePage,
  },
  {
    collapse: true,
    path: '/dapps',
    name: 'Dapps',
    state: 'openDapps',
    icon: Extension,
    views: [
      {
        path: '/dapps/karma',
        name: 'KARMA',
        mini: 'K',
        component: Karma,
      },
      {
        path: '/dapps/horuspay',
        name: 'HorusPay',
        mini: 'HP',
        component: HorusPay,
      },
      {
        path: '/dapps/grandpacoins',
        name: 'GrandpaCoins',
        mini: 'GC',
        component: Grandpa,
      },
    ]
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
        name: 'Manage Stake',
        mini: 'MS',
        component: StakeForm,
      },
      {
        path: '/account/ram',
        name: 'Manage RAM',
        mini: 'MR',
        component: RamForm,
      },
      {
        path: '/account/permissions',
        name: 'Manage Permissions',
        mini: 'P',
        component: SimplePermissions,
      },
      {
        path: '/account/advanced',
        name: 'Advanced Permissions',
        mini: 'AP',
        component: ComplexPermissions,
      },
      {
        path: '/account/linkauth',
        name: 'Link Auth',
        mini: 'LA',
        component: LinkAuth,
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
        path: '/vote/proxies',
        name: 'Proxy Information',
        mini: 'PI',
        component: ProxyTable,
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
        path: '/community/bidname',
        name: 'Premium Names',
        mini: 'PN',
        component: BidName,
      },
    ],
  },
  {
    collapse: true,
    path: '/multisig',
    name: 'Multisig Transactions',
    state: 'openMultisig',
    icon: VpnKey,
    views: [
      {
        path: '/multisig/create',
        name: 'Create Transaction',
        mini: 'CT',
        component: MultisigCreate,
      },
      {
        path: '/multisig/sign',
        name: 'Sign Transaction',
        mini: 'ST',
        component: MultisigSign,
      },
      {
        path: '/multisig/push',
        name: 'Push Transaction',
        mini: 'PT',
        component: MultisigPush,
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
  { redirect: true, path: '/', pathTo: '/home', name: 'Home' },
  { redirect: true, path: '/account/buyram', pathTo: '/account/ram', name: 'Buy RAM' },
  { redirect: true, path: '/account/sellram', pathTo: '/account/ram', name: 'Sell RAM' },
  { redirect: true, path: '/karma', pathTo: '/dapps/karma', name: 'Karma' },
  { redirect: true, path: '/horuspay', pathTo: '/dapps/horuspay', name: 'HorusPay' },
  { redirect: true, path: '/grandpacoins', pathTo: '/dapps/grandpacoins', name: 'Grandpa' },
];
export default dashRoutes;
