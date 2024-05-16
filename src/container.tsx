import { Card, CardContent, CardHeader, Container as ContainerMUI, Toolbar } from '@mui/material'
import React from 'react'
import { Logo } from './homePage/logo/logo.tsx'
import styles from './login/loginContainer.module.scss'
import classNames from 'classnames'

export const Container = ({children, title}) => {
    return (
        <>
            <ContainerMUI maxWidth="xl" classes={{ root: classNames(styles.logo) }}>
                <Toolbar disableGutters>
                    <Logo isLaptop />
                </Toolbar>
            </ContainerMUI>
            <div style={{
                display: 'grid',
                placeItems: 'center',
                height: '80vh',
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
