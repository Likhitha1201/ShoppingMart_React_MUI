import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ProductIn_Mmen } from './ProductIn_Mmen';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';
import { addtoView, removefromView } from '../redux/viewSlice';
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function Product_Mmen() {
  console.log('ProductIn_Mmen', ProductIn_Mmen[0]);
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const handleReturn = () => {
    navigate("/catalog");
  }

const[selected, setSelected]= React.useState({});
    const toggleSelect = (item) =>{
        setSelected(prev =>{
            const newState = {...prev, [item.id] : !prev[item.id]};
            if(!prev[item.id]){
                dispatch(addtoView(item));
            }
            else{
                dispatch(removefromView(item.id));
            }
            return newState;
        })
    }

  return (
    <div style={{ margin: "20%" }}>
      <h2 style={{ color: 'rgb(32, 105, 189)'}}>Casual OutFit</h2>
      <Button onClick={handleReturn} variant='contained'>Back</Button>
      <ImageList cols={4} style={{ width: "90%", padding: "5%", gap: "50px" }}>

  {ProductIn_Mmen.map((item) => (
  <ImageListItem key={item.id}>
    <img
      src={item.image || "/images/mainProducts/imageMen.png"}
      alt={item.name}
      width={200}
      onError={(e) => {
        e.currentTarget.onerror = null; 
        e.currentTarget.src = "/images/mainProducts/imageMen.png";
      }}
    />
    <h3>{item.name}</h3>
    <p>₹{item.price}</p>
    <p>{item.description}</p>
    <Button
              style={{
                color: selected[item.id] ? "rgba(210, 29, 171, 1)" : "rgb(32, 105, 189)"
              }}
              onClick={() => toggleSelect(item)}
            >
              {selected[item.id] ? <FavoriteIcon /> : <FavoriteIcon />}
    </Button>
     <Button onClick={()=>dispatch(addtoCart({id:item.id, name:item.name, image:item.image, price: item.price, description: item.description}))} variant='contained'>AddCart</Button>
  </ImageListItem>
))}
      </ImageList>
    </div>
  );
}
