import { Route, Routes } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { ProductDetailPage } from "./views/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
