import React from 'react'
import { Button, Card, CardContent, CardHeader, Container, Grid, TextField, Toolbar, Typography } from '@mui/material'
import styles from './loginContainer.module.scss'
import { Login } from './login.tsx'
import { Logo } from '../homePage/logo/logo.tsx'

export const LoginContainer = () => {
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
                        title="Login"
                    />
                    <CardContent>
                        <Login />
                    </CardContent>
                </Card>
            </div>


        </>

    )
}
