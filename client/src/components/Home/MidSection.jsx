import { Grid, styled } from "@mui/material";
import { covidURL, imageURL } from "../../constant/data";

const Wrapper = styled(Grid)({
    display: 'flex',
    margin: '10px 0',
    justifyContent: 'space-around'
});

const Image = styled('img')(({ theme }) => ({
    display: 'flex',
    margin: '10px 0',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

function MidSection() {
    return (<>
        <Wrapper lg={12} md={12} xs={12} container>
            {
                imageURL.map((image) => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt="banner" style={{ width: '100%' }} />
                    </Grid>
                ))
            }
        </Wrapper>
        <Image src={covidURL} alt="covid" />
    </>);
}

export default MidSection;