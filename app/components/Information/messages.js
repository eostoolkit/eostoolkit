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
  // TODO: Add to de.json
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
    defaultMessage: `Win the jackpot by transferring dusty coins: BTC, ETH, DOGE`,
  },
  grandpaLineTwo: {
    id: 'app.components.Information.Granpa.grandpaLineTwo',
    defaultMessage: `You can mine these coins for FREE every 12 hours. Refer others to earn more, become Chief Miner to earn most!`,
  },
  grandpaLineThree: {
    id: 'app.components.Information.Granpa.grandpaLineThree',
    defaultMessage: `Chief miner makes 10% bonus of all mining, and 10% fees on all transfers`,
  },
  grandpaLineFour: {
    id: 'app.components.Information.Granpa.grandpaLineFour',
    defaultMessage: `Referrers make 5% bonus of mining, and 2.5% fees on transfers`,
  },
  grandpaLineFive: {
    id: 'app.components.Information.Granpa.grandpaLineFive',
    defaultMessage: `The last person to transfer a coin makes 2.5% fees on the subsequent transfer`,
  },
  grandpaLineSix: {
    id: 'app.components.Information.Granpa.grandpaLineSix',
    defaultMessage: `Show the world how fast these coins can go on EOS!`,
  },
  grandpaLineSeven: {
    id: 'app.components.Information.Granpa.grandpaLineSeven',
    defaultMessage: `Achieve the highest VOLUME with one of the three coins and win the JACKPOT`,
  },
  grandpaLineEight: {
    id: 'app.components.Information.Granpa.grandpaLineEight',
    defaultMessage: `Consolation prize for highest VELOCITY with one of the three coins (10% of JACKPOT)`,
  },
  grandpaLineNine: {
    id: 'app.components.Information.Granpa.grandpaLineNine',
    defaultMessage: `The round 1 Prize jackpot has been paid. The round 1 dividend is delayed due to medical reasons.`,
  },
});
