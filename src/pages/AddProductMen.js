import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addtoView, removefromView } from "../redux/viewSlice";

function AddProductMen() {
    const [prodName, setProductName] = useState("");
    const [prodPrice, setProdPrice] = useState();
    const [prodDesc, setProdDesc] = useState("");

    const [file, setFile] = useState(null);

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleName = (e) => {
        setProductName(e.target.value);
    }

    const handlePrice = (e) => {
        setProdPrice(e.target.value);
    }

    const handleDesc = (e) => {
        setProdDesc(e.target.value);
    }

    const handleChanges = (e) => {
        const proddata = {
            name: prodName,
            price: prodPrice,
            description: prodDesc,
            image: file
        }
        localStorage.setItem("pData", JSON.stringify(proddata));
        alert(`saved ${file}, ${prodName}, ${prodPrice}, ${prodDesc} `)
    }

    useEffect(() => {
        const savedData = localStorage.getItem("pData");
        if (savedData) {
            const datas = JSON.parse(savedData);
            console.log("data", datas);
            console.log('prodName', datas.name);
            console.log('prodDesc', prodDesc);
        }
    })

    return (
        <div style={{ margin: "5%", display: "flex", justifyContent: "center" }}>
            <FormControl>
                <h2 style={{ color: 'rgb(32, 105, 189)' }}> Add Men's New Collections of </h2>
                <div className="App">
                    <h5>Add Image:</h5>
                    <input type="file" onChange={handleChange} placeholder="AddImage" />
                    {file && <img src={file} alt="Uploaded preview" />
                    }
                </div> <br />
                <TextField label="Productname" value={prodName} onChange={handleName} /><br />
                <TextField type="number" label="Price" value={prodPrice} onChange={handlePrice} /><br />
                <TextField label="Description" value={prodDesc} onChange={handleDesc} /><br />
                <Button onClick={handleChanges} variant="contained">AddProduct</Button><br />
            </FormControl>
        </div>
    )
}

export default AddProductMen;
