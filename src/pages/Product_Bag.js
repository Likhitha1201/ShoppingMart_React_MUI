import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ProductIn_Bag } from './ProductIn_Bag';
import { Box, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';
import { addtoView, removefromView } from '../redux/viewSlice';
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Product_Bag() {
  console.log('ProductIn_Bag', ProductIn_Bag[0]);
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const handleCart = () => {
    navigate("/catalog")
  }

  const handleReturn = () => {
    navigate("/catalog");
  }

  const [selected, setSelected] = React.useState({});

  const toggleSelect = (item) => {
    setSelected(prev => {
      const newState = { ...prev, [item.id]: !prev[item.id] };
      if (!prev[item.id]) {
        dispatch(addtoView(item));
      }
      else {
        dispatch(removefromView(item.id));
      }
      return newState;
    })
  }


  return (
    <div style={{ padding: "15%" }}>
      <h2 style={{ color: 'rgb(32, 105, 189)' }}>Casual Bags</h2>
      <Button onClick={handleReturn} variant='contained'>Back</Button>
      <Grid container spacing={3} sx={{ mt: 2}}>
        {ProductIn_Bag.map((item) => (
          <Grid item xs={12} sm={6} mb={4} lg={2} padding={2} borderRadius={"20%"}>
            <Paper elevation={2}>
              <Box  sx={{ 
                border: "1px solid #ddd", 
                borderRadius: "12px", 
                p: 2, 
                textAlign: "center",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
              }}>
                <ImageListItem key={item.image}>
                <img src={item.image || "/images/mainProducts/imageBag.png"} alt={item.name} style={{ width: "190px", height: "250px", gap: '40px', padding: "4px" }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/mainProducts/imageBag.png"
                  }} />
                  <Box className="box" style={{padding:'10%'}}>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <p>{item.description}</p>
                  <Box>
                    <Button
                    style={{
                      color: selected[item.id] ? "rgba(210, 29, 171, 1)" : "rgb(32, 105, 189)"
                    }}
                    onClick={() => toggleSelect(item)}
                  >
                    {selected[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </Button>
                  <Button onClick={() => dispatch(addtoCart({ id: item.id, image: item.image, name: item.name, price: item.price, description: item.description }))} variant='contained'>AddCart</Button>
                  </Box>                  
                </Box>
              </ImageListItem>
              </Box>
              
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

