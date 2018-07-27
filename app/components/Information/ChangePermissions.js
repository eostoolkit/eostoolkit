import React from 'react';

const ChangePermissions = () => {
  return (
    <div>
      <h5>
        <strong>This action has serious consequences</strong>
      </h5>
      <h5>If you don{"'"}t control the permissions you assign - your account becomes IRRECOVERABLE</h5>
      <h5>
        If you assign an ACCOUNT instead of a KEY as a permission you risk breaking your account - be 100% SURE
      </h5>
      <p>You can change active or owner permission or both</p>
      <p>Leave blank any permission you DON{"'"}T want to change</p>
      <p>To change only active permission select youraccount@active for your Scatter identity</p>
      <p>To change any permission select youraccount@owner for your Scatter identity</p>
      <p>
        If you change your active permission you have to update your scatter identity to use this new key pair
      </p>
      <p>
        If you dont have the key pairs you assign to the active permission you will no longer be able send
        transactions
      </p>
    </div>
  )
}

export default ChangePermissions;
