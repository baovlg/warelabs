import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ContainerItem from "../components/ContainerItem";

const Home = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products);
  const currentCategory = useSelector(
    (state) => state.categories.categoryIdSelected
  );
  const [listProduct, setListProduct] = useState();

  useEffect(() => {
    const productDisplayed = products.filter((product) => {
      return product.category_id === currentCategory;
    });
    setListProduct(productDisplayed);
  }, [currentCategory, products]);

  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid container spacing={5} justifyContent="center">
        {listProduct &&
          listProduct.map((product, index) => (
            <Grid key={index} item xl={4} align="center">
              <ContainerItem product={product} key={index} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default Home;
