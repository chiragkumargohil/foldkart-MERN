import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";

import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from './ActionItem';
import ProductDetail from "./ProductDetail";

const Component = styled(Box)({
    marginTop: 55,
    background: '#f2f2f2'
});

const Container = styled(Grid)(({ theme }) => ({
    background: '#fff',
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
}));

const RightContainer = styled(Grid)(({ theme }) => ({
    marginTop: 40,
    padding: '0 80px 0 25px',
    '& > p': {
        marginTop: 10
    },
    [theme.breakpoints.down('lg')]: {
        marginTop: 10,
        padding: '0 36px',
    }
}));

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { product, loading } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id));
    }, [dispatch, id, product, loading]);

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }
        </Component>
    );
};

export default DetailView;