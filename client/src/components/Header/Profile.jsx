import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import { useState } from "react";
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)({
    marginTop: 5
});

const Logout = styled(Typography)({
    fontSize: 14,
    marginLeft: 20
});

const UserData = styled(Typography)(({theme}) => ({
    marginRight: 40,
    [theme.breakpoints.down('sm')]: {
        margin: '20px 0 10px'
    }
}));

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
    };

    return (
        <>
            <Box onClick={handleClick}><UserData>{account}</UserData></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logout(); }}>
                    <PowerSettingsNew fontSize="small" color="primary" />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    );
};

export default Profile;