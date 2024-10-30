import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, currency, cartItems , updateQuantity,navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className="pt-12 px-4 sm:px-8">
            <div className="text-3xl mb-6">
                <Title text1={'Your'} text2={'Cart'} />
            </div>
            <div className="space-y-4">
                {cartData.map((item, index) => {
                    const productData = products.find((product) => product._id === item._id);
                    if (!productData) return null;

                    return (
                        <div
                            key={index}
                            className="py-4 px-2 border rounded-lg shadow-sm grid grid-cols-[2fr_1fr_0.5fr] sm:grid-cols-[3fr_1fr_0.5fr] items-center gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-16 sm:w-20 rounded"
                                    src={productData.image[0]}
                                    alt={productData.name}
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        {productData.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {currency}{productData.price} - Size: {item.size}
                                    </p>
                                </div>
                            </div>
                            <input onChange={(e)=>e.target.value === '' || e.target.vlaue === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))}
                                type="number"
                                min={1}
                                defaultValue={item.quantity}
                                className="w-16 px-2 py-1 border rounded text-center"
                            />
                            <img
                                className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
                                src={assets.bin_icon}
                                alt="Remove"
                                onClick={() => updateQuantity(item._id,item.size,0)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450]'>
                    <CartTotal />
                    <div className='w-full text-end'>
                        <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
