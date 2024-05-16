import React from 'react'
import { Button, Card, CardContent, CardHeader, Grid, TextField, Toolbar, Typography } from '@mui/material'
import styles from './loginContainer.module.scss'
import { Login } from './login.tsx'
import { Logo } from '../homePage/logo/logo.tsx'
import classNames from 'classnames'
import { Container } from '../container.tsx'

export const LoginContainer = () => {
    return (
        <Container title={'Login'}>
            <Login />
        </Container>

    )
}
