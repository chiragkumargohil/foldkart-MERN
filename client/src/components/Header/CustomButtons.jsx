import { useContext, useState } from 'react';
import { Box, Button, Typography, styled, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginDialog from '../Login/LoginDialog';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    marginRight: '8vw',
    alignItems: 'center',
    '& > *': {
        textDecoration: 'none',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 14,
        color: '#fff',
        display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginRight: 0,
        marginInline: 'auto',
        '& > *': {
            textAlign: 'center',
            fontSize: 14,
            color: '#000',
            display: 'flex',
        }
    }
}));

const CartContainer = styled(Link)({
    display: 'flex',
    marginRight: 0,
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer'
});

const LoginButton = styled(Button)(({theme}) => ({
    color: '#2874f0',
    background: '#fff',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: 2,
    boxShadow: 'none',
    fontWeight: '600',
    height: 32,
    marginRight: 40,
    [theme.breakpoints.down('sm')]: {
        margin: '20px 0 10px',
        background: '#2874f0',
        color: '#fff !important'
    }
}));

const ProfileBTN = styled(Profile)(({theme}) => ({
    marginRight: 40
}));

function CustomButtons() {
    const [dialog, setDialog] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    const { cartItems } = useSelector(state => state.getCart);

    function openDialog() {
        setDialog(true);
    }

    return (
        <Wrapper>
            {
                account ?
                <ProfileBTN account={account} setAccount={setAccount} />
                :
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <CartContainer to="/cart">
                <Badge badgeContent={cartItems.length} color="primary" style={{marginRight:8}}>
                    <ShoppingCartIcon />
                </Badge>
                <Typography>Cart</Typography>
            </CartContainer>
            <LoginDialog open={dialog} setClicks={setDialog} setAccount={setAccount} />
        </Wrapper>
    );
}

export default CustomButtons;