import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend assets/assets'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-10 pt-5 min-h-[80vh] border-t'>

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="text" placeholder='First name' />
          <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="email" placeholder='Email' />
        <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="text" placeholder='Street' />

        <div className='flex gap-3'>
          <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="text" placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="number" placeholder='Zip code' />
          <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="text" placeholder='city' />
        </div>

        <input className='border border-gray-300 px-3.5 py-1.5 rounded w-full' type="number" placeholder='Phone' />

      </div>
      {/*Right Side*/}
      <div className='mt-10'>
        <div className='mt-10 min-w-80'>
          <CartTotal />
        </div>
          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>

          {/*Pyament Method Selction*/}
          <div className='flex gap-3 flex-col sm:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border py-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-auto' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border py-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-auto' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border py-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>Cash on Delivery</p>
            </div>
          </div>

          <div className='w-full text-end mt-5'>
            <button onClick={() => navigate('/orders')} className='bg-black text-gray-100 px-16 py-3 text-sm'>PLACE ORDERS</button>
          </div>

        
      </div>
    </div>
  )
}

export default PlaceOrder