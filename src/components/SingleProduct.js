import styled from 'styled-components'


const SingleProduct = ({name, desc, image, current_price, old_price, eligibility_statement}) => {
    return (
        <Product>

            <ProductImage>
                <img src={image} alt={name} />
            </ProductImage>

            <ProductDetails>
                <p> <b>{name.toUpperCase()}</b> - {desc} </p>
                <h3> # {current_price} </h3>
                <h4> # {old_price} </h4>
            </ProductDetails>

            <ExtraDetails>
                <p> {eligibility_statement} </p>
            </ExtraDetails>

            <button>add to cart</button>

        </Product>
    )
}

export default SingleProduct

const Product = styled.div`

/* border: 1px solid blue; */
    width: 20%;
    background-color: white;
    padding: 7px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    /* margin-right: 7px; */
    border-radius: 3px;

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
        font-size: 15px;
        padding-top: 10px;
    }

    > h4 {
        font-size: 13px;
        text-decoration: line-through;
        color: #777;
        padding-bottom: 10px;
    }

    > p {
        font-size: 13px;
        cursor: pointer;
        color: #333;
        text-transform: capitalize;
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
