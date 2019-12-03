import React from 'react'
import ActiveAdmin from './ActiveAdmin';
import DisableAccount from './DisableAccount';
import UpdatePassword from './UpdatePassword';

import "../../App.css";

const Account = ({addAdmin, disableAcc,updatePass}) => {
    return (
      <div >
        <ActiveAdmin addAdmin={addAdmin}/>
        <DisableAccount disableAcc={disableAcc}/>
        <UpdatePassword updatePass={updatePass}/>
      </div>
    );
  }

  export default Account
