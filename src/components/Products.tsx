import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ProductItem } from '../interfaces/global'
import { add } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import {Paper , Grid , Container , Typography} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));






function Products() {
  const classes = useStyles();


  const dispatch = useDispatch();

  const products = useSelector((state: ProductItem[]) => state)


  return (
    <div className="Products_container">
      <div className="Products_mainImage">

      </div>
      <div className="Products_itemContainer">

        <Container maxWidth = "xl" >

        <div className={classes.root}>
          <Grid container spacing={3}>
            {products.map((product) => {
              return (
                <Grid key={product.id} item xs={12} sm={12} md={6} lg={4} xl={4}>
                  <div className = "Products_paper">

                  <Paper   className={classes.paper}>
                    <div className="Producs_box"  style={{ marginTop: "3rem" }} >

                      <div className="Products_image">
                        <img height = "300" src={`/images/${product.imageUrl}`} alt={product.imageUrl} />
                      </div>

                      <div className="Products_details">

                        <div className="Products_title">
                          <Typography variant = "subtitle1">
                                {product.title}
                          </Typography>
                        </div>

                        <div className="Products_price">
                          <Typography variant = "subtitle1">
                            {product.price}$
                          </Typography>
                        </div>

                      </div>

                      <div className="Products_button">
                        <button disabled={product.added} onClick={() => dispatch(add(product))} > <AddShoppingCartIcon/></button>
                      </div>
                    </div>
                  </Paper>
                  </div>

                </Grid>
              )
            })}
          </Grid>
        </div>
        </Container>

      </div>
    </div>
  )
}

export default Products



