import { Card, CardContent, CardHeader, Toolbar } from '@mui/material'
import React from 'react'
import { Logo } from './homePage/logo/logo.tsx'
import styles from './login/loginContainer.module.scss'
import stylesContainer from './container.module.scss'


export const Container = ({children, title}) => {
    return (
        <>
           <div  className={stylesContainer.logoContainer}>
                <Toolbar disableGutters>
                    <Logo/>
                </Toolbar>
            </div>
            <div style={{
                display: 'grid',
                placeItems: 'center',
                height: '80vh',
                borderTop: 'solid 1px #d1d1d6'
            }}>
                  <Card
                    style={{
                        height: "fit-content"
                    }}
                    className={styles.cardContainer}>
                    <CardHeader
                        className={styles.cardHeader}
                        title={title}
                    />
                    <CardContent>
                        {children}
                    </CardContent>
                    </Card>
            </div>
        </>
    )
}
