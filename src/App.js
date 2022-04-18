import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Blogs from "./Component/Blogs/Blogs";
import Checkout from "./Component/Checkout/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Notfound from "./Component/Notfound/Notfound";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Services from "./Component/Services/Services";
import Signup from "./Component/Signup/Signup";


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/checkout" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<Notfound/>}/>

    </Routes>
    </>
  );
}

export default App;
