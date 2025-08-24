import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import { useNavigate } from "react-router-dom";
import ContactUsIcon from "@mui/icons-material/ContactSupportSharp"
import CareersIcon from "@mui/icons-material/Work";

export default function Footer() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const returnCatogary = () => {
    navigate("/catalog")
  }

  const returnContact = () => {
    navigate("/contact")
  }
  
  const returnCareers = () => {
    navigate("/careers")
  }

  return (

    <BottomNavigation className="footer" color="red" sx={{ background: "rgb(32, 105, 189)", color:"red", position: "fixed", bottom: "0%", width: "100%" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}>
      <BottomNavigationAction onClick={() => returnCatogary()} label="Category" icon={<CategoryIcon />} />
      <BottomNavigationAction onClick={() => returnCareers()} label="Careers" color="black" icon={<CareersIcon />} />
      <BottomNavigationAction onClick={() => returnContact()} label="Contact Us" icon={<ContactUsIcon />} />
    </BottomNavigation>
  )
}
