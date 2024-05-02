import { Card, CardContent, CardHeader, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Logo } from '../homePage/logo/logo.tsx'
import { SignUp } from './signUp.tsx'
import styles from '../login/loginContainer.module.scss'

export const SignUpContainer=() =>{
  return (
    <>
    <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Logo isLaptop />
        </Toolbar>
    </Container>
    <div style={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
    }}>
        <Card className={styles.cardContainer}>
            <CardHeader
                className={styles.cardHeader}
                title="Sign up"
            />
            <CardContent>
            <SignUp />
            </CardContent>
        </Card>
    </div>


</>
  )
}
