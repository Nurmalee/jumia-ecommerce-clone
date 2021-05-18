import styled from 'styled-components'
import SingleProduct from './SingleProduct'

const TopProducts = ({categoryHeading, productArray, colorCode, loading, error}) => {
    return (
        <ProductsContainer>
            <h1 style={{backgroundColor: colorCode.bg, color: colorCode.text }}> {categoryHeading} </h1>

            {
                loading ? 
                <PlaceholderContainer><img src="https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="LOADING...."/></PlaceholderContainer> : error ? <PlaceholderContainer> <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt={error} /> </PlaceholderContainer> :
                <Products>

                    {
                        productArray.map((product,index) => <SingleProduct key={index} {...product} />)
                    }

                </Products>
            }
            
        </ProductsContainer>
    )
}

export default TopProducts

const ProductsContainer = styled.div`
    background-color: white;
    margin-top: 15px;
    border-radius: 5px;
    width: 100%;

    > h1 {
        padding: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 22px;
        font-weight: 300;
    }
`

const Products = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
`

const PlaceholderContainer = styled.div`
    height: 300px;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 25px;
    color: #444;

    > img {
        height: 77px;
    }
`
