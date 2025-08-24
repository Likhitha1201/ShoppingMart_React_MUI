import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import MyOrders from "./pages/MyOrders";
import ContactUs from "./pages/ContactUs";
import Product_Bag from "./pages/Product_Bag";
import Product_Wmen from "./pages/Product_Wmen";
import Product_Mmen from "./pages/Product_Mmen";
import Register from "./pages/Register";
import { Log } from "./pages/Log";
import AddProduct from "./pages/AddProduct";
import AddProductMen from "./pages/AddProductMen";
import Profile from "./pages/Profile";
import View from "./pages/View";
import EndRestart from "./pages/EndRestart";
import Careers from "./pages/Careers";
import AddProductBag from "./pages/AddProductBag";

function App() {
  return (    
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/_Bag" element={<Product_Bag />} />
      <Route path="/catalog/_Wmen" element={<Product_Wmen />} />
      <Route path="/catalog/_Mmen" element={<Product_Mmen />} />
      <Route path="/login" element={<Log />} />
      <Route path="/logout" element={<EndRestart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/addProductBag" element={<AddProductBag />} />
      <Route path="/addProductMen" element={<AddProductMen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/order" element={<MyOrders/> } />
      <Route path="/contact" element={<ContactUs/> } />
      <Route path="/view" element={<View/> } />
      <Route path="/careers" element={<Careers/> } />
      </Routes>
      <Content/>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
