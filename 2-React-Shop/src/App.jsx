import React from 'react'
import Header from './components/Header'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import ProductSection from './components/ProductSection'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <CategorySection/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default App
