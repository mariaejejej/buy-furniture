import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import { Icon, SvgIcon, Typography } from '@mui/material';
import logo from '../../MT.png';

export const Logo = ({ isLaptop = false }) => {

    return (isLaptop ? (<>
        
        
    <HouseIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '40px' }} /> 
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Maria Tapscott
            </Typography>
        </>) : <>

            <HouseIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '40px' }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Maria Tapscott
            </Typography>
        </>)
}
