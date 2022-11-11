import { Box, Typography, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";

import { flipSubstring } from "../../utils/substring";
import { removeFromCart } from "../../redux/actions/cartActions.js";
import BTNGroup from "./BTNGroup";

const Component = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '40px 36px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: '72px 0'
    }
}));

const LeftSide = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const RightSide = styled(Box)(({theme}) => ({
    marginLeft: 52,
    [theme.breakpoints.down('sm')]: {
        margin: '36px 14px 0'
    }
}));

const Remove = styled(Button)({
    marginTop: 16,
    padding: 0,
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
});

function CartItem({ item }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (<>
        <Component>
            <LeftSide>
                <img src={item.url} alt={item.title.shortTitle} style={{ height: 125, width: 125 }}  />
                <BTNGroup item={item} />
            </LeftSide>
            <RightSide>
                <Typography style={{ fontWeight: 'bold' }}>{flipSubstring(item.title.longTitle)}</Typography>
                <Typography style={{color: '#878787', margin: '2px 0' }}>Seller SPLIPRLItech <span><img src={fassured} style={{ width: 70, marginLeft: 6 }} /></span></Typography>
                <Typography style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: 18 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>&nbsp;&nbsp;&nbsp;
                </Typography>
                <Remove onClick={() => handleRemove(item.id)}>Remove</Remove>
            </RightSide>
        </Component>
    </>);
}

export default CartItem;