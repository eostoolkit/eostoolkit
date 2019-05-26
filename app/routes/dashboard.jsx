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
import RexForm from 'components/Features/Rex';

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
import PoorSwap from 'containers/PoorSwap';
import ProxyTable from 'containers/ProxyInfo';
import HorusPay from 'containers/HorusPay';
import Karma from 'containers/Karma';
import Parsl from 'containers/Parsl';
import HireVibes from 'containers/HireVibes';
import Boid from 'containers/Boid';
import Pixeos from 'containers/Pixeos';
import OpenBRM from 'containers/OpenBRM';
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
  Extension,
  CompareArrows,
} from '@material-ui/icons';
import HorusIcon from 'components/Icons/Horus';
import KarmaIcon from 'components/Icons/Karma';

import { FormattedMessage } from 'react-intl';
import React from 'react';
import messags from './messages';

const dashRoutes = [
  { hide: true, path: '/networks', name: 'Network', component: Network },
  {
    path: '/home',
    name: <FormattedMessage {...messags.menuFeatures} />,
    icon: Dashboard,
    component: FeaturesPage,
  },
  {
    path: '/community/forum/vote',
    name: <FormattedMessage {...messags.menuReferendum} />,
    icon: Feedback,
    component: Referendum,
  },
  {
    path: '/poorswap',
    name: <FormattedMessage {...messags.menuPoorSwap} />,
    icon: CompareArrows,
    component: PoorSwap,
  },
  {
    path: '/donate',
    name: <FormattedMessage {...messags.menuDonate} />,
    icon: Favorite,
    component: Donate,
  },
  {
    path: '/governance',
    name: <FormattedMessage {...messags.menuGovernance} />,
    icon: AccountBalance,
    component: GovernancePage,
  },
  {
    collapse: true,
    path: '/dapps',
    name: <FormattedMessage {...messags.menuDapps} />,
    state: 'openDapps',
    icon: Extension,
    views: [
      {
        path: '/dapps/rex',
        name: <FormattedMessage {...messags.menuRex} />,
        mini: 'REX',
        component: RexForm,
      },
      {
        path: '/dapps/parsl',
        name: <FormattedMessage {...messags.menuPARSL} />,
        mini: 'PS',
        component: Parsl,
      },
      {
        path: '/dapps/karma',
        name: <FormattedMessage {...messags.menuKARMA} />,
        mini: 'K',
        component: Karma,
      },
      {
        path: '/dapps/hirevibes',
        name: <FormattedMessage {...messags.menuHireVibes} />,
        mini: 'HVT',
        component: HireVibes,
      },
      {
        path: '/dapps/boid',
        name: <FormattedMessage {...messags.menuBoid} />,
        mini: 'Boid',
        component: Boid,
      },
      {
        path: '/dapps/pixeos',
        name: <FormattedMessage {...messags.menuPixeos} />,
        mini: 'Pix',
        component: Pixeos,
      },
      {
        path: '/dapps/openbrm',
        name: <FormattedMessage {...messags.menuOpenBRM} />,
        mini: 'BRM',
        component: OpenBRM,
      },
      {
        path: '/dapps/horuspay',
        name: <FormattedMessage {...messags.menuHorusPay} />,
        mini: 'HP',
        component: HorusPay,
      },
      {
        path: '/dapps/grandpacoins',
        name: <FormattedMessage {...messags.menuGrandpaCoins} />,
        mini: 'GC',
        component: Grandpa,
      },
    ],
  },

  {
    path: '/airgrab',
    name: <FormattedMessage {...messags.menuAirgrabTokens} />,
    icon: CloudDownload,
    component: Airgrab,
  },
  {
    path: '/search',
    name: <FormattedMessage {...messags.menuFindAccounts} />,
    icon: Search,
    component: SearchAccount,
  },
  {
    path: '/account/create',
    name: <FormattedMessage {...messags.menuCreateAccount} />,
    icon: PersonAdd,
    component: CreateAccount,
  },
  {
    path: '/transfer',
    name: <FormattedMessage {...messags.menuTransferTokens} />,
    icon: Payment,
    component: Transfer,
  },
  {
    collapse: true,
    path: '/account',
    name: <FormattedMessage {...messags.menuManageAccount} />,
    state: 'openAccount',
    icon: AssignmentInd,
    views: [
      {
        path: '/account/delegate',
        name: <FormattedMessage {...messags.menuManageStake} />,
        mini: 'MS',
        component: StakeForm,
      },
      {
        path: '/account/ram',
        name: <FormattedMessage {...messags.menuManageRAM} />,
        mini: 'MR',
        component: RamForm,
      },
      {
        path: '/account/permissions',
        name: <FormattedMessage {...messags.menuManagePermissions} />,
        mini: 'P',
        component: SimplePermissions,
      },
      {
        path: '/account/advanced',
        name: <FormattedMessage {...messags.menuAdvancedPermissions} />,
        mini: 'AP',
        component: ComplexPermissions,
      },
      {
        path: '/account/linkauth',
        name: <FormattedMessage {...messags.menuLinkAuth} />,
        mini: 'LA',
        component: LinkAuth,
      },
      {
        path: '/account/refund',
        name: <FormattedMessage {...messags.menuRefundStake} />,
        mini: 'RS',
        component: Refund,
      },
    ],
  },
  {
    collapse: true,
    path: '/vote',
    name: <FormattedMessage {...messags.menuManageVoting} />,
    state: 'openVote',
    icon: AssignmentTurnedIn,
    views: [
      {
        path: '/vote/producers',
        name: <FormattedMessage {...messags.menuVoteProducers} />,
        mini: 'VP',
        component: VotingTable,
      },
      {
        path: '/vote/proxies',
        name: <FormattedMessage {...messags.menuProxyInformation} />,
        mini: 'PI',
        component: ProxyTable,
      },
      {
        path: '/vote/setproxy',
        name: <FormattedMessage {...messags.menuSetProxy} />,
        mini: 'SP',
        component: SetProxy,
      },
      {
        path: '/vote/createproxy',
        name: <FormattedMessage {...messags.menuCreateProxy} />,
        mini: 'CP',
        component: CreateProxy,
      },
      {
        path: '/vote/resignproxy',
        name: <FormattedMessage {...messags.menuResignProxy} />,
        mini: 'RP',
        component: ResignProxy,
      },
    ],
  },
  {
    collapse: true,
    path: '/community',
    name: <FormattedMessage {...messags.menuCommunityFeatures} />,
    state: 'openCommunity',
    icon: Forum,
    views: [
      {
        path: '/community/forum/status',
        name: <FormattedMessage {...messags.menuForumStatus} />,
        mini: 'FS',
        component: ForumStatus,
      },
      {
        path: '/community/forum/post',
        name: <FormattedMessage {...messags.menuForumPost} />,
        mini: 'FP',
        component: ForumPost,
      },
      {
        path: '/community/forum/proposal',
        name: <FormattedMessage {...messags.menuForumProposal} />,
        mini: 'Pr',
        component: ForumProposal,
      },
      {
        path: '/community/bidname',
        name: <FormattedMessage {...messags.menuPremiumNames} />,
        mini: 'PN',
        component: BidName,
      },
    ],
  },
  {
    collapse: true,
    path: '/multisig',
    name: <FormattedMessage {...messags.menuMultisigTransactions} />,
    state: 'openMultisig',
    icon: VpnKey,
    views: [
      {
        path: '/multisig/create',
        name: <FormattedMessage {...messags.menuCreateTransaction} />,
        mini: 'CT',
        component: MultisigCreate,
      },
      {
        path: '/multisig/sign',
        name: <FormattedMessage {...messags.menuSignTransaction} />,
        mini: 'ST',
        component: MultisigSign,
      },
      {
        path: '/multisig/push',
        name: <FormattedMessage {...messags.menuPushTransaction} />,
        mini: 'PT',
        component: MultisigPush,
      },
    ],
  },
  {
    collapse: true,
    path: '/block-producer',
    name: <FormattedMessage {...messags.menuBlockProducer} />,
    state: 'openBlockProducer',
    icon: DeveloperBoard,
    views: [
      {
        path: '/block-producer/claim-rewards',
        name: <FormattedMessage {...messags.menuClaimRewards} />,
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
