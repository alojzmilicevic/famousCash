import { useCallback, useState } from "react";

function useProductAmount(price, setCurRemainingAmount) {
  const [amount, setAmount] = useState(0);
  const updateAmount = useCallback((newAmount) => {
    if (isNaN(newAmount)) {
      newAmount = 0;
    }

   if (newAmount >= 0) {
      setAmount(newAmount);
      setCurRemainingAmount(-(newAmount * price - amount * price));
    }
  }, [amount, price, setCurRemainingAmount])


  return { updateAmount, amount };
}

export default useProductAmount;
