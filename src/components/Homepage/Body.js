import styled from 'styled-components'
import Banner from './Banner'
import ExtendedLinks from './ExtendedLinks'
import SideNav from './SideNav'
import TopProducts from './TopProducts'

import { topProducts, topDeals }  from '../../data'

const Body = () => {

    return (
        <BodyContainer>

            <section>
                <SideNav />
                <Banner />
            </section>
           
            <ExtendedLinks />

            <TopProducts colorCode={{bg: "white", text: "black" }} categoryHeading="Top selling items" productArray={topProducts} />

            <AdBanner1>
                <img src="https://ng.jumia.is/cms/Homepage/2021/w14/11CB-1152x252.jpg" alt="adveert"/>
            </AdBanner1>

            <TopProducts colorCode={{bg: "darkred", text: "white" }} categoryHeading="Deals of the day | starting from &#8358; 1,000" productArray={topDeals}/>
            
            <AdBanner2>
                <img src="https://ng.jumia.is/cms/Homepage/2021/w07/Smartwatches_.jpg" alt="adveert"/>
                <img src=" https://ng.jumia.is/cms/Homepage/2021/w14/MFLmen_s_shoes.jpg" alt="adveert"/>
            </AdBanner2>

        </BodyContainer>
    )
}

export default Body

const BodyContainer = styled.main`
    margin: 10px auto;
    padding: 0 10px;
    width: 1200px;
    /* border: 1px solid; */

    > section {
        display: flex;
    }

    @media screen and (max-width: 1200px) {
        width: 1000px;
    }
`

const AdBanner1 = styled.div`
    margin: 10px auto;
    padding: 10px;
    background-color: white;
    text-align: center;
    height: 270px;
    width: 100%;
    border-radius: 5px;

    > img {
        object-fit: fill;
        height: 100%;
        width: 100%;
        border-radius: 5px;
        cursor: pointer;
        /* padding: 10px; */

        &:hover {
            transform: scale(1.005);
            box-shadow: 0 0 10px #bbb;
        }
    }
`

const AdBanner2 = styled.div`
    margin: 10px auto;
    padding: 10px;
    background-color: white;
    text-align: center;
    height: 270px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;

    > img {
        object-fit: fill;
        height: 100%;
        width: 49.5%;
        border-radius: 5px;
        cursor: pointer;
        /* padding: 10px; */

        &:nth-of-type(2) {
            margin-left: 1%;
        }

        &:hover {
            transform: scale(1.005);
            box-shadow: 0 0 10px #bbb;
        }
    }
`