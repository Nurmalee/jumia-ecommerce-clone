import styled from 'styled-components'
import SingleProduct from './SingleProduct'
import { products }  from '../data'

const TopSelling = () => {
    return (
        <TopSellingContainer>
            <h1>Top Selling Items</h1>

            <TopProducts>

                {
                    products.map((product,index) => {
                        return (
                            <SingleProduct key={index} {...product} />
                        )
                    })
                }
            </TopProducts>
            
        </TopSellingContainer>
    )
}

export default TopSelling

const TopSellingContainer = styled.div`
    background-color: white;
    /* border: 1px solid; */
    width: 100%;

    > h1 {
        padding: 10px;
        background-color: red;
        color: white;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 24px;
        font-weight: 300;
    }
`

const TopProducts = styled.div`
    padding: 10px;
    /* border: 1px solid green; */
    width: 100%;
    /* height: 80%; */
    display: flex;
`
