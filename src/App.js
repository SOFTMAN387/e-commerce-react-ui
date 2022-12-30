import Home from "./components/home/Home";
import { Route,Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    
    <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart/:id" element={<Cart />} /> */}
       

      </Routes>
  );
}

export default App;
