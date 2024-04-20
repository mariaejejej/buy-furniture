import React from 'react'
import { Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import styles from './loginContainer.module.scss'
import { Login } from './login.tsx'

export const LoginContainer = () => {
    return (

        <div style={{
            display: 'grid',
            placeItems: 'center',
            height: '100vh',
        }}>
            <Card className={styles.cardContainer}>
                <CardHeader
                    className={styles.cardHeader}
                    title="Login"
                    subheader={new Date().toDateString()}
                />
                <CardContent>
                    <Login />
                </CardContent>
            </Card>
        </div>

    )
}
