import { useState } from "react";
import { ButtonGroup, Button, styled } from "@mui/material";

const CountButton = styled(Button)({
    fontWeight: 'bold'
});

const BTNGroup = ({ item }) => {
    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count => count + 1 );
    };

    const decrease = () => {
        setCount(count => count - 1 );
    };

    return (
        <ButtonGroup style={{marginTop: 30}}>
            <CountButton onClick={() => decrease()} disabled={count === 1}>-</CountButton>
            <Button style={{ color: '#000' }} disabled>{count}</Button>
            <CountButton onClick={() => increase()} disabled>+</CountButton>
        </ButtonGroup>
    );
}

export default BTNGroup;