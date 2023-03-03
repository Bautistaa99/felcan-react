import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Routes/Home/Home";
import Products from './components/Routes/Products/Products'
import ProductsId from './components/Routes/ProductsId/ProductsId';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<ProductsId />} />


          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
