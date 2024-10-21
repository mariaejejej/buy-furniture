import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HouseIcon from '@mui/icons-material/House';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Badge, ListItemIcon, Tab, Tabs } from '@mui/material';
import { Logo } from './logo/logo.tsx';
import { ImageListC } from './imageList/imageList.tsx';
import { SearchBar } from './search/searchBar.tsx';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './homePage.module.scss'
import classNames from 'classnames';
import FilterTabs from './tabs/filterTabs.tsx';
import { Footer } from './footer/footer.tsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { state } from '../redux/state/state.ts';
const pages = [
    { value: 'allProducts', label: 'All Products' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'dining', label: 'Dining Room' },
    { value: 'office', label: 'Office' }
];

export const HomePage = () => {
    const navigate = useNavigate()
    const itemsShoppingCart = useSelector((state: state) => state.itemsShoppingCart)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [isMobile, setIsMobile] = React.useState(false)

    const handleLogout = () => {
        console.log('close')
        setAnchorElUser(null);
        navigate("/login", { replace: true })
    };

    const handleProfile = () => {
        console.log('close')
        setAnchorElUser(null);
        navigate("/profile")
    };

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    const settings = [
        {
            name: 'Profile',
            icon: <AccountCircleIcon fontSize="small" />,
            onClick: () => handleProfile()
        },
        {
            name: 'Logout',
            icon: <Logout fontSize="small" />,
            onClick: () => handleLogout()
        }];


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static" className={classNames(styles.appBar)}>
                <Toolbar disableGutters className={classNames(styles.toolBar)} >
                    {isMobile ? <>
                        <SearchBar />
                        <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map(({ value, label }) => (
                                    <MenuItem key={value} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>
                        <Logo />
                    </> :
                        <>
                            <Logo />
                            <SearchBar />
                            <FilterTabs />
                        </>
                    }
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(({ name, onClick, icon }) => (
                                <MenuItem key={name} onClick={onClick}>
                                    {icon && <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>}
                                    <Typography textAlign="center">{name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, marginLeft: '15px' }}>
                        <Badge badgeContent={itemsShoppingCart} color="secondary">
                            < ShoppingCartIcon />
                        </Badge>

                    </Box>
                </Toolbar>
            </AppBar>
            <Container>
                <Box sx={{ my: 2 }}>
                    <ImageListC />
                </Box>
            </Container>
            <Footer />
        </>
    );
}
