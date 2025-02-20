import React from 'react'
import Product from './Product'
import { MdOutlineWbSunny, MdNightsStay } from "react-icons/md";

const Items = ({products, reset, deleteAll, increment, decrement, deleteItem, theme, switchTheme}) => {
    let total = 0
    products.forEach(product => {
        total += product.price * product.items
    })
  return (
    <div className={`${!theme ? "bg-[#41729F]" : 'bg-[#BCECE0]'} min-h-screen flex flex-col justify-start items-center gap-10 p-5 pt-15 opacity-100`}>
        <h1 className={`${!theme ? 'text-[#C3E0E5]' : 'text-[#4C5270]'} text-2xl font-bold text-center p-3 rounded-3xl`}>
            Your Cart
        </h1>
        <div className='w-full flex flex-row gap-5 justify-around'>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
            <button className="btn btn-error" onClick={deleteAll}>Delete</button>
            <button className="btn btn-light" onClick={switchTheme}>
                { theme ? <MdNightsStay /> : <MdOutlineWbSunny /> }
            </button>
        </div>
        { products.map((product) => ( product.items == 0 ? null : <Product key={product.id} {...product} increment={increment} decrement={decrement} deleteItem={deleteItem} theme={theme} />)) }
        {total == 0 ? <h3 className="text-2xl text-error">Your card is empty!</h3> : <h3 className="text-2xl text-dark">Total: ${total}</h3>}
    </div>
  )
}

export default Items