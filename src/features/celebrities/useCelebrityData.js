import { useCallback, useState } from "react";
import { celebrityData } from "./data/data";

export default function useCelebrityData() {
  const [celebrity, setCelebrity] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(celebrityData[celebrity].netWorth);

  const setCurRemainingAmount = useCallback((amount) => {
    setRemainingAmount(remainingAmount + amount);
  }, [remainingAmount]);

  const setCurCelebrity = useCallback((id) => {
    const totalSpent = celebrityData[celebrity].netWorth - remainingAmount;
    setRemainingAmount(celebrityData[id].netWorth - totalSpent);
    setCelebrity(id);
  }, [celebrity, remainingAmount])

  return { remainingAmount, setCurRemainingAmount, celebrity, setCurCelebrity };
}
