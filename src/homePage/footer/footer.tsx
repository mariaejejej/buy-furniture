import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import styles from './footer.module.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
export const Footer = () => {
    return (
        <Box
            sx={{
                // flexGrow: 1,
                // justifyContent: "center",
                // display: "flex",
                // mb: 2
            }}
            className={styles.container}
        >
            <div className={styles.linksContainer}>


                <Link
                    component="button"
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/maria-izquierdo31/', "_blank")
                    }}
                >
                    <LinkedInIcon fontSize='large' />
                </Link>
                <Link
                    component="button"
                    onClick={() => {
                        window.open('https://github.com/mariaejejej', "_blank")
                    }}
                >
                    <GitHubIcon fontSize='large' />
                </Link>
            </div>
            <Typography variant="h5" className={styles.contact} marginLeft={'20px'}>
                Contact Me

            </Typography>

            <div className={styles.phone}>
                <CallIcon fontSize='medium' />
                (217) 823 5951
            </div>

            <div className={styles.email}>
                <EmailIcon fontSize='medium' /> 
                mariaizquierdod31@gmail.com
            </div>







        </Box >
    )
}
