import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { addToCart } from '../../redux/actions/cartActions.js';
import BuyNowDialog from '../Cart/BuyNowDialog.jsx';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)({
	width: '46%',
    borderRadius: 2,
    color: '#fff'
});

const ActionItem = ({ product }) => {
    const [quantity] = useState(1);
    const [openNow, setOpenNow] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = product;
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    };

    const buyNow = () => {
        setOpenNow(true);
    };

	return (<>
		<LeftContainer>
			<Image src={product.detailUrl} alt="product" />
            <Box style={{ display: 'flex', justifyContent: 'space-evenly', padding: 2 }}>
                <StyledButton style={{marginRight: 10, background: '#ff9f00'}} variant="contained" onClick={() => addItemToCart()}><Cart />Add to Cart</StyledButton>
                <StyledButton style={{background: '#fb641b'}} variant="contained" onClick={() => buyNow()}><Flash /> Buy Now</StyledButton>
            </Box>
		</LeftContainer>
        <BuyNowDialog openNow={openNow} setOpenNow={setOpenNow} />
        </>
	);	
};

export default ActionItem;