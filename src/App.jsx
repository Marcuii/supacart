import { useState } from 'react'
import Navbar from './component/Navbar'
import Items from './component/Items'

function App() {
  const [products, setProducts] = useState([
    { id: 0, name: 'Shipcy', price: 100, items: 1 },
    { id: 1, name: 'Pesi', price: 200, items: 1 },
    { id: 2, name: 'Molto', price: 300, items: 1 },
    { id: 3, name: 'Kranshy', price: 400, items: 1 },
    { id: 4, name: 'Cigaretes', price: 500, items: 1 }
  ])

  const [addedProducts] = useState([
    { id: 0, name: 'Shipcy', price: 100, items: 1 },
    { id: 1, name: 'Pesi', price: 200, items: 1 },
    { id: 2, name: 'Molto', price: 300, items: 1 },
    { id: 3, name: 'Kranshy', price: 400, items: 1 },
    { id: 4, name: 'Cigaretes', price: 500, items: 1 }
  ])

  const [theme, setTheme] = useState(false)

  const reset = () => {
    setProducts(products.map(product => ({...product, items: product.items = 1})))
  }

  const increment = (id) => {
    setProducts(products.map(product => product.id === id ? {...product, items: product.items + 1} : product))
  }

  const decrement = (id) => {
    setProducts(products.map(product => product.id === id ? {...product, items: product.items - 1} : product))
  }

  const deleteItem = (id) => {
    setProducts(products.map(product => product.id === id ? {...product, items: product.items = 0} : product))
  }

  const deleteAll = () => {
    setProducts(products.map(product => ({...product, items : product.items = 0})))
  }

  const switchTheme = () => {
    setTheme(!theme)
  }

  return (
    <div>
      <Navbar addedProducts={addedProducts} products={products} increment={increment} theme={theme} />
      <Items products={products} reset={reset} deleteAll={deleteAll} increment={increment} decrement={decrement} deleteItem={deleteItem} theme={theme} switchTheme={switchTheme} />
    </div>
  )
}

export default App
