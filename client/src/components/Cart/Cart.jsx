import { Box, Grid, styled, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import { addToCart, resetCart } from "../../redux/actions/cartActions";
import Empty from "./Empty";
import BuyNowDialog from "./BuyNowDialog";

const CartPage = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        padding: '15px 25px'
    }
}));

const LeftBox = styled(Grid)(({ theme }) => ({
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
    [theme.breakpoints.up('lg')]: {
        maxWidth: '74%'
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const RightSide = styled(Grid)({
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
    height: 'fit-content'
});

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    border-top: 2px solid #f0f0f0;
`;

const PlaceOrder = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

function Cart() {
    const [openNow, setOpenNow] = useState(false);
    const {cartItems} = useSelector(state => state.getCart);
    const { id } = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const buyNow = () => {
        setOpenNow(true);
        dispatch(resetCart());
    };

    return (<Box>
        { cartItems.length ?
        <CartPage container>
            <LeftBox item lg={9} md={9} sm={12} xs={12}>
                <Box style={{padding: '25px 24px', borderBottom: '2px solid #f0f0f0' }}>
                    <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                </Box>
                {
                    cartItems.map((cartItem, index) => {
                        return (
                            <CartItem key={index} item={cartItem} />
                        );
                    })
                }
                <BottomWrapper>
                    <PlaceOrder variant="contained" onClick={() => buyNow()}>Place Order</PlaceOrder>
                </BottomWrapper>
            </LeftBox>
            <RightSide item lg={3} md={3} sm={12} xs={12}>
                <PriceDetails cartItems={cartItems}/>
            </RightSide>
        </CartPage>
        :
        <Empty />}
        <BuyNowDialog openNow={openNow} setOpenNow={setOpenNow} />
    </Box>);
}

export default Cart;