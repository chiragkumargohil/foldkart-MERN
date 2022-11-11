import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { LocalOffer } from '@mui/icons-material';

const OfferText = styled(Box)({
    fontSize: 14,
    verticalAlign: 'baseline',
    '& > p': {
        fontSize: 14,
        marginTop: 10
    }
});

const Badge = styled(LocalOffer)({
    marginRight: 10,
    color: '#00CC00',
    fontSize: 15
});

const OfferBold = styled('span')({
    fontWeight: 'bold'
});

const RowText = styled(TableRow)({
    fontSize: 14,
    verticalAlign: 'baseline',
    '& > td': {
        fontSize: 14,
        marginTop: 10
    }
});

function ProductDetail({ product }) {
    const date = new Date(new Date().getTime() + (5*24*60*60*1000));
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const supperCoin = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    return (<>
        <Typography style={{ fontWeight: 'bold' }}>{product.title.longTitle}</Typography>
        <Typography>445 Ratings & 125 Reviews <span><img src={fassured} alt="product" style={{width: 77, marginLeft: 20}} /></span></Typography>
        <Typography style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography style={{ fontWeight: 'bold' }}>Available offers</Typography>
        <OfferText>
            <Typography><Badge /><OfferBold>Bank Offer</OfferBold> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
            <Typography><Badge /><OfferBold>Bank Offer</OfferBold> 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
            <Typography><Badge /><OfferBold>Partner Offer</OfferBold> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
        </OfferText>
        <Table>
            <TableBody>
                <RowText>
                    <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </RowText>
                <RowText>
                    <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </RowText>
                <RowText>
                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                    <TableCell>
                        <span style={{ color: '#2874f0', fontWeight: '500' }}>SPLIPRLItech</span>
                        <Typography>- 7 day seller replacement policy/brand assistance for device issues*</Typography>
                        <Typography>- GST invoice available</Typography>
                    </TableCell>
                </RowText>
                <RowText>
                    <TableCell colSpan={2}><img src={supperCoin} alt="Supercoin" style={{ width: 390 }} /></TableCell>
                </RowText>
                <RowText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </RowText>
            </TableBody>
        </Table>
    </>);
}

export default ProductDetail;