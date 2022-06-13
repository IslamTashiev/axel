import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./views/AboutPage";
import { HomePage } from "./views/HomePage";
import { ProductDetailPage } from "./views/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product/:id' element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
