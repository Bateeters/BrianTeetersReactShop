import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"

function App() {
  return (
    <>
      <h1>Shop App Test</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App