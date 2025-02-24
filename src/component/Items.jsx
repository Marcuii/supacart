import React from 'react'
import Product from './Product'
import { MdOutlineWbSunny, MdNightsStay } from "react-icons/md";

const Items = ({products, reset, deleteAll, increment, decrement, deleteItem, theme, switchTheme}) => {
  return (
    <div className={`flex flex-col justify-start items-center gap-10 p-5 pt-15 opacity-100`}>
        <h1 className={`${!theme ? 'text-[#C3E0E5]' : 'text-[#4C5270]'} text-2xl font-bold text-center p-3 rounded-3xl`}>
            Your Cart
        </h1>
        <div className='w-full flex flex-wrap gap-5 justify-around'>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
            <button className="btn btn-error" onClick={deleteAll}>Delete</button>
            <button className="btn btn-light" onClick={switchTheme}>
                { theme ? <MdNightsStay /> : <MdOutlineWbSunny /> }
            </button>
        </div>
        { products.map((product) => ( <Product key={product.id} {...product} increment={increment} decrement={decrement} deleteItem={deleteItem} theme={theme} />)) }
        {products.length == 0 ? <h3 className="text-2xl text-error">Your card is empty!</h3> : 
        <h3 className={`text-2xl ${!theme ? 'text-[#C3E0E5]' : 'text-[#4C5270]'}`}>Total: ${products.reduce((acc, product) => acc + product.items * product.price, 0)}</h3>}
    </div>
  )
}

export default Items