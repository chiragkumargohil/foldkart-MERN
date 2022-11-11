import { Box, Button, Dialog, DialogContent, Divider, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Text = styled(Typography)({
    fontSize: 16,
    padding: '4px 0'
});

const BuyNowDialog = ({ openNow, setOpenNow }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setOpenNow(false);
        navigate('/');
    };

    return (
        <Dialog open={openNow} maxWidth="sm">
            <DialogContent>
                <Text>Your order has been placed! ;&#41;</Text>
                <Text>Thanks for using the Foldkart - A Flipkart clone!</Text>
                <Divider />
                <Box style={{ paddingTop: 12, textAlign: 'right' }}>
                    <Button variant="contained" onClick={() => handleClick()} style={{ borderRadius: 2 }}>Continue Your Shopping</Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default BuyNowDialog;