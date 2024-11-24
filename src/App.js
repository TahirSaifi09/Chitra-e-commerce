
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./app/index";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
