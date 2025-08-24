import { Box, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "../redux/cartSlice";

export default function MyOrders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.cart) || [];

  const handleReturn = () => {
    navigate("/catalog");
  };

  return (
    <div style={{ margin: "9%" }}>
      <h2 style={{ color: "rgb(32, 105, 189)", fontSize: "30px" }}>
        Cart Items
      </h2>
      <Button
        onClick={handleReturn}
        variant="contained"
        sx={{ marginBottom: 2 }}
      >
        Back
      </Button>

      <Grid container spacing={3}>
        {cartitems.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          cartitems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "190px", height: "250px", objectFit: "cover" }}
                />
                <Box mt={2}>
                  <h4>{item.name}</h4>
                  <h4>₹{item.price}</h4>
                  <p>{item.description}</p>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(removefromCart({ id: item.id }))}
                  >
                    Remove
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
