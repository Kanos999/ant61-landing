import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProductVariantsPage } from './pages/ProductVariantsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { BeaconPage } from './pages/BeaconPage'
import { AboutPage } from './pages/AboutPage'
import { DocsPage } from './pages/DocsPage'
import { NewsPage } from './pages/NewsPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/beacon" element={<BeaconPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/products" element={<ProductVariantsPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App
