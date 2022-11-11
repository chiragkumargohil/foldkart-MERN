import { useState } from 'react';
import { styled, Dialog, DialogContent, Box, Button, TextField, Typography } from '@mui/material';

import { authenticateLogIn, authenticateSignUp } from '../../service/api';

const LeftSide = styled(Box)(({theme}) => ({
    width: '40%',
    height: '100%',
    padding: '40px 33px',
    background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat',
    '& > h5': {
        color: '#fff',
        fontWeight: '600'
    },
    '& > p': {
        color: '#dbdbdb',
        fontSize: 18
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const RightSide = styled(Box)({
    padding: '56px 35px',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    overflow: 'auto',
    '& > div': {
        marginBottom: 16,
        // width: '100%'
    },
    '& > button': {
        margin: '12px 0'
    }
});

const LoginBTN = styled(Button)({
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: 2
});

const RequestOTP = styled(Button)({
    textTransform: 'none',
    background: '#fff',
    color: '#2874f0',
    fontSize: 15,
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: 2,
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)'
});

const Text = styled(Typography)({
    color: '#878787',
    fontSize: 12
});

const CreateAccount = styled(Typography)({
    margin: 'auto 0 5px 0',
    textAlign: 'center',
    color: '#2874f0',
    fontWeight: '600',
    fontSize: 14,
    cursor: 'pointer'
});

const Error = styled(Typography)({
    fontSize: 10,
    color: '#ff6161',
    marginTop: 10,
    fontWeight: 600
});

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you\'re new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
};

const signUpInitialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const logInInitialValues = {
    username: '',
    password: ''
};

const LoginDialog = ({ open, setClicks, setAccount }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignUp] = useState(signUpInitialValues);
    const [login, setLogIn] = useState(logInInitialValues);
    const [error, setError] = useState(false);
    const [signError, setSignError] = useState(false);
    const [existError, setExistError] = useState(false);

    function closeDialog() {
        setClicks(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
        setSignError(false);
        setExistError(false);
    }

    function toggleSignUp() {
        toggleAccount(accountInitialValues.signup);
    }

    function toggleLogIn() {
        toggleAccount(accountInitialValues.login);
    }

    const onInputChange = (event) => {
        setSignUp({ ...signup, [event.target.name]: event.target.value });
    };

    const signUpUser = async () => {
        let response = await authenticateSignUp(signup);
        console.log(response.status);
        if (response.status === 200) {
            setSignError(false);
            setExistError(false);
            closeDialog();
            setAccount(signup.username);
        } else if (response.status === 401) {
            setSignError(false);
            setExistError(true);
        } else {
            setExistError(false);
            setSignError(true);
        }
    };

    const onValueChange = (event) => {
        setLogIn({ ...login, [event.target.name]: event.target.value });
    };

    const logInUser = async () => {
        let response = await authenticateLogIn(login)
        if (!response) {
            setError(true);
        } else {
            setError(false);
            closeDialog();
            setAccount(login.username);
        }
    };

    return (
        <Dialog open={open} onClose={() => closeDialog()} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <DialogContent style={{ maxWidth: '675px', height: '528px', padding: 0 }}>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <LeftSide>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </LeftSide>
                    {account.view === 'login' ?
                        <RightSide>
                            <TextField variant='standard' onChange={(event) => onValueChange(event)} name='username' label='Enter Username' />
                            <TextField variant='standard' type="password" onChange={(event) => onValueChange(event)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            { error && <Error>Please enter valid Username or Password</Error> }
                            <LoginBTN style={{ background: '#FB641B', color: '#fff' }} onClick={() => logInUser()}>Login</LoginBTN>
                            {/* <Typography style={{ textAlign: 'center', fontSize: 14, color: '#878787' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP> */}
                            <CreateAccount onClick={() => toggleSignUp()}>New to Flipkart? Create an account</CreateAccount>
                        </RightSide>
                        :
                        <RightSide>
                            <TextField required={true} variant='standard' onChange={(event) => onInputChange(event)} name='name' label='Enter Name' />
                            <TextField required={true} variant='standard' onChange={(event) => onInputChange(event)} name='username' label='Enter Username' />
                            <TextField required={true} variant='standard' onChange={(event) => onInputChange(event)} name='email' type="email" label='Enter Email' />
                            <TextField variant='standard' onChange={(event) => onInputChange(event)} name='phone' type="number" label='Enter Mobile number' />
                            <TextField required={true} variant='standard' onChange={(event) => onInputChange(event)} name='password' type="password" label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            { existError && <Error>Username already exists</Error> }
                            { signError && <Error>Something went wrong! Try again with all the mandatory fields.</Error> }
                            <LoginBTN style={{ background: '#FB641B', color: '#fff' }} onClick={() => signUpUser()}>Continue</LoginBTN>
                            <RequestOTP onClick={() => toggleLogIn()}>Existing User? Log in</RequestOTP>
                        </RightSide>
                    }

                </Box>
            </DialogContent>
        </Dialog>);
}

export default LoginDialog;