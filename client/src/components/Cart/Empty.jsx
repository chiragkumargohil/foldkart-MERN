import { Typography, Box, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 80%;
    height: 65vh;
    background: #fff;
    margin: 80px auto;
    text-align: center;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '20%'
});

const Shopping = styled(Button)({
    borderRadius: 2,
    marginTop: 12,
    fontWeight: '500'
});


const Empty = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const navigate = useNavigate();

    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
            <Shopping variant="contained" onClick={() => navigate('/')}>Continue Your Shopping</Shopping>
        </Component>
    )
}

export default Empty;