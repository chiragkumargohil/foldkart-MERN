import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)({
    display: 'flex',
    alignItems: 'center'
});

const LeftBox = styled(Box)(({ theme}) => ({
    width: '82.5%',
    [theme.breakpoints.down('lg')]: {
        width: '100%'
    }
}))
const RightBox = styled(Box)(({theme}) => ({
    marginTop: 10,
    width: '17%',
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    }
}));

function MidSlide({ products, title, timer }) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Component>
            <LeftBox>
                <Slide products={products} title={title} timer={timer} />
            </LeftBox>
            <RightBox>
                <img src={adURL} alt="ad" style={{ maxHeight: 375, width: '100%' }} />
            </RightBox>
        </Component>
    );
}

export default MidSlide;