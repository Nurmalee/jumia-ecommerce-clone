import { Link } from "react-router-dom"
import styled from 'styled-components'

import {useAppContext} from '../../context'
import SingleCartItem from "./SingleCartItem"


const Cart = () => {

    const {cart} = useAppContext()

    if(cart.length <= 0) {
        return (
            <EmptyCart>
                <h1>Cart</h1>
            
                <img src="https://www.jumia.com.ng/images/oshun/cart/empty-cart.png" alt="Empty Cart"/>

                <h2>Your cart is empty!</h2>

                <p>Browse our categories and discover our best deals!</p>

                <Link to="/" style={{color: "white", textDecoration: "none"}}> <button>Start Shopping</button> </Link>
            </EmptyCart>
        )
    }
    return (
        <CartContainer>
            <h1>Cart ({cart.length} {cart.length <= 1 ? "item" : "items" })</h1>
            <p>Your order is eligible for free shipping (Lagos only, excluding large items) </p>
            
            <Table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>quantity</td>
                        <td>unit price</td>
                        <td>subtotal</td>
                    </tr>
                </thead>

                <tbody>
                    {cart.map(item => <SingleCartItem {...item} />)}
                </tbody>
            </Table> 
        </CartContainer>
    )
}

export default Cart

const EmptyCart = styled.div`
    text-align: center;
    margin: 20px auto;
    padding: 20px 10px 30px 10px;
    width: 1000px;
    /* border: 1px solid; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    > h1 {
        text-align: left;
        font-size: 22px; 
    }

    > h2 {
        color: #aaa;
        font-size: 22px; 
    }

    > p {
        font-size: 20px; 
    }

    > h2, p, button {
        margin: 20px;
    }

    > img {
        margin-top: 50px;
    }

    button {
        background-color: #EE7600;
        color: white;
        height: 40px;
        padding: 0 30px;
        border: none;
        outline: none;
        cursor: pointer;
        box-shadow: 0 5px 9px #ddd;
        text-transform: uppercase;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        font-weight: 500;

        &:hover {
            background-color: #CC5500;
        }
    }
`

const CartContainer = styled.div`
    margin: 20px auto;
    padding: 20px 10px 30px 10px;
    width: 1000px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    > h1 {
        text-align: left;
        font-size: 22px;
        margin-bottom: 5px;
    }

    > p {
        font-size: 14px;
        font-weight: 400;
    }
`

const Table = styled.table`

    width: 100%;
    border: 1px solid red;
    margin: 15px 0;

    > thead {

        > tr {
            background-color: transparent;

            > td {
                text-transform: uppercase;
                font-family: Roboto,Helvetica,Arial,sans-serif;
                font-weight: bold;
                color: #999;
                font-size: 14px;
                height: 40px;

                &:first-of-type {
                    justify-content: flex-start;
                }
            }
        }   
    } 
   

    tr {
        background-color: white;
        > td {
            padding: 5px;

            &:first-of-type {
                border: 1px solid blue;
                /* width: 55%; */
                display: flex;
                align-items: center;
                /* justify-content: center; */

                > div {
                    border: 1px solid teal;
                    /* display: flex; */

                    > img {
                        height: 40px;
                    }

                    &:first-of-type {
                        align-self: flex-start;
                        margin-right: 20px;
                    }

                    &:nth-of-type(2) {
                        > p {
                            &:first-of-type {
                                font-weight: 600;
                                margin-bottom: 10px;
                            }

                            &:nth-of-type(2) {
                                font-size: 12px;
                                text-transform: capitalize;
                                margin-bottom: 10px;
                            }

                        }

                        > button {
                            color: #EE7600;
                            background-color: transparent;
                            outline: none;
                            border: none;
                            text-transform: uppercase;
                            font-size: 12px;
                            cursor: pointer;
                            font-weight: 600;
                            display: flex;
                            align-items: flex-end;
                        }
                    }

                }
            }

            &:nth-of-type(2) {
                border: 1px solid green;
                width: 10%;
                text-align: center;
            }

            &:nth-of-type(3) {
                border: 1px solid brown;
                width: 17.5%;
                text-align: center;

                > p {
                    &:nth-of-type(2) {
                        font-size: 12px;
                        text-decoration: line-through;
                        color: #999;
                        margin-top: 7px;
                    }

                    &:nth-of-type(3) {
                        font-size: 12px;
                        color: green;
                    }
                }
            }


            &:nth-of-type(4) {
                border: 1px solid yellow;
                width: 17.5%;
                text-align: center;
            }
        }
            
    }

`
