import React from 'react';

const LinkAuth = () => {
  return (
    <div>
      <h5>Link Authorization</h5>
      <p>
        You can create special permissions that can access only specific actions. (Use the Advanced Permissions feature)
      </p>
      <p>
        The default owner and active permissions can do anything - depending the account this can be dangerous.
        You can create special permissions on your account that are allowed to execute specific contract actions.
      </p>
      <p>
        A common use case may be a high value account. The owner and active keys are safely locked away, while you create a <i>transfer</i> permission with multisig requirements.
      </p>
      <p>
        You would then link the <i>transfer</i> permission to the eosio.token contract and transfer action.
      </p>
      <p>NOTE: Linked auths do not appear on your account - you must use a block explorer to find link auth actions you have done.</p>
      <h5>Unlink Authorization</h5>
      <p>If you want to remove a link simply specify the same contract and action.</p>
    </div>
  );
};

export default LinkAuth;
