/*
 * Information Messages
 *
 * This contains all the text for the Information components.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for Home component
  homeHeader: {
    id: 'app.components.Information.Home.homeHeader',
    defaultMessage: 'Getting started',
  },
  scatterInfo: {
    id: 'app.components.Information.Home.scatterInfo',
    defaultMessage: `You must have <a href="https://get-scatter.com/" target="new">Scatter</a> installed to safely and securely send transactions to the EOS Network.`,
  },
  helpdesk: {
    id: 'app.components.Information.Home.helpdeskInfo',
    defaultMessage: `Checkout our <a href="https://eoshelpdesk.zendesk.com" target="new">EOS Helpdesk</a> to find useful information and tutorials for EOSToolkit and the EOS Network.`,
  },
  telegram: {
    id: 'app.components.Information.Home.generEOSTelegram',
    defaultMessage: `If you would like to ask us questions are participate in the GenerEOS Community, check out our <a href="https://t.me/generEOS" target="new">Telegram</a> group.`,
  },
  governanceLinkPart1: {
    id: 'app.components.Information.Home.governanceLinkP2',
    defaultMessage: `Make sure you have read and understand the `,
  },
  governanceLinkPart2: {
    id: 'app.components.Information.Home.governanceLinkP2',
    defaultMessage: ` prior to using the EOS Network.`,
  },
  // Messages for ChangePermissions component
  changePermissionsHeader: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeader',
    defaultMessage: 'This action has serious consequences',
  },
  changePermissionsHeaderTow: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeaderTwo',
    defaultMessage: `If you don't control the permissions you assign - your account becomes IRRECOVERABLE`,
  },
  changePermissionsHeaderThree: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeaderThree',
    defaultMessage: `If you assign an ACCOUNT instead of a KEY as a permission you risk breaking your account - be 100% SURE`,
  },
  changePermissionsLineOne: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineOne',
    defaultMessage: `You can change active or owner permission or both`,
  },
  changePermissionsLineTwo: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineTwo',
    defaultMessage: `Leave blank any permission you DON'T want to change`,
  },
  changePermissionsLineThree: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineThree',
    defaultMessage: `To change only active permission select youraccount@active for your Scatter identity`,
  },
  changePermissionsLineFour: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineFour',
    defaultMessage: `To change any permission select youraccount@owner for your Scatter identity`,
  },
  changePermissionsLineFive: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineFive',
    defaultMessage: `If you change your active permission you have to update your scatter identity to use this new key pair`,
  },
  changePermissionsLineSix: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineSix',
    defaultMessage: `If you don't have the key pairs you assign to the active permission you will no longer be able send transactions`,
  },
  // Messages for Disclaimer component
  disclaimerText: {
    id: 'app.components.Information.Disclaimer.disclaimerText',
    defaultMessage: `By executing this action you are agreeing to the EOS constitution and this action's associated ricardian contract. The ricardian contract may be viewed in the Scatter approval prompt.`,
  },
  // Messages for ComplexPermissions component
  complexPermissionsHeader: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsHeader',
    defaultMessage: `This action has serious consequences - You can make your account IRRECOVERABLE`,
  },
  complexPermissionsHeaderTwo: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsHeaderTwo',
    defaultMessage: `Adding or modifying permissions`,
  },
  complexPermissionsHeaderThree: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsHeaderThree',
    defaultMessage: `Remove a permission`,
  },
  complexPermissionsLineOne: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineOne',
    defaultMessage: `EOS accounts can have complex permission structures which include a parent/child relationship. 
                     Every account starts with the basic structure <i>owner</i>, which is the parent permission for all 
                     future permissions, and it's child <i>active</i>.`,
  },
  complexPermissionsLineTow: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineTwo',
    defaultMessage: `Parent permissions can always change or remove the child permissions. For example, <i>active</i> 
                     can have the child permission <i>delegate</i> added beneath it. Both <i>owner</i> and <i>active</i>
                     can change or remove the <i>delegate</i> permission because it is the child of both.`,
  },
  complexPermissionsLineThree: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineThree',
    defaultMessage: `Each permission itself has a threshold, and can have a set of keys, accounts, or delays associated 
                     with various weight. If the threshold is 1, any of these authorities with a weight of 1 can execute
                     a transaction. If the threshold is 2 you will require the signatures of two <i>weight 1</i> 
                     authorities, or a single <i>weight 2</i> authority.`,
  },
  complexPermissionsLineFour: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineFour',
    defaultMessage: `<u>Threshold</u> is the required sum of permission weights to execute an action.`,
  },
  complexPermissionsLineFive: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineFive',
    defaultMessage: `<u>Permission</u> is the name of the new permission.`,
  },
  complexPermissionsLineSix: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineSix',
    defaultMessage: `<u>Parent</u> is the parent permission of the new permission.`,
  },
  complexPermissionsLineSeven: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineSeven',
    defaultMessage: `<u>Authority</u> can be an actor authority in the format <i>accountname@permission</i>, a public key, or a delay in seconds.`,
  },
  complexPermissionsLineEight: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineEight',
    defaultMessage: `<u>Weight</u> is how much weight this Authority lends to the Threshold.`,
  },
  complexPermissionsLineNine: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineNine',
    defaultMessage: `You can add or remove rows as required to meet your multisig requirements.`,
  },
  complexPermissionsLineTen: {
    id: 'app.components.Information.ComplexPermissions.complexPermissionsLineTen',
    defaultMessage: `Specify the <u>Permission</u> and <u>Parent</u>, and leave a single <u>Authority</u> row empty with the default <u>Weight</u> of 1.`,
  },
  // Messages for Donate component
  donateHeader: {
    id: 'app.components.Information.Donate.donateHeader',
    defaultMessage: `Dear EOSToolkit supporters,`,
  },
  donateLineOne: {
    id: 'app.components.Information.Donate.donateLineOne',
    defaultMessage: `The <strong>EOSToolkit</strong> was made out of love prior to the launch of the EOS mainnet thanks to long hours
                     late into the night and a staunch belief in making EOS accessible to everyone.`,
  },
  donateLineTwo: {
    id: 'app.components.Information.Donate.donateLineTwo',
    defaultMessage: `Thanks to your support and votes <strong>Team GenerEOS</strong> now receives block rewards and this helps fund
                     further development of the eostoolkit and other EOS projects.`,
  },
  donateLineThree: {
    id: 'app.components.Information.Donate.donateLineThree',
    defaultMessage: `However, the goal of GenerEOS is to give back to the community.`,
  },
  donateLineFour: {
    id: 'app.components.Information.Donate.donateLineFour',
    defaultMessage: `By donating you will be supporting development of the <strong>EOSToolkit</strong> directly, while allowing
                     GenerEOS to give even more back to those who need it most.`,
  },
  donateLineFive: {
    id: 'app.components.Information.Donate.donateLineFive',
    defaultMessage: `We hope you love the <strong>EOSToolkit</strong> as much as I've loved making it.`,
  },
  // Messages for LinkAuth component
  linkAuthHeaderOne: {
    id: 'app.components.Information.LinkAuth.linkAuthHeaderOne',
    defaultMessage: `Link Authorization`,
  },
  linkAuthHeaderTwo: {
    id: 'app.components.Information.LinkAuth.linkAuthHeaderTwo',
    defaultMessage: `Unlink Authorization`,
  },
  linkAuthLineOne: {
    id: 'app.components.Information.LinkAuth.linkAuthLineOne',
    defaultMessage: `You can create special permissions that can access only specific actions. (Use the Advanced Permissions feature)`,
  },
  linkAuthLineTwo: {
    id: 'app.components.Information.LinkAuth.linkAuthLineTwo',
    defaultMessage: `The default owner and active permissions can do anything - depending the account this can be dangerous.
                     You can create special permissions on your account that are allowed to execute specific contract actions.`,
  },
  linkAuthLineThree: {
    id: 'app.components.Information.LinkAuth.linkAuthLineThree',
    defaultMessage: `A common use case may be a high value account. The owner and active keys are safely locked away, while you create a <i>transfer</i> permission with multisig requirements.`,
  },
  linkAuthLineFour: {
    id: 'app.components.Information.LinkAuth.linkAuthLineFour',
    defaultMessage: `You would then link the <i>transfer</i> permission to the eosio.token contract and transfer action.`,
  },
  linkAuthLineFive: {
    id: 'app.components.Information.LinkAuth.linkAuthLineFive',
    defaultMessage: `NOTE: Linked auths do not appear on your account - you must use a block explorer to find link auth actions you have done.`,
  },
  linkAuthLineSix: {
    id: 'app.components.Information.LinkAuth.linkAuthLineSix',
    defaultMessage: `If you want to remove a link simply specify the same contract and action.`,
  },
  // Messages for LinkAuth component
  poormanInfoHeader: {
    id: 'app.components.Information.PoormanInfo.poormanInfoHeader',
    defaultMessage: `The POORMANTOKEN is an EOS token that includes signups and burning to make airdrops cheaper`,
  },
  poormanInfoLineOne: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineOne',
    defaultMessage: `The intention is to allow EOS accounts to Airgrab the token (i.e. opt-in or signup)`,
  },
  poormanInfoLineTwo: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineTwo',
    defaultMessage: `The September 1st airdrop has been completed.`,
  },
  poormanInfoLineThree: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineThree',
    defaultMessage: `The new purpose for POOR is to reward people for STAKING and VOTING for 25+ MAINNET Block Producers. Each month we
                     will drop additional POOR to everyone who meets the following criteria:`,
  },
  poormanInfoLineFour: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineFour',
    defaultMessage: `1. Already have POOR (either from AIRGRAB or a previous DROP)`,
  },
  poormanInfoLineFive: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineFive',
    defaultMessage: `2. Have voted for 25+ producers (either directly or through a PROXY)`,
  },
  poormanInfoLineSix: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineSix',
    defaultMessage: `3. Have a STAKED balance`,
  },
  poormanInfoLineSeven: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineSeven',
    defaultMessage: `Accounts that meet this criteria will receive POOR 1:1 to STAKED EOS only!`,
  },
  poormanInfoLineEigth: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineEight',
    defaultMessage: `What can you do with all this POOR? Details coming soon!`,
  },
  poormanInfoLineNine: {
    id: 'app.components.Information.PoormanInfo.poormanInfoLineNine',
    defaultMessage: `To read more about this token contract check out the 
        <a href="https://github.com/generEOS/poorman.token" target="new">
          poorman.token Github
        </a>`,
  },
  // Messages for RegProxy component
  regProxyHeaderOne: {
    id: 'app.components.Information.RegProxy.regProxyHeaderOne',
    defaultMessage: `Create Proxy`,
  },
  regProxyHeaderTwo: {
    id: 'app.components.Information.RegProxy.regProxyHeaderTwo',
    defaultMessage: `Register Proxy Info`,
  },
  regProxyLineOne: {
    id: 'app.components.Information.RegProxy.regProxyLineOne',
    defaultMessage: `By becoming a proxy you can vote on behalf of others who set you as their proxy. This can be as simple as
                     managing voting for your own accounts, or as complex as becoming a world wide proxy.`,
  },
  regProxyLineTwo: {
    id: 'app.components.Information.RegProxy.regProxyLineTwo',
    defaultMessage: `If you do wish to use your proxy powers for the community, we suggest you participate in the Register Proxy Info
                     project:`,
  },
  regProxyLineThree: {
    id: 'app.components.Information.RegProxy.regProxyLineThree',
    defaultMessage: `This is an on-chain EOS contract (or dApp) that allows EOS proxy accounts to register additional information
                     about themselves, such as name and website. This information is published on the EOS blockchain and freely
                     available to be republished. An example website that uses this information is the 
                     <a href="https://www.alohaeos.com/vote/proxy" target="new">
                       Aloha EOS Proxy Research Portal
                     </a>.`,
  },
  regProxyLineFour: {
    id: 'app.components.Information.RegProxy.regProxyLineFour',
    defaultMessage: `The contract is published on the 
                     <a href="https://bloks.io/account/regproxyinfo" target="new">
                       regproxyinfo
                     </a> 
                     account on the EOS mainnet. More information about this project can be found on 
                     <a href="https://github.com/AlohaEOS/eos-proxyinfo" target="new">
                       GitHub
                     </a>`,
  },
  regProxyLineFive: {
    id: 'app.components.Information.RegProxy.regProxyLineFive',
    defaultMessage: `This action will use your Proxy Account RAM allocation. Depending on how much detail you provide, this could be
                     as large as 1kB`,
  },
  // Messages for ResignProxy component
  resignProxyHeaderOne: {
    id: 'app.components.Information.RegProxy.resignProxyHeaderOne',
    defaultMessage: `Resign Proxy`,
  },
  resignProxyHeaderTwo: {
    id: 'app.components.Information.RegProxy.resignProxyHeaderTwo',
    defaultMessage: `Unregister Proxy Info`,
  },
  resignProxyLineOne: {
    id: 'app.components.Information.RegProxy.resignProxyLineOne',
    defaultMessage: `By resigning as proxy you will no longer vote on behalf of others who set you as their proxy. Vote weight
                     changes immediately. All accounts that had you set as a proxy will no longer have any votes.`,
  },
  resignProxyLineTwo: {
    id: 'app.components.Information.RegProxy.resignProxyLineTwo',
    defaultMessage: `As a courtesy please attempt to notify these accounts.`,
  },
  resignProxyLineThree: {
    id: 'app.components.Information.RegProxy.resignProxyLineThree',
    defaultMessage: `If you had previously registered your Proxy Info, please unregister to keep the proxy database clean.`,
  },
  resignProxyLineFour: {
    id: 'app.components.Information.RegProxy.resignProxyLineFour',
    defaultMessage: `This is an on-chain EOS contract (or dApp) that allows EOS proxy accounts to register additional information
                     about themselves, such as name and website. This information is published on the EOS blockchain and freely
                     available to be republished. An example website that uses this information is the 
                     <a href="https://www.alohaeos.com/vote/proxy" target="new">
                       Aloha EOS Proxy Research Portal
                     </a>.`,
  },
  resignProxyLineFive: {
    id: 'app.components.Information.RegProxy.resignProxyLineFive',
    defaultMessage: `The contract is published on the 
                     <a href="https://bloks.io/account/regproxyinfo" target="new">
                       regproxyinfo
                     </a> 
                     account on the EOS mainnet. More information about this project can be found on 
                     <a href="https://github.com/AlohaEOS/eos-proxyinfo" target="new">
                       GitHub
                     </a>`,
  },
  // Messages for Grandpa component
  grandpaLineOne: {
    id: 'app.components.Information.Granpa.grandpaLineOne',
    defaultMessage: `GrandpaCoins is suspended while we make game improvements`,
  },
  grandpaLineTwo: {
    id: 'app.components.Information.Granpa.grandpaLineTwo',
    defaultMessage: `Winner: geostrategic with DOGE (20747.7272 DOGE)`,
  },
  grandpaLineThree: {
    id: 'app.components.Information.Granpa.grandpaLineThree',
    defaultMessage: `Velocity: iamskywalker with DOGE (117517 tx)`,
  },
  grandpaLineFour: {
    id: 'app.components.Information.Granpa.grandpaLineFour',
    defaultMessage: `Carry forward: ha2temzwgyge for being Top Miner`,
  },
  grandpaLineFive: {
    id: 'app.components.Information.Granpa.grandpaLineFive',
    defaultMessage: `DOGE Dividends: 194.8803 EOS`,
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
  governanceMainHeader: {
    id: 'app.components.Information.Governance.governanceMainHeader',
    defaultMessage:
      'This Constitution is a multi-party contract entered into by the Members by virtue of their use of this blockchain.',
  },
  governanceArticleOneHeader: {
    id: 'app.components.Information.Governance.governanceArticleOneHeader',
    defaultMessage: 'Article I - No Initiation of Violence',
  },
  governanceArticleOneText: {
    id: 'app.components.Information.Governance.governanceArticleOneText',
    defaultMessage:
      'Members shall not initiate violence or the threat of violence against another Member. Lawful prosecution of crimes with the goal of preserving life, liberty and property does not constitute initiation of violence.',
  },
  governanceArticleTwoHeader: {
    id: 'app.components.Information.Governance.governanceArticleTwoHeader',
    defaultMessage: 'Article II - No Perjury',
  },
  governanceArticleTwoText: {
    id: 'app.components.Information.Governance.governanceArticleTwoText',
    defaultMessage:
      'Members shall be liable for losses caused by false or misleading attestations and shall forfeit any profit gained thereby.',
  },
  governanceArticleThreeHeader: {
    id: 'app.components.Information.Governance.governanceArticleThreeHeader',
    defaultMessage: 'Article III - Rights',
  },
  governanceArticleThreeText: {
    id: 'app.components.Information.Governance.governanceArticleThreeText',
    defaultMessage:
      'The Members grant the right of contract and of private property to each other, therefore no property shall change hands except with the consent of the owner, by a valid Arbitrator’s order, or via community referendum. This Constitution creates no positive rights for or between any Members.',
  },
  governanceArticleFourHeader: {
    id: 'app.components.Information.Governance.governanceArticleFourHeader',
    defaultMessage: 'Article IV - No Vote Buying',
  },
  governanceArticleFourText: {
    id: 'app.components.Information.Governance.governanceArticleFourText',
    defaultMessage:
      'No Member shall offer nor accept anything of value in exchange for a vote of any type, nor shall any Member unduly influence the vote of another.',
  },
  governanceArticleFiveHeader: {
    id: 'app.components.Information.Governance.governanceArticleFiveHeader',
    defaultMessage: 'Article V - No Fiduciary',
  },
  governanceArticleFiveText: {
    id: 'app.components.Information.Governance.governanceArticleFiveText',
    defaultMessage:
      'No Member nor EOS token holder shall have fiduciary responsibility to support the value of the EOS token. The Members do not authorize anyone to hold assets, borrow, nor contract on behalf of EOS token holders collectively. This blockchain has no owners, managers or fiduciaries; therefore, no Member shall have beneficial interest in more than 10% of the EOS token supply.',
  },
  governanceArticleSixHeader: {
    id: 'app.components.Information.Governance.governanceArticleSixHeader',
    defaultMessage: 'Article VI - Restitution',
  },
  governanceArticleSixText: {
    id: 'app.components.Information.Governance.governanceArticleSixText',
    defaultMessage:
      'Each Member agrees that penalties for breach of contract may include, but are not limited to, fines, loss of account, and other restitution.',
  },
  governanceArticleSevenHeader: {
    id: 'app.components.Information.Governance.governanceArticleSevenHeader',
    defaultMessage: 'Article VII - Open Source',
  },
  governanceArticleSevenText: {
    id: 'app.components.Information.Governance.governanceArticleSevenText',
    defaultMessage:
      'Each Member who makes available a smart contract on this blockchain shall be a Developer. Each Developer shall offer their smart contracts via a free and open source license, and each smart contract shall be documented with a Ricardian Contract stating the intent of all parties and naming the Arbitration Forum that will resolve disputes arising from that contract.',
  },
  governanceArticleEightHeader: {
    id: 'app.components.Information.Governance.governanceArticleEightHeader',
    defaultMessage: 'Article VIII - Language',
  },
  governanceArticleEightText: {
    id: 'app.components.Information.Governance.governanceArticleEightText',
    defaultMessage:
      'Multi-lingual contracts must specify one prevailing language in case of dispute and the author of any translation shall be liable for losses due to their false, misleading, or ambiguous attested translations.',
  },
  governanceArticleNineHeader: {
    id: 'app.components.Information.Governance.governanceArticleNineHeader',
    defaultMessage: 'Article IX - Dispute Resolution',
  },
  governanceArticleNineText: {
    id: 'app.components.Information.Governance.governanceArticleNineText',
    defaultMessage:
      'All disputes arising out of or in connection with this Constitution shall be finally settled under the Rules of Dispute Resolution of the EOS Core Arbitration Forum by one or more arbitrators appointed in accordance with the said Rules.',
  },
  governanceArticleTenHeader: {
    id: 'app.components.Information.Governance.governanceArticleTenHeader',
    defaultMessage: 'Article X - Choice of Law',
  },
  governanceArticleTenText: {
    id: 'app.components.Information.Governance.governanceArticleTenText',
    defaultMessage:
      'All disputes arising out of or in connection with this Constitution shall be finally settled under the Rules of Dispute Resolution of the EOS Core Arbitration Forum by one or more arbitrators appointed in accordance with the said Rules.',
  },
  governanceArticleElevenHeader: {
    id: 'app.components.Information.Governance.governanceArticleElevenHeader',
    defaultMessage: 'Article XI - Amending',
  },
  governanceArticleElevelText: {
    id: 'app.components.Information.Governance.governanceArticleElevelText',
    defaultMessage:
      'This Constitution and its subordinate documents shall not be amended except by a vote of the token holders with no less than 15% vote participation among tokens and no fewer than 10% more Yes than No votes, sustained for 30 continuous days within a 120 day period.',
  },
  governanceArticleTwelveHeader: {
    id: 'app.components.Information.Governance.governanceArticleTwelveHeader',
    defaultMessage: 'Article XII - Publishing',
  },
  governanceArticleTwelveText: {
    id: 'app.components.Information.Governance.governanceArticleTwelveText',
    defaultMessage:
      'Members may only publish information to the Blockchain that is within their right to publish. Furthermore, Members voluntarily consent for all Members to permanently and irrevocably retain a copy, analyze, and distribute all broadcast transactions and derivative information.',
  },
  governanceArticleThirteenHeader: {
    id: 'app.components.Information.Governance.governanceArticleThirteenHeader',
    defaultMessage: 'Article XIII - Informed Consent',
  },
  governanceArticleThirteenText: {
    id: 'app.components.Information.Governance.governanceArticleThirteenText',
    defaultMessage:
      'All service providers who produce tools to facilitate the construction and signing of transactions on behalf of other Members shall present to said other Members the full Ricardian contract terms of this Constitution and other referenced contracts. Service providers shall be liable for losses resulting from failure to disclose the full Ricardian contract terms to users.',
  },
  governanceArticleFourteenHeader: {
    id: 'app.components.Information.Governance.governanceArticleFourteenHeader',
    defaultMessage: 'Article XIV - Severability',
  },
  governanceArticleFourteenText: {
    id: 'app.components.Information.Governance.governanceArticleFourteenText',
    defaultMessage:
      'If any part of this Constitution is declared unenforceable or invalid, the remainder will continue to be valid and enforceable.',
  },
  governanceArticleFifteenHeader: {
    id: 'app.components.Information.Governance.governanceArticleFifteenHeader',
    defaultMessage: 'Article XV - Termination of Agreement',
  },
  governanceArticleFifteenText: {
    id: 'app.components.Information.Governance.governanceArticleFifteenText',
    defaultMessage:
      'A Member is automatically released from all revocable obligations under this Constitution 3 years after the last transaction signed by that Member is incorporated into the blockchain. After 3 years of inactivity an account may be put up for auction and the proceeds distributed to all Members according to the system contract provisions then in effect for such redistribution.',
  },

  governanceArticleSixteenHeader: {
    id: 'app.components.Information.Governance.governanceArticleSixteenHeader',
    defaultMessage: 'Article XVI - Developer Liability',
  },
  governanceArticleSixteenText: {
    id: 'app.components.Information.Governance.governanceArticleSixteenText',
    defaultMessage:
      'Members agree to hold software developers harmless for unintentional mistakes made in the expression of contractual intent, whether or not said mistakes were due to actual or perceived negligence.',
  },
  governanceArticleSeventeenHeader: {
    id: 'app.components.Information.Governance.governanceArticleSeventeenHeader',
    defaultMessage: 'Article XVII - Consideration',
  },
  governanceArticleSeventeenText: {
    id: 'app.components.Information.Governance.governanceArticleSeventeenText',
    defaultMessage:
      'All rights and obligations under this Constitution are mutual and reciprocal and of equally significant value and cost to all parties.',
  },
  governanceArticleEighteenHeader: {
    id: 'app.components.Information.Governance.governanceArticleEighteenHeader',
    defaultMessage: 'Article XVIII - Acceptance',
  },
  governanceArticleEighteenText: {
    id: 'app.components.Information.Governance.governanceArticleEighteenText',
    defaultMessage:
      'A contract is deemed accepted when a member signs a transaction which incorporates a TAPOS proof of a block whose implied state incorporates an ABI of said contract and said transaction is incorporated into the blockchain.',
  },
  governanceArticleNineteenHeader: {
    id: 'app.components.Information.Governance.governanceArticleNineteenHeader',
    defaultMessage: 'Article XIX - Counterparts',
  },
  governanceArticleNineteenText: {
    id: 'app.components.Information.Governance.governanceArticleNineteenText',
    defaultMessage:
      'This Constitution may be executed in any number of counterparts, each of which when executed and delivered shall constitute a duplicate original, but all counterparts together shall constitute a single agreement.',
  },
  governanceArticleTwentyHeader: {
    id: 'app.components.Information.Governance.governanceArticleTwentyHeader',
    defaultMessage: 'Article XX - Interim Constitution',
  },
  governanceArticleTwentyText: {
    id: 'app.components.Information.Governance.governanceArticleTwentyText',
    defaultMessage:
      'This constitution is interim and is intended to remain in effect until a permanent constitution is written and ratified in a referendum.',
  },
});
