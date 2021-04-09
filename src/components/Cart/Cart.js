import { Link } from "react-router-dom"
import styled from 'styled-components'

const Cart = () => {
    // if(Cart.length) {
    //     return (
    //         <CartContainer>
    //             <h1>Cart</h1>
    //             <EmptyCart>
    //                 <img src="https://www.jumia.com.ng/images/oshun/cart/empty-cart.png" alt=""/>
    //             </EmptyCart>
    //         </CartContainer>
    //     )
    // }
    return (
        <CartContainer>
            <h1>Cart</h1>
            
            <img src="https://www.jumia.com.ng/images/oshun/cart/empty-cart.png" alt=""/>

            <h2>Your cart is empty!</h2>

            <p>Browse our categories and discover our best deals!</p>

            <Link to="/" style={{color: "white", textDecoration: "none"}}> <button>Start Shopping</button> </Link>
        </CartContainer>
    )
}

export default Cart

const CartContainer = styled.div`
    text-align: center;
    margin: 20px auto;
    padding: 20px 10px 30px 10px;
    width: 1000px;
    /* border: 1px solid; */
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    > h1 {
        text-align: left;
        font-size: 22px; 
    }

    > h2 {
        color: #aaa;
        font-size: 22px; 
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
