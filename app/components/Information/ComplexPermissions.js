import React from 'react';

const permTree = `owner: { keys,accounts,delays... }\n\t
  active: { keys,accounts,delays... }\n\t\t
    delegate: { keys,accounts,delays... }`;

const ComplexPermissions = () => {
  return (
    <div>
      <h5>
        <strong>This action has serious consequences - You can make your account IRRECOVERABLE</strong>
      </h5>
      <p>
        EOS accounts can have complex permission structures which include a parent/child relationship.
        Every account starts with the basic structure <i>owner</i>, which is the parent permission for all future permissions, and it{"'"}s child <i>active</i>.
      </p>
      <p>
        Parent permissions can always change or remove the child permissions.
        For example, <i>active</i> can have the child permission <i>delegate</i> added beneath it.
        Both <i>owner</i> and <i>active</i> can change or remove the <i>delegate</i> permission because it is the child of both.
      </p>
      <pre>
        {permTree}
      </pre>
      <p>
        Each permission itself has a threshold, and can have a set of keys, accounts, or delays associated with various weight.
        If the threshold is 1, any of these authorities with a weight of 1 can execute a transaction.
        If the threshold is 2 you will require the signatures of two <i>weight 1</i> authorities, or a single <i>weight 2</i> authority.
      </p>
      <h5>Adding or modifying permissions</h5>
      <p>
        <u>Threshold</u> is the required sum of permission weights to execute an action.
      </p>
      <p>
        <u>Permission</u> is the name of the new permission.
      </p>
      <p>
        <u>Parent</u> is the parent permission of the new permission.
      </p>
      <p>
        <u>Authority</u> can be an actor authority in the format <i>accountname@permission</i>, a public key, or a delay in seconds.
      </p>
      <p>
        <u>Weight</u> is how much weight this Authority lends to the Threshold.
      </p>
      <p>
        You can add or remove rows as required to meet your multisig requirements.
      </p>
      <h5>Remove a permission</h5>
      <p>
        Specify the <u>Permission</u> and <u>Parent</u>, and leave a single <u>Authority</u> row empty with the default <u>Weight</u> of 1.
      </p>
    </div>
  );
};

export default ComplexPermissions;
