import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Carts from "./pages/productslist/cart/Carts";
import ProductsDetails from "./pages/singleprodct/ProductsDetails";
//import ProductsLists from "./pages/productslist/ProductsLists";
import FilterByCategory from "./pages/productslist/FilterByCategory";
import SearchProductLists from "./pages/productslist/SearchProductLists";
import FilterProductDetails from "./pages/singleprodct/FilterProductDetails";
import CheckOut from "./pages/checkout/checkOut";
import Ordered from "./pages/UserOrder/Ordered";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const item = useSelector((state) => state);
  console.log(item);
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart/:id" element={<Carts />} />
      <Route exact path="/products/:id" element={<ProductsDetails />} />
      <Route exact path="productLists/products/:id" element={<FilterProductDetails />} />
      <Route exact path="/productLists/:cat" element={<FilterByCategory />} />
      <Route exact path="/searchLists/:cat" element={<SearchProductLists />} />
      <Route exact path="/user/order" element={<Ordered />} />
      <Route exact path="/checkout" element={<CheckOut />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/*" element={<Home />} />



    </Routes>
  );
}

export default App;
