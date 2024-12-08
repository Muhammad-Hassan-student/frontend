import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'



export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const addToCart = (itemId, itemSize) => {
    if (!itemSize) {
      toast.error("Please select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][itemSize]) {
        cartData[itemId][itemSize] += 1;
      } else {
        cartData[itemId][itemSize] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][itemSize] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          try {
            totalCount += cartItems[items][size];
          } catch (error) {}
        }
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };
  const updateQuantity = async (itemId, itemSize, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][itemSize] = quantity;

    setCartItems(cartData);
  };
  {/*Backend Fetch Product*/}
  // const fetchProducts = async () => {
  //   try {
  //       const response = await axios.get(backendUrl + '/api/product/list');
  //       if(response.data.success){
  //           setProducts(response.data.products);
  //       }else{
  //           toast.error(response.data.message);
  //       }
  //   } catch (error) {
  //       console.log(error);
  //       toast.error(error.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // } ,[])
  

  const value = {
    
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    products,
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
