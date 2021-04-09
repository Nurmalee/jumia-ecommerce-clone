import styled from 'styled-components'
import SingleProduct from './SingleProduct'

const TopProducts = ({categoryHeading, productArray, colorCode}) => {
    return (
        <ProductsContainer>
            <h1 style={{backgroundColor: colorCode.bg, color: colorCode.text }}> {categoryHeading} </h1>

            <Products>

                {
                    productArray.map((product,index) => <SingleProduct key={index} {...product} />)
                }

            </Products>
            
        </ProductsContainer>
    )
}

export default TopProducts

const ProductsContainer = styled.div`
    background-color: white;
    margin-top: 15px;
    border-radius: 5px;
    /* border: 1px solid; */
    width: 100%;

    > h1 {
        padding: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        /* background-color: red; */
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 22px;
        font-weight: 300;
        /* text-transform: capitalize; */
    }
`

const Products = styled.div`
    padding: 10px;
    /* border: 1px solid green; */
    width: 100%;
    display: flex;
`
