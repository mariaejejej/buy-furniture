import { Button, Tab, Tabs } from '@mui/material'
import React from 'react'

import logo from './logoH.png';
import Account from '../account/account.tsx';
import styles from './homePage.module.scss';
import { Bar } from './bar.tsx';
import { ImageListC } from './imageList/imageList.tsx';

export const HomePage = () => {
  return (


    <div>
      <Bar />
     
      {/* <ImageListC /> */}
      </div>
  )
}
