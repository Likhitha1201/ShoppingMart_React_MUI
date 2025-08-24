import { Button, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function AddProductBag() {
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
        const prodsData = {
            name: prodName,
            price: prodPrice,
            description: prodDesc,
            image: file
        }
        localStorage.setItem("prdata", JSON.stringify(prodsData));
        alert(`saved ${file}, ${prodName}, ${prodPrice}, ${prodDesc} `)
    }

    useEffect(() => {
        const savedData = localStorage.getItem("prdata");
        if(savedData){
          const data = JSON.parse(savedData);
        console.log("data", data);
        console.log('prodName', data.name);
        console.log('prodDesc', prodDesc);   
        }
       
    })
    
    return (
        <div style={{ margin: "5%", display: "flex", justifyContent: "center" }}>
            <FormControl>
                <h2 style={{ color: 'rgb(32, 105, 189)' }}> Add Bag's New Collections </h2>
                <div className="App">
                    <h5>Add Image:</h5>
                    <input type="file" onChange={handleChange} placeholder="AddImage" />
                    {file && <img src={file} alt="Uploaded preview" />}
                </div> <br />
                <TextField label="Productname" value={prodName} onChange={handleName} /><br />
                <TextField type="number" label="Price" value={prodPrice} onChange={handlePrice} /><br />
                <TextField label="Description" value={prodDesc} onChange={handleDesc} /><br />
                <Button onClick={handleChanges} variant="contained">AddProduct</Button><br />
            </FormControl>
        </div>
    )
}

export default AddProductBag;
