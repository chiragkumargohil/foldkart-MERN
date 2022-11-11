import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { getProducts } from '../../redux/actions/productActions.js';

const ThisSearchBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    marginInline: 14,
    width: '30vw',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        width: '60vw'
    }
}));

const InputSearchBox = styled(InputBase)({
    fontSize: 14,
    backgroundColor: '#fff',
    width: '100%',
    padding: '4px 20px',
});

const ThisSearchIcon = styled(Box)({
    marginLeft: 'auto',
    color: '#2874f0',
    padding: 5
});

const ListWrapper = styled(List)({
    position: 'absolute',
    backgroundColor: '#fff',
    color: '#000',
    marginTop: 40
});

function Search() {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false);
    };

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <ThisSearchBox>
            <InputSearchBox 
                placeholder='Search for products, brands and more' 
                inputProps={{ 'aria-label': 'search' }} 
                onChange={(event) => getText(event.target.value)} 
                value={text}
            />
            <ThisSearchIcon>
                <SearchIcon />
            </ThisSearchIcon>

            {
                text &&
                <ListWrapper hidden={open}>
                    {products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => {
                        return (
                            <ListItem>
                                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setText('')}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>);
                    })}
                </ListWrapper>


            }
        </ThisSearchBox>
    );
}

export default Search;