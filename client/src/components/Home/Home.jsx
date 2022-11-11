import { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import Banner from './Banner';
import NavBar from './NavBar';
import { getProducts as listProducts } from '../../redux/actions/productActions.js';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const ThisComponent = styled(Box)({
    background: '#f2f2f2',
    padding: 10
});

function Home() {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <ThisComponent>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for You" />
                <Slide products={products} title="Suggested Items" />
                <Slide products={products} title="Top Selection" />
                <Slide products={products} title="Recommanded Items" />
                <Slide products={products} title="Trending Offers" />
                <Slide products={products} title="Season's Top Picks" />
                <Slide products={products} title="Top Deals on Accessories" />
            </ThisComponent>
        </>
    );
}

export default Home;