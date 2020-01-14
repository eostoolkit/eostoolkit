/*
 * Information Messages
 *
 * This contains all the text for the Information components.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for News component
  multiChainHeader: {
    id: 'app.components.Information.News.multiChainHeader',
    defaultMessage: 'Improved token support',
  },
  multiChain1: {
    id: 'app.components.Information.News.multiChain1',
    defaultMessage: 'We have added REX token info and also improved the dApp sections for Karma, Parsl, Pixeos, Hirevibes, OpenBRM, BOID. You can now also interact with BOS.  Go to menu ',
  },
  multiChain2: {
    id: 'app.components.Information.News.multiChain2',
    defaultMessage: ' and select an endpoint for the network you want to interact with. Initially we have listed EOS, Worbli, MeetOne, Telos and BOS.',
  },
  multiChain3: {
    id: 'app.components.Information.News.multiChain3',
    defaultMessage: ' To add a new EOSIO chain / endpoint submit a pull request ',
  },
  // Messages for Home component
  homeHeader: {
    id: 'app.components.Information.Home.homeHeader',
    defaultMessage: 'Getting started',
  },
  scatterInfo1: {
    id: 'app.components.Information.Home.scatterInfo1',
    defaultMessage: 'You must have ',
  },
  scatterInfo2: {
    id: 'app.components.Information.Home.scatterInfo2',
    defaultMessage: ' installed to safely and securely send transactions to the EOS Network.',
  },
  helpdesk1: {
    id: 'app.components.Information.Home.helpdeskInfo1',
    defaultMessage: 'Checkout our ',
  },
  helpdesk2: {
    id: 'app.components.Information.Home.helpdeskInfo2',
    defaultMessage: ' to find useful information and tutorials for EOSToolkit and the EOS Network.',
  },
  telegram1: {
    id: 'app.components.Information.Home.generEOSTelegram1',
    defaultMessage: 'If you would like to ask us questions are participate in the GenerEOS Community, check out our ',
  },
  telegram2: {
    id: 'app.components.Information.Home.generEOSTelegram2',
    defaultMessage: ' group.',
  },
  governanceLinkPart1: {
    id: 'app.components.Information.Home.governanceLinkPart1',
    defaultMessage: 'Make sure you have read and understand the ',
  },
  governanceLinkPart2: {
    id: 'app.components.Information.Home.governanceLinkPart2',
    defaultMessage: ' prior to using the EOS Network.',
  },
  // Messages for ChangePermissions component
  changePermissionsHeader: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeader',
    defaultMessage: 'This action has serious consequences',
  },
  changePermissionsHeaderTow: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeaderTwo',
    defaultMessage: "If you don't control the permissions you assign - your account becomes IRRECOVERABLE",
  },
  changePermissionsHeaderThree: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeaderThree',
    defaultMessage:
      'If you assign an ACCOUNT instead of a KEY as a permission you risk breaking your account - be 100% SURE',
  },
  changePermissionsLineOne: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineOne',
    defaultMessage: 'You can change active or owner permission or both',
  },
  changePermissionsLineTwo: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineTwo',
    defaultMessage: "Leave blank any permission you DON'T want to change",
  },
  changePermissionsLineThree: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineThree',
    defaultMessage: 'To change only active permission select youraccount@active for your Scatter identity',
  },
  changePermissionsLineFour: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineFour',
    defaultMessage: 'To change any permission select youraccount@owner for your Scatter identity',
  },
  changePermissionsLineFive: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineFive',
    defaultMessage:
      'If you change your active permission you have to update your scatter identity to use this new key pair',
  },
  changePermissionsLineSix: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineSix',
    defaultMessage:
      "If you don't have the key pairs you assign to the active permission you will no longer be able send transactions",
  },
  // Messages for Disclaimer component
  disclaimerText: {
    id: 'app.components.Information.Disclaimer.disclaimerText',
    defaultMessage:
      "By executing this action you are agreeing to the EOS constitution and this action's associated ricardian contract. The ricardian contract may be viewed in the Scatter approval prompt.",
  },
  // Messages for ComplexPermissions component
  complexPermissionsHeader: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsHeader',
    defaultMessage: 'This action has serious consequences - You can make your account IRRECOVERABLE',
  },
  complexPermissionsHeaderTwo: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsHeaderTwo',
    defaultMessage: 'Adding or modifying permissions',
  },
  complexPermissionsHeaderThree: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsHeaderThree',
    defaultMessage: 'Remove a permission',
  },
  complexPermissionsLineOne: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineOne',
    defaultMessage:
      "EOS accounts can have complex permission structures which include a parent/child relationship. Every account starts with the basic structure <i>owner</i>, which is the parent permission for all future permissions, and it's child <i>active</i>.",
  },
  complexPermissionsLineTow: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineTwo',
    defaultMessage:
      'Parent permissions can always change or remove the child permissions. For example, <i>active</i> can have the child permission <i>delegate</i> added beneath it. Both <i>owner</i> and <i>active</i> can change or remove the <i>delegate</i> permission because it is the child of both.',
  },
  complexPermissionsLineThree: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineThree',
    defaultMessage:
      'Each permission itself has a threshold, and can have a set of keys, accounts, or delays associated with various weight. If the threshold is 1, any of these authorities with a weight of 1 can execute a transaction. If the threshold is 2 you will require the signatures of two <i>weight 1</i> authorities, or a single <i>weight 2</i> authority.',
  },
  complexPermissionsLineFour: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineFour',
    defaultMessage: '<u>Threshold</u> is the required sum of permission weights to execute an action.',
  },
  complexPermissionsLineFive: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineFive',
    defaultMessage: '<u>Permission</u> is the name of the new permission.',
  },
  complexPermissionsLineSix: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineSix',
    defaultMessage: '<u>Parent</u> is the parent permission of the new permission.',
  },
  complexPermissionsLineSeven: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineSeven',
    defaultMessage:
      '<u>Authority</u> can be an actor authority in the format <i>accountname@permission</i>, a public key, or a delay in seconds.',
  },
  complexPermissionsLineEight: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineEight',
    defaultMessage: '<u>Weight</u> is how much weight this Authority lends to the Threshold.',
  },
  complexPermissionsLineNine: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineNine',
    defaultMessage: 'You can add or remove rows as required to meet your multisig requirements.',
  },
  complexPermissionsLineTen: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineTen',
    defaultMessage:
      'Specify the <u>Permission</u> and <u>Parent</u>, and leave a single <u>Authority</u> row empty with the default <u>Weight</u> of 1.',
  },
  // Messages for Donate component
  donateHeader: {
    id: 'app.components.Information.Donate.donateHeader',
    defaultMessage: 'Dear global community,',
  },
  donateLineOne: {
    id: 'app.components.Information.Donate.donateLineOne',
    defaultMessage:
      'Australia is currently experiencing catastrophic fire conditions. The fires have been out of control for several months and it is getting worse.',
  },
  donateLineTwo: {
    id: 'app.components.Information.Donate.donateLineTwo',
    defaultMessage:
      'Many people have lost their lifes and homes. Thousands of animals have been killed and lost their habitats.',
  },
  donateLineThree: {
    id: 'app.components.Information.Donate.donateLineThree',
    defaultMessage: 'Australia needs your help.',
  },
  donateLineFour: {
    id: 'app.components.Information.Donate.donateLineFour',
    defaultMessage:
      '100% of your donation will be going towards the World Wildlife Fund and Australian Red Cross.',
  },
  donateLineFive: {
    id: 'app.components.Information.Donate.donateLineFive',
    defaultMessage: "For more details regarding the donations check EOSWriter.io and follow us on Twitter.",
  },
  // Messages for LinkAuth component
  linkAuthHeaderOne: {
    id: 'app.components.Information.LinkAuth.linkAuthHeaderOne',
    defaultMessage: 'Link Authorization',
  },
  linkAuthHeaderTwo: {
    id: 'app.components.Information.LinkAuth.linkAuthHeaderTwo',
    defaultMessage: 'Unlink Authorization',
  },
  linkAuthLineOne: {
    id: 'app.components.Information.LinkAuth.linkAuthLineOne',
    defaultMessage:
      'You can create special permissions that can access only specific actions. (Use the Advanced Permissions feature)',
  },
  linkAuthLineTwo: {
    id: 'app.components.Information.LinkAuth.linkAuthLineTwo',
    defaultMessage:
      'The default owner and active permissions can do anything - depending the account this can be dangerous. You can create special permissions on your account that are allowed to execute specific contract actions.',
  },
  linkAuthLineThree: {
    id: 'app.components.Information.LinkAuth.linkAuthLineThree',
    defaultMessage:
      'A common use case may be a high value account. The owner and active keys are safely locked away, while you create a <i>transfer</i> permission with multisig requirements.',
  },
  linkAuthLineFour: {
    id: 'app.components.Information.LinkAuth.linkAuthLineFour',
    defaultMessage:
      'You would then link the <i>transfer</i> permission to the eosio.token contract and transfer action.',
  },
  linkAuthLineFive: {
    id: 'app.components.Information.LinkAuth.linkAuthLineFive',
    defaultMessage:
      'NOTE: Linked auths do not appear on your account - you must use a block explorer to find link auth actions you have done.',
  },
  linkAuthLineSix: {
    id: 'app.components.Information.LinkAuth.linkAuthLineSix',
    defaultMessage: 'If you want to remove a link simply specify the same contract and action.',
  },
  // Messages for LinkAuth component
  poormanInfoHeader: {
    id: 'app.components.Information.PoormanInfo.poormanInfoHeader',
    defaultMessage: 'The POORMANTOKEN is an EOS token that includes signups and burning to make airdrops cheaper',
  },
  poormanInfoLineOne: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineOne',
    defaultMessage: 'The intention is to allow EOS accounts to Airgrab the token (i.e. opt-in or signup)',
  },
  poormanInfoLineTwo: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineTwo',
    defaultMessage: 'The September 1st airdrop has been completed.',
  },
  poormanInfoLineThree: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineThree',
    defaultMessage:
      'The new purpose for POOR is to reward people for STAKING and VOTING for 25+ MAINNET Block Producers. Each month we will drop additional POOR to everyone who meets the following criteria:',
  },
  poormanInfoLineFour: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineFour',
    defaultMessage: '1. Already have POOR (either from AIRGRAB or a previous DROP)',
  },
  poormanInfoLineFive: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineFive',
    defaultMessage: '2. Have voted for 25+ producers (either directly or through a PROXY)',
  },
  poormanInfoLineSix: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineSix',
    defaultMessage: '3. Have a STAKED balance',
  },
  poormanInfoLineSeven: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineSeven',
    defaultMessage: 'Accounts that meet this criteria will receive POOR 1:1 to STAKED EOS only!',
  },
  poormanInfoLineEigth: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineEight',
    defaultMessage: 'What can you do with all this POOR? Details coming soon!',
  },
  poormanInfoLineNine: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineNine',
    defaultMessage: 'To read more about this token contract check out the ',
  },
  // Messages for RegProxy component
  regProxyHeaderOne: {
    id: 'app.components.Information.RegProxy.regProxyHeaderOne',
    defaultMessage: 'Create Proxy',
  },
  regProxyHeaderTwo: {
    id: 'app.components.Information.RegProxy.regProxyHeaderTwo',
    defaultMessage: 'Register Proxy Info',
  },
  regProxyLineOne: {
    id: 'app.components.Information.RegProxy.regProxyLineOne',
    defaultMessage:
      'By becoming a proxy you can vote on behalf of others who set you as their proxy. This can be as simple as managing voting for your own accounts, or as complex as becoming a world wide proxy.',
  },
  regProxyLineTwo: {
    id: 'app.components.Information.RegProxy.regProxyLineTwo',
    defaultMessage:
      'If you do wish to use your proxy powers for the community, we suggest you participate in the Register Proxy Info project:',
  },
  regProxyLineThree: {
    id: 'app.components.Information.RegProxy.regProxyLineThree',
    defaultMessage:
      'This is an on-chain EOS contract (or dApp) that allows EOS proxy accounts to register additional information about themselves, such as name and website. This information is published on the EOS blockchain and freely available to be republished. An example website that uses this information is the',
  },
  regProxyLineFour1: {
    id: 'app.components.Information.RegProxy.regProxyLineFour1',
    defaultMessage: 'The contract is published on the ',
  },
  regProxyLineFour2: {
    id: 'app.components.Information.RegProxy.regProxyLineFour2',
    defaultMessage: 'account on the EOS mainnet. More information about this project can be found on ',
  },
  regProxyLineFive: {
    id: 'app.components.Information.RegProxy.regProxyLineFive',
    defaultMessage:
      'This action will use your Proxy Account RAM allocation. Depending on how much detail you provide, this could be as large as 1kB',
  },
  // Messages for ResignProxy component
  resignProxyHeaderOne: {
    id: 'app.components.Information.RegProxy.resignProxyHeaderOne',
    defaultMessage: 'Resign Proxy',
  },
  resignProxyHeaderTwo: {
    id: 'app.components.Information.RegProxy.resignProxyHeaderTwo',
    defaultMessage: 'Unregister Proxy Info',
  },
  resignProxyLineOne: {
    id: 'app.components.Information.RegProxy.resignProxyLineOne',
    defaultMessage:
      'By resigning as proxy you will no longer vote on behalf of others who set you as their proxy. Vote weight changes immediately. All accounts that had you set as a proxy will no longer have any votes.',
  },
  resignProxyLineTwo: {
    id: 'app.components.Information.RegProxy.resignProxyLineTwo',
    defaultMessage: 'As a courtesy please attempt to notify these accounts.',
  },
  resignProxyLineThree: {
    id: 'app.components.Information.RegProxy.resignProxyLineThree',
    defaultMessage:
      'If you had previously registered your Proxy Info, please unregister to keep the proxy database clean.',
  },
  resignProxyLineFour: {
    id: 'app.components.Information.RegProxy.resignProxyLineFour',
    defaultMessage:
      'This is an on-chain EOS contract (or dApp) that allows EOS proxy accounts to register additional information about themselves, such as name and website. This information is published on the EOS blockchain and freely available to be republished. An example website that uses this information is the ',
  },
  resignProxyLineFive1: {
    id: 'app.components.Information.RegProxy.resignProxyLineFive1',
    defaultMessage: 'The contract is published on the ',
  },
  resignProxyLineFive2: {
    id: 'app.components.Information.RegProxy.resignProxyLineFive2',
    defaultMessage: 'account on the EOS mainnet. More information about this project can be found on ',
  },
  // Messages for Grandpa component
  grandpaLineOne: {
    id: 'app.components.Information.Granpa.grandpaLineOne',
    defaultMessage: 'GrandpaCoins is suspended while we make game improvements',
  },
  grandpaLineTwo: {
    id: 'app.components.Information.Granpa.grandpaLineTwo',
    defaultMessage: 'Winner: geostrategic with DOGE (20747.7272 DOGE)',
  },
  grandpaLineThree: {
    id: 'app.components.Information.Granpa.grandpaLineThree',
    defaultMessage: 'Velocity: iamskywalker with DOGE (117517 tx)',
  },
  grandpaLineFour: {
    id: 'app.components.Information.Granpa.grandpaLineFour',
    defaultMessage: 'Carry forward: ha2temzwgyge for being Top Miner',
  },
  grandpaLineFive: {
    id: 'app.components.Information.Granpa.grandpaLineFive',
    defaultMessage: 'DOGE Dividends: 194.8803 EOS',
  },
  blockOneLetterHeader: {
    id: 'app.components.Information.BlockOneLetter.blockOneLetterHeader',
    defaultMessage: 'Dear GenerEOS supporters,',
  },
  blockOneLetterText1: {
    id: 'app.components.Information.BlockOneLetter.blockOneLetterText1',
    defaultMessage:
      'Block One recently announced that that they will be voting for Block Producers that share the core values necessary to maximize the integrity and potential of the EOS public blockchain network.',
  },
  blockOneLetterText2: {
    id: 'app.components.Information.BlockOneLetter.blockOneLetterText2',
    defaultMessage:
      "They have provided an email for BP's and token holders to campaign for the Block Producers they believe in.",
  },
  blockOneLetterText3: {
    id: 'app.components.Information.BlockOneLetter.blockOneLetterText3',
    defaultMessage:
      'We would love if you could rally behind us showing your support by sending a passionate email to Block One explaining why they should vote for GenerEOS.',
  },
  blockOneLetterText4: {
    id: 'app.components.Information.BlockOneLetter.blockOneLetterText4',
    defaultMessage: 'Send your email to - ',
  },
  blockOneLetterText5: {
    id: 'app.components.Information.BlockOneLetter.blockOneLetterText5',
    defaultMessage:
      'This support would mean the world to us and help us keep creating great tools and contributions for the community.',
  },
  governanceDefinitionsHeader: {
    id: 'app.components.Information.Governance.governanceDefinitionsHeader',
    defaultMessage: 'Definitions',
  },
  governanceDefinitionsText: {
    id: 'app.components.Information.Governance.governanceDefinitionsText',
    defaultMessage: 'All capitalized, italicized, or inline code terms in The EOS User Agreement will be given the same effect and meaning as in Definitions. \n \n - EOS User Agreement: This document (EUA) \n \n - Chain ID: chain_id - aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906 \n \n - User: Any person or organization of persons who maintain(s) direct or indirect ownership of an EOS account, or EOS-based property connected to an EOS account. \n \n - Ownership: Direct or indirect access to an EOS account through one or more valid permissions checks. Ownership may be partially shared between Users through the use of multi-signature permissions. \n \n - Block Producer: Users who have called regproducer and receive rewards from eosio.vpay. \n \n - eosio.prods: An EOS account with a dynamic permissions structure that can assume the privileges of the eosio account when 15/21 Block Producers agree to do so. \n \n - Network Funds: Tokens contained within the following accounts: eosio.names, eosio.ramfee, eosio.saving. \n \n - Governing Documents: regproducer is considered a governing document. \n \n - On-Chain: Any transaction, smart contract, or Ricardian contract which is located within a block that is irreversible and appended to the EOS blockchain chain_id. \n \n - EOS-based Property: Anything that requires a valid permission in order to directly manipulate, alter, transfer, influence, or otherwise effect on the EOS Blockchain \n \n - Call: To submit an action to the EOS Blockchain chain_id. \n \n - Authorizations & Permissions: Permissions are arbitrary names used to define the requirements for a transaction sent on behalf of that permission. Permissions can be assigned for authority over specific contract actions. \n \n - Ricardian Contract: A contract that places the defining elements of a legal agreement in a format that can be expressed and executed in software.',
  },
  governanceArticleOneHeader: {
    id: 'app.components.Information.Governance.governanceArticleOneHeader',
    defaultMessage: 'Article I -  User Acknowledgement of Risks',
  },
  governanceArticleOneText: {
    id: 'app.components.Information.Governance.governanceArticleOneText',
    defaultMessage:
      'If User loses access to their EOS account on chain_id and has not taken appropriate measures to secure access to their EOS account by other means, the User acknowledges and agrees that that EOS account will become inaccessible. Users acknowledge that the User has an adequate understanding of the risks, usage and intricacies of cryptographic tokens and blockchain-based software. The User acknowledges and agrees that the User is using the EOS blockchain at their sole risk.',
  },
  governanceArticleTwoHeader : {
    id: 'app.components.Information.Governance.governanceArticleTwoHeader',
    defaultMessage: 'Article II - Special User Types',
  },
  governanceArticleTwoText: {
    id: 'app.components.Information.Governance.governanceArticleTwoText',
    defaultMessage:
      'Users who call regproducer agree to, and are bound by, the regproducer Ricardian Contract.',
  },
  governanceArticleThreeHeader: {
    id: 'app.components.Information.Governance.governanceArticleThreeHeader',
    defaultMessage: 'Article III - Consent of the EUA',
  },
  governanceArticleThreeText: {
    id: 'app.components.Information.Governance.governanceArticleThreeText',
    defaultMessage:
      'The nature of the EOS User Agreement is such that it serves as a description of the current EOS Mainnet governance functions that are in place. These functions, enforced by code, do not require the consent of Users as these functions are inherent and systemic to the EOS Mainnet itself.',
  },
  governanceArticleFourHeader: {
    id: 'app.components.Information.Governance.governanceArticleFourHeader',
    defaultMessage: 'Article IV - Governing Documents',
  },
  governanceArticleFourText: {
    id: 'app.components.Information.Governance.governanceArticleFourText',
    defaultMessage:
      'Any modifications to the EUA and governing documents may be made by eosio.prods. It is admonished that a statement be crafted and issued through eosio.prods via eosio.forum referendum contract describing such a modification in advance.',
  },
  governanceArticleFiveHeader: {
    id: 'app.components.Information.Governance.governanceArticleFiveHeader',
    defaultMessage: 'Article V - Native Unit of Value',
  },
  governanceArticleFiveText: {
    id: 'app.components.Information.Governance.governanceArticleFiveText',
    defaultMessage:
      'The native unit of value on EOS chain_id shall be the EOS token as defined and created by the eosio.token smart contract.',
  },
  governanceArticleSixHeader: {
    id: 'app.components.Information.Governance.governanceArticleSixHeader',
    defaultMessage: 'Article VI - Maintaining the EOS blockchain',
  },
  governanceArticleSixText: {
    id: 'app.components.Information.Governance.governanceArticleSixText',
    defaultMessage:
      'eosio.prods will maintain the active blockchain codebase which includes, but is not limited to, the implementation of all modifications of all features, optimizations, and upgrades: present and future.',
  },
  governanceArticleSevenHeader: {
    id: 'app.components.Information.Governance.governanceArticleSevenHeader',
    defaultMessage: 'Article VII - Network Funds',
  },
  governanceArticleSevenText: {
    id: 'app.components.Information.Governance.governanceArticleSevenText',
    defaultMessage:
      'It is admonished that any altering of the state of any tokens contained within network fund accounts, or altering any pre-existing code that directly or indirectly governs the allocation, fulfillment, or distribution of any network funds be preceded by a statement crafted and issued by eosio.prods to the eosio.forum referendum system contract describing the effect in advance.',
  },
  governanceArticleEightHeader: {
    id: 'app.components.Information.Governance.governanceArticleEightHeader',
    defaultMessage: 'Article VIII - Freedom of Account Creation',
  },
  governanceArticleEightText: {
    id: 'app.components.Information.Governance.governanceArticleEightText',
    defaultMessage:
      'Any current or future User is able to create an EOS Account without the permission by any other User. eosio.prods may never affect an EOS User Account(s) without valid permission(s) which have been shared with eosio.prods by an EOS account. eosio.prods may charge a fee for any actions that are requested by other Users pertaining to an EOS account where permissions are shared.',
  },
  governanceArticleNineHeader: {
    id: 'app.components.Information.Governance.governanceArticleNineHeader',
    defaultMessage: 'Article IX - No Fiduciary',
  },
  governanceArticleNineText: {
    id: 'app.components.Information.Governance.governanceArticleNineText',
    defaultMessage:
      'No User shall have a fiduciary purpose to support the value of the EOS token. No User can authorize anyone to hold assets, borrow, speak, contract on behalf of other EOS Users or the EOS blockchain chain_id collectively. This EOS blockchain shall have no owners, managers, or fiduciaries.',
  },
  governanceArticleTenHeader: {
    id: 'app.components.Information.Governance.governanceArticleTenHeader',
    defaultMessage: 'Article X - User Security',
  },
  governanceArticleTenText: {
    id: 'app.components.Information.Governance.governanceArticleTenText',
    defaultMessage:
      'All items pertaining to personal account security, including but not limited to the safekeeping of private keys, is solely the responsibility of the User to secure.',
  },
  governanceArticleElevenHeader: {
    id: 'app.components.Information.Governance.governanceArticleElevenHeader',
    defaultMessage: 'Article XI - eosio.prods Limited Liability',
  },
  governanceArticleElevelText: {
    id: 'app.components.Information.Governance.governanceArticleElevelText',
    defaultMessage:
      'The User acknowledges and agrees that, to the fullest extent permitted by any applicable law, this disclaimer of liability applies to any and all damages or injury whatsoever caused by or related to risks of, use of, or inability to use, the EOS token or the EOS blockchain chain_id under any cause of action whatsoever of any kind in any jurisdiction, including, without limitation, actions for breach of warranty, breach of contract or tort (including negligence) and that eosio.prods, nor the individual permissions that operate it, shall not be liable for any indirect, incidental, special, exemplary or consequential damages, including for loss of profits, goodwill or data.',
  },
  poorInfoLineOne: {
    id: 'app.components.Information.PoorInfo.poorInfoLineOne',
    defaultMessage: 'Every 24 hours 3331 ZKS is made available',
  },
  poorInfoLineTwo: {
    id: 'app.components.Information.PoorInfo.poorInfoLineTwo',
    defaultMessage: 'Spend POOR, and receive ZKS in ratio based on your spend vs total spend',
  },
  poorInfoLineThree: {
    id: 'app.components.Information.PoorInfo.poorInfoLineThree',
    defaultMessage:
      'Example: If you spend 1000 POOR, and 2000 total POOR is spent, you receive 50% of 3331 ZKS that day',
  },
  poorInfoLineFour: {
    id: 'app.components.Information.PoorInfo.poorInfoLineFour',
    defaultMessage: 'Spent POOR will be burned from circulation so we can keep supporting new airdrops',
  },
});
