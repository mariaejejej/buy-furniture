import { Button, Tab, Tabs } from '@mui/material'
import React from 'react'

import logo from './logo.jpg';
import Account from '../account/account.tsx';
import styles from './homePage.module.scss';

export const HomePage = () => {
  return (


    <div>
      <div className={styles.header}>
        <img src={logo} width='70' height='50' alt="My logo" />
        <Account />
      </div>

      homePage</div>
  )
}
