import React from 'react'
import { useSelector } from "react-redux"
import { ProductItem } from '../interfaces/global'
import { useDispatch } from "react-redux"
import { increment, remove, decrement } from "../store/index"
import { Typography, Container } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import EmptyBasket from './EmptyBasket'



function Basket() {


    const dispatch = useDispatch()

    const products = useSelector((store: ProductItem[]) => (
        store)
    )
    console.log("products", products)



    return (



        <div className="basket_container">
            <div>
                {products.filter((product) => product.added).length > 0 ? (
                    <div className="basket_table">
                        <div className="basket-div">
                            <Container maxWidth="lg">

                                <table >
                                    <thead className="basket_heading" >
                                        <tr>
                                            <th>Product Image</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="basket_body">
                                        {products.filter((product) => product.added)
                                            .map((product) => (
                                                <tr key={product.id}>
                                                    <td >
                                                        <img
                                                            src={`/images/${product.imageUrl}`}
                                                            alt={product.title}
                                                            width="250px"
                                                            height="200px"
                                                        />
                                                    </td>
                                                    <td className="basket_title" >{product.title}</td>
                                                    <td className="basket_buttons" ><button onClick={
                                                        () => {
                                                            dispatch(increment(product))
                                                        }
                                                    } >+</button>
                                                        <span className="basket_quantity">{product.quantity}</span>
                                                        <button onClick={
                                                            () => {
                                                                dispatch(decrement(product))
                                                            }
                                                        }>-</button>
                                                    </td>
                                                    <td className="basket_price">{product.price}$</td>
                                                    <td className="basket_Tprice" >{product.price * product.quantity}$</td>
                                                    <td><button className="basket_remove" onClick={
                                                        () => {
                                                            dispatch(remove(product))
                                                        }
                                                    } > <RemoveShoppingCartIcon className="remove_icon" /> </button></td>


                                                </tr>
                                            ))}
                                    </tbody>

                                </table>

                                <Typography className="basket_productTotal" variant="h4">
                                    Total Price  {products.filter((product) => (product.added))
                                        .reduce((totalPrice, product) => (totalPrice + product.price * product.quantity), 0)}$
                                 </Typography>

                            </Container>
                        </div>
                    </div>

                ) : <EmptyBasket />}
            </div>

        </div>
    )
}

export default Basket

