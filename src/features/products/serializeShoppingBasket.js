import { productData } from "./data/data";
import { formatByCurrency } from "../../util";

export function serialize(shoppingBasket) {
  let message = 'I\'ve spent some famous people\'s money. Can you beat my shopping list???\n' ;
  let totalAmount = 0;
  shoppingBasket.forEach((amount, index) => {
    if (amount > 0) {
      const product = productData[index];

      message += product.label + "(" + amount + ")\n";
      totalAmount += (product.price * amount);
    }
  });

  message += "Total: " + formatByCurrency(totalAmount);
  return message;
}
