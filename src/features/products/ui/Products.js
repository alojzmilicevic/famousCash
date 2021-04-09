import React from "react";
import { productData } from "../data/data";
import { Grid } from "@material-ui/core";
import ProductBox from "../ProductBox";

const Products = ({ updateShoppingCart, shoppingCart }) => (
  productData.map((product) => (
      <Grid key={product.id} item xs={12} sm={6} md={4}>
        <ProductBox
          itemCount={shoppingCart[product.id]}
          updateShoppingCart={(amount) => updateShoppingCart(amount, product.id, product.price)}
          product={product}
        />
      </Grid>
    )
  )
)

export default Products;
