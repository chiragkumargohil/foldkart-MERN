import { Box, Button, Divider, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import TimerIcon from '@mui/icons-material/Timer';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)({
    marginTop: 10,
    backgroundColor: '#fff'
});

const Deal = styled(Box)({
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center'
});

const Timer = styled(Box)({
    marginLeft: 12,
    display: 'flex',
    alignItems: 'center',
    color: '#212121',
    opacity: '0.6' 
});

const DealText = styled(Typography)({
    fontSize: 18,
    fontWeight: 'bold'
});

const ViewAllButton = styled(Button)({
    marginLeft: 'auto',
    borderRadius: 2,
    backgroundColor: '#2874f0',
    fontSize: 12,
    fontWeight: 'bold'
});

const Image = styled('img')({
    width: 'auto',
    height: 150,
    marginBottom: 12
});

const Text = styled(Typography)({
    fontSize: 16,
    marginTop: 5
});

function Slide({products, title, timer}) {
    const renderer = ({ hours, minutes, seconds }) => {
        return (<Box variant="span">{hours}:{minutes}:{seconds} Left</Box>);
    }

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <TimerIcon />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
            {
                products.map(product => {
                    return (
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <Image src={product.url} alt="product" />
                                <Text style={{ fontWeight: 'bold', color: '#212121' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '0.6' }}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    );
                })
            }
            </Carousel>
        </Component>
    );
}

export default Slide;