import { useCallback, useState } from "react";
import { productData } from './data/data'

function useProductAmount(setCurRemainingAmount, resetRemainingAmount) {
  const initialState = new Array(productData.length).fill(0);
  const [shoppingCart, setShoppingCart] = useState(initialState);
  const updateShoppingCart = useCallback((newAmount, id, price) => {
    if (isNaN(newAmount)) {
      newAmount = 0;
    }

    if (newAmount >= 0) {
      setShoppingCart(prevState => {
        const data = [...prevState];
        data[id] = newAmount;

        return data;
      });
      setCurRemainingAmount(-(newAmount * price - shoppingCart[id] * price));
    }
  }, [shoppingCart, setCurRemainingAmount])

  const resetShoppingCart = useCallback(() => {
    setShoppingCart(initialState);
    resetRemainingAmount();
  }, [initialState, resetRemainingAmount])


  return { updateShoppingCart, shoppingCart, resetShoppingCart };
}

export default useProductAmount;
