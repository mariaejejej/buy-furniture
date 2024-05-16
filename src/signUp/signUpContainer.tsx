import React from 'react'
import { Logo } from '../homePage/logo/logo.tsx'
import { SignUp } from './signUp.tsx'
import styles from '../login/loginContainer.module.scss'
import { Link as ReactRouterLink } from 'react-router-dom';
import { Container } from '../container.tsx'
import { Link } from '@mui/material';

export const SignUpContainer = () => {
    return (

        <Container title={
            

                "Sign up"
                
            

        }>

            <SignUp />

        </Container>







    )
}
