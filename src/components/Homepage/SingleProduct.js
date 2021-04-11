import styled from 'styled-components'

import { Star } from '@material-ui/icons';
import {useAppContext} from '../../context'


const SingleProduct = ({id, name, status, desc, image, current_price, percentReduct, eligibility_statement}) => {

    const {addItem} = useAppContext()

    const onAddToCart = () => {
        const newProduct = {
            id,
            name,
            desc,
            image,
            price: current_price,
            discount: percentReduct,
            eligibility_statement 
        }

        addItem(newProduct)
    }

    return (
        <Product>

            <ProductImage>
                <img src={image} alt={name} />
            </ProductImage>

            {status && <p style={{backgroundColor: status.abroad ? "blue" : "brown"}}> {status.state} </p>}

            <ProductDetails>
                <p> <b>{name ? name.toUpperCase() : null}</b> {desc} </p>
                <h3> &#8358; {current_price} </h3>
                <h4> &#8358; <span>{Number(current_price) + parseInt(Number(current_price) * Number(percentReduct))}</span> <span> -{parseInt(percentReduct * 100)}% </span> </h4>

                <div>
                    <Star style={{fontSize: "16px"}}/> <Star style={{fontSize: "16px"}}/> <Star style={{fontSize: "16px"}}/> <Star style={{fontSize: "16px"}}/>
                </div>
            </ProductDetails>

            <ExtraDetails>
                <p> {eligibility_statement} </p>
            </ExtraDetails>

            <button onClick={onAddToCart}>add to cart</button>

        </Product>
    )
}

export default SingleProduct

const Product = styled.div`

/* border: 1px solid blue; */
    width: 20%;
    background-color: white;
    color: #555;
    padding: 7px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-self: center; */

    > p {
        /* background-color: status.abroad ? blue : red; */
        color: white;
        margin: 5px 0;
        border-radius: 3px;
        padding: 3px;
        font-size: 11px;
        width: max-content;
    }

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        box-shadow: 0 0 10px #ccc;
        transform: scale(1.01);

        > button {
            visibility: visible;
        }
    }

    > button {
        width: 100%;
        text-transform: uppercase;
        padding: 13px 10px;
        background-color: #EE7600;
        color: white;
        font-weight: 700;
        border-radius: 3px;
        border: none;
        outline: none;
        box-shadow: 0 0 7px #aaa;
        cursor: pointer;
        margin-top: 20px;
        visibility: hidden;

        &:hover {
            background-color: #CC5500;
        }
    }

`

const ProductImage = styled.div`
    /* border: 1px solid red; */
    cursor: pointer;
    height: 50%;

    > img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

`

const ProductDetails = styled.div`
    padding: 3px;
    cursor: pointer;
    font-weight: 100;

    > h3 {
        font-size: 14px;
        padding-top: 10px;
    }

    > h4 {
        font-size: 12px;
        color: #777;
        padding-bottom: 10px;
        margin-top: 5px;

        > span {
            text-decoration: line-through;

            &:nth-of-type(2) {
                color: darkorange;
                text-decoration: none;
                background-color: #feefe2;
                padding: 5px 2px;
                margin-left: 5px;
            }
        }
    }

    > p {
        font-size: 13px;
        cursor: pointer;
        color: #333;
        text-transform: capitalize;
    }

    > div {
        display: flex;
        color: darkorange;
    }
`

const ExtraDetails = styled.div`
    padding: 3px;

    > p {
        font-size: 11px;
        text-transform: capitalize;
        cursor: pointer;
    }
`
