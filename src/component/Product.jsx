import React from 'react'

const Product = ({id,name,price,items, increment, decrement, deleteItem, theme}) => {
    return (
        <div key={id} className={`${!theme ? 'bg-[#5885AF]' : 'bg-[#36EEE0]'} ${!theme ? 'text-[#C3E0E5]' : 'text-[#4C5270]'} text-xl w-full grid grid-cols-5 gap-5 text-center p-3 items-center rounded-3xl`}>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Items: {items}</p>
            <div className='flex flex-row gap-5 justify-around'>
                <button onClick={() => increment(id)} className="btn btn-primary">+</button>
                <button onClick={() => items == 1 ? null : decrement(id)} className="btn btn-warning">-</button>
                <button onClick={() => deleteItem(id)} className="btn btn-error">Delete</button>
            </div>
            <p>Total: {price * items}</p>
        </div>
    )
}

export default Product