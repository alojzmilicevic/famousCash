import React from "react";
import { productData } from "../data/data";
import { Grid } from "@material-ui/core";
import ProductBox from "../ProductBox";

const Products = ({ setCurRemainingAmount }) =>
  productData.map((product) => <Grid key={product.id} item xs={12} sm={6} md={4}>
      <ProductBox product={product} setCurRemainingAmount={setCurRemainingAmount} />
    </Grid>
  )

export default Products;
