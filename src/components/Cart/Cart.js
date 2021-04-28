import { Link } from "react-router-dom"
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import SingleCartItem from "./SingleCartItem"


const Cart = () => {

    const {cart} = useSelector(state => state.cart)

    const getTotalQuantity = () => {
        return cart.reduce((qty, item) => qty += item.quantity, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((price, item) => price += item.current_price * item.quantity, 0)
    }

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
        <>
        <CartContainer>
            <h1>Cart ({getTotalQuantity()} {cart.length <= 1 ? "item" : "items" })</h1>
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

            <TotalAmount>
                <p>Total: <span> &#8358; {getTotalPrice().toLocaleString()} </span> </p>

                <div>
                    <p>Your order is eligible for free shipping (Lagos only, excluding large items)</p>
                </div>
            </TotalAmount>

        </CartContainer>

        <CartButtons>
            <div>
                <Link to="/" style={{color: "white", textDecoration: "none"}}><button>continue shopping</button> </Link>
                <Link to="/cart" style={{color: "white", textDecoration: "none", }}><button style={{backgroundColor: "#EE7600", color: "white"}}>proceed to checkout</button> </Link>
            </div>
        </CartButtons>

        </>
    )
}

export default Cart

const CartButtons = styled.div`
    background-color: white;
    /* border: 2px solid #EE7600; */
    padding: 20px 0;
    margin-bottom: 50px;

    > div {
        width: 1000px;
        /* border: 2px solid #EE7600; */
        margin: 0 auto;
        text-align: right;

        button {
            padding: 12px 50px;
            margin-right: 10px;
            border: none;
            outline: none;
            color: white;
            text-transform: uppercase;
            font-size: 14px;
            box-shadow: 0 0 10px #ccc;
            font-weight: 600;
            cursor: pointer;

            &:first-of-type {
                color: #EE7600;
                background-color: white;

                &:hover {
                    background-color: #eee;
                }
            }

            &:nth-of-type(2) {
                background-color: #EE7600;

                &:hover {
                    background-color: #CC5500;
                }
            }
        }
    }
`

const TotalAmount = styled.div`
    /* border: 2px solid #EE7600; */
    padding: 20px 10px;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > p {

        font-weight: 600;
        > span {
            margin-left: 45px;
            font-size: 20px;
            color: #EE7600;
        }
    }

    > div {
        padding: 10px;
        margin-top: 10px;
        font-size: 14px;
        border: 1px solid green;
        width: 350px;
        border-radius: 3px;
        text-align: left;
    }
`

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
        margin-top: 35px;
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
    margin-bottom: 0;
    padding: 20px 10px 0 10px;
    width: 1000px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    /* border: 2px solid #EE7600; */

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
    /* border: 1px solid red; */
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
                    padding: 0;
                }

                &:nth-of-type(4) {
                    color: #999;
                }
            }
        }   
    } 
   

    tr {
        background-color: white;

        > td {
            padding: 10px;

            &:first-of-type {
                /* border: 1px solid blue; */
                /* width: 55%; */
                display: flex;
                align-items: center;
                /* justify-content: center; */

                > div {
                    /* border: 1px solid teal; */
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
                            padding: 5px 10px 5px 0px;
                            border-radius: 2px;
                            display: flex;
                            align-items: flex-end;

                            &:hover {
                                background-color: #F5F5F5;
                            }
                        }
                    }

                }
            }

            &:nth-of-type(2) {
                /* border: 1px solid green; */
                width: 10%;
                text-align: center;

                > button {
                    height: 20px;
                    width: 20px;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    border-radius: 2px;

                    &:hover {
                        background-color: #EE7600;
                        color: white;
                    }

                    &:first-of-type {
                        margin-right: 4px;
                    }

                    &:nth-of-type(2) {
                        margin-left: 4px;
                    }
                }

                > input {
                    width: 40px;
                }
            }

            &:nth-of-type(3) {
                /* border: 1px solid brown; */
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
                /* border: 1px solid yellow; */
                width: 17.5%;
                text-align: center;
                color: #EE7600;
                font-weight: 600;
                font-size: 16px;
            }
        }
            
    }

`
