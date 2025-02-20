import React from 'react'

const Navbar = ({addedProducts, products, increment, theme}) => {
  let counter = 0
  products.forEach(product => {
    if (product.items > 0) {
      counter += 1
    }
  })
  return (
    <div className={`${!theme ? 'bg-[#5885AF]' : 'bg-[#36EEE0]'} ${!theme ? 'text-[#C3E0E5]' : 'text-[#4C5270]'} navbar fixed flex flex-row shadow-sm justify-around`}>
      <div className="">
        <a className="btn btn-ghost text-xl">SupaCart</a>
      </div>
      <div>
        { addedProducts.map(({id,name}) => (
          <button key={id} onClick={() => increment(id)} className="btn btn-ghost">{name}</button>
        )) }
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
            <span className="badge badge-sm indicator-item">
              {counter}
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        </div>
      </div>
    </div>
  )
}

export default Navbar