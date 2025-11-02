import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Error404 from "./pages/Error404/Error404"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/error" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App