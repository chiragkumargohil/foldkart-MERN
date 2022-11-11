import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constant/data';

const NavigationStyle = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px auto 0 !important',
    maxWidth: 1280,
    overflowX: 'overlay'
});

const Container = styled(Box)({
    textAlign: 'center',
    padding: '12px 8px'
});

const Text = styled(Typography)({
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'inherit'
});

function NavBar() {
    return (
        <NavigationStyle>
            {
                navData.map((item, index) => {
                    return (
                        <Container key={index}>
                            <img src={item.url} alt="offers" width="64px" />
                            <Text>{item.text}</Text>
                        </Container>
                    );
                })
            }
        </NavigationStyle>
    );
}

export default NavBar;