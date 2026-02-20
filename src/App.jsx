import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProductVariantsPage } from './pages/ProductVariantsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductVariantsPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App
