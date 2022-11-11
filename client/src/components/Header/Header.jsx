import { useState } from 'react';
import { AppBar, Box, Typography, Toolbar, IconButton, Drawer, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)({
    background: '#2874f0',
    height: '55px'
});

const ThisLogo = styled(Link)(({theme}) => ({
    marginLeft: '8vw',
    lineHeight: 0,
    color: '#fff',
    textDecoration: 'none'
}));

const ThisSubHeading = styled(Typography)({
    fontSize: 10,
    fontStyle: 'italic'
});

const ThisPlusIcon = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonsWrapper = styled(Box)(({theme}) => ({
    margin: '0 0 0 auto',
    [theme.breakpoints.down('sm')]:{
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const MyDrawer = styled(Drawer)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const list = () => (
        <Box style={{ width: 250 }}>
            <CustomButtons />
        </Box>
    );

    return (
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <MenuButton color="inherit" onClick={handleOpen}><Menu /></MenuButton>
                <MyDrawer open={open} onClose={() => handleClose()}>{list()}</MyDrawer>
                
                <ThisLogo to='/'>
                    <img src={logoURL} style={{ width: 75 }} alt="logo" />
                    <Box component="span" style={{display: 'flex'}}>
                        <ThisSubHeading>
                            Explore&nbsp;
                            <Box component="span" style={{color: '#ffe500'}}>Plus</Box>
                        </ThisSubHeading>
                        <ThisPlusIcon src={subURL} />
                    </Box>
                </ThisLogo>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </StyledHeader>);
}

export default Header;