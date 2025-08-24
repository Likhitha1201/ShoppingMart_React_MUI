import {  Box, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
    const[add, setAdd]=  useState("");

    const handleChange = (e) =>{
        setAdd(e.target.value);
    }

    const handleSubmit = (e) => {
        localStorage.setItem("contactData", JSON.stringify(add));
        alert(`saved ${add} sucessfully..!!`)
        window.location.reload();
    }


    return (
          
    <Box margin={"10%"} padding={"70px"}>
    <h1 style={{display:"flex", color:'rgb(32, 105, 189)' }}>How we can help you..?</h1> <br />
             <TextField style={{display:"flex", width:"40%"}} onChange={handleChange} value={add} variant="standard" label="Enter Your concern">Enter Your concern</TextField><br />
             <Button style={{display:"flex"}} onClick={(e) =>handleSubmit(e)} variant="contained">submit</Button><br />
             <Link to={"/login"} style={{display:"flex"}}>LogIn</Link><br />
             <Link to={"/register"} style={{display:"flex"}}>Register</Link>
    </Box>
    )
}