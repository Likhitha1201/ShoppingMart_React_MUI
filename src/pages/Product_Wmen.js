import * as React from 'react';
import { productsIn_Wmen } from './ProductIn_Wmen';
import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addtoView, removefromView } from '../redux/viewSlice';

export default function Product_Wmen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState({});

  const handleReturn = () => {
    navigate("/catalog");
  };

  const toggleSelect = (item) => {
    setSelected((prev) => {
      const newState = { ...prev, [item.id]: !prev[item.id] };

      if (!prev[item.id]) {
        dispatch(addtoView(item));
      } else {
        dispatch(removefromView(item.id));
      }

      return newState;
    });
  };

  return (
    <div style={{ margin: "19%" }}>
      <h2 style={{ color: 'rgb(32, 105, 189)' }}>Casual OutFit</h2>
      <Button onClick={handleReturn} variant="contained">Back</Button>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {productsIn_Wmen.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Box 
              sx={{ 
                border: "1px solid #ddd", 
                borderRadius: "12px", 
                p: 2, 
                textAlign: "center",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={item.image || "/images/mainProducts/imageWomen.png"}
                alt={item.name}
                style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/mainProducts/imageWomen.png";
                }}
              />

              <Box mt={2}>
                <h3>{item.id}</h3>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <p>{item.description}</p>

                <Button
                  style={{
                    color: selected[item.id] ? "rgba(210, 29, 171, 1)" : "rgb(32, 105, 189)"
                  }}
                  onClick={() => toggleSelect(item)}
                >
                  {selected[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>

                <Button
                  onClick={() =>
                    dispatch(addtoCart({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      price: item.price,
                      description: item.description
                    }))
                  }
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
