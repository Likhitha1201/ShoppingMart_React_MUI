import { Box, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removefromView } from "../redux/viewSlice";
import { addtoCart } from "../redux/cartSlice";

export default function View() {
    const navigate = useNavigate("");
    const handleReturn = () => {
        navigate("/catalog");
    }
    const viewitems = useSelector(state => state.view.view)
    console.log(viewitems);
    const dispatch = useDispatch()

    return (
        <div style={{ margin: "10%", flexDirection: "row" }}>
            <Button onClick={handleReturn} variant="contained">Back</Button>
            <h2 style={{ color: " rgb(32, 105, 189)" }}>Favorites</h2>
            <Grid container spacing={2} sx={{ mt: '3%', p: '4%' }}>
                {
                    viewitems.map(item => (
                        <div>    <Paper elevation={3}>
                            <img src={item.image} style={{ width: "180px", height: "230px" }} className="c-image" alt="" />
                            <Paper elevation={3}>
                                <Box style={{ margin: "20%" }}>
                                    <h4>{item.name}</h4>
                                    <h4>₹{item.price}</h4>
                                    <h4>{item.description}</h4>
                                    <Box display={'flex'}  >
                                        <Button variant="contained" style={{ background: "green", margin: "5px", width:'150px', height:'45px' }} onClick={() => dispatch(addtoCart({ image: item.image, id: item.id, name: item.name, price: item.price, description: item.description }))}>BuyNow</Button>
                                        <Button variant="contained" style={{ background: "red", height:'45px', width:'150px' }} onClick={() => dispatch(removefromView({ id: item.id }))}>Remove</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Paper>
                        </div>
                    ))
                }
            </Grid>

        </div>
    )
}


