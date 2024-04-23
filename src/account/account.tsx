import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from '@mui/material';
import styles from './account.module.scss';
const Account=()=> {
  return (

    
        
        <Link href="#" color='inherit' underline="none">
            <div className={styles.container}>
                <ManageAccountsIcon/>
                <span> {'User Preferences'}
                  </span>
            </div>
         
      </Link>
       

  )
}

export default Account