import { Box, CardActions, CardContent, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <Box margin={20} display={"flex"} justifyContent={"center"}>
            <Grid container spacing={2} xs={12} sm={6} md={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <CardActions>
                        <img src="./images/mainProducts/adminUser.png" alt="admin"style={{borderRadius:"50%"}}className="admin"/>
                    </CardActions>
                    <CardContent>
                        <h2>
                            Name: Rachuu<br />
                            Gmail: rachu@gmail.com
                        </h2>
                        <h3><small style={{ color: "GrayText" }}>As a admin user you can add the products for shippment.. </small></h3>
                        <h4><Link to={"/addProduct"}>AddProductToWomenCart</Link></h4>
                        <h4><Link to={"/addProductMen"}>AddProductToMenCart</Link></h4>
                        <h4><Link to={"/addProductBag"}>AddProductToBagCart</Link></h4>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}