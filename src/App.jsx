
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Product from './Component/Product/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./shirt.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleAddToCart = p =>{
    // const isExist = cart.find((product) => product.id == p.id);
    // if(!isExist){
    //   setCart([...cart, p])
    // }
    // else{
    //   alert('Already in cart')
    // }
    // // console.log(p);
    const newCart = [...cart, p];
    setCart(newCart);

  }

  return (
    <>
      <div>
        <h3 className='text-4xl text-center my-10 text-red-300 font-semibold font-serif'>MeNs cAsual t-Shirt</h3>
      </div>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-2/3'>
          {
            products.map((product, idx) => <Product key={idx} product={product} handleAddToCart={handleAddToCart}
            // cart={cart}
            ></Product>)
          }
        </div>
        <div className='w-1/3'>
          <h3 className='text-3xl font-semibold text-red-300 text-center font-serif'>This is cart</h3>
          <div className='flex justify-between p-5'>
            <h5 className='text-xl font-semibold font-serif text-red-600'>Name: {cart.length}</h5>
            <h5 className='text-xl font-semibold font-serif text-red-600'>Price</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
