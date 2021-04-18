import { useCallback, useState } from "react";
import { celebrityData } from "./data/data";

export default function useCelebrityData() {
  const [celebrity, setCelebrity] = useState(celebrityData[0]);
  const [remainingAmount, setRemainingAmount] = useState(celebrity.net_worth);

  const setCurRemainingAmount = useCallback((amount) => {
    setRemainingAmount(remainingAmount + amount);
  }, [remainingAmount]);

  const setCurCelebrity = useCallback((celeb) => {
    if (celeb !== celebrity) {
      const totalSpent = celebrity.net_worth - remainingAmount;
      setRemainingAmount(celeb.net_worth - totalSpent);
      setCelebrity(celeb);
    }
  }, [celebrity, remainingAmount])

  const resetRemainingAmount = useCallback(() => {
    setRemainingAmount(celebrity.net_worth)
  }, [celebrity]);

  return { remainingAmount, setCurRemainingAmount, celebrity, setCurCelebrity, resetRemainingAmount };
}
