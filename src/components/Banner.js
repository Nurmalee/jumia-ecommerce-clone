import styled from 'styled-components'
import { bannerShuffle } from '../data'


const Banner = () => {
    return (
        <BannerContainer>
            <div>
                <img src="https://ng.jumia.is/cms/FOODFEST/11S1424x768__-(1).jpg" alt="bannerImage"/>
            </div>

            <SideBanner>
                <img src="https://ng.jumia.is//cms/Homepage/2021/w13/image-(23).png" alt=""/>
                <img src="https://ng.jumia.is//cms/Homepage/2021/w13/Prime/21FCAD46-64E0-4BC8-BC44-2B290DD569B0.gif" alt=""/>
            </SideBanner>
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.div`
    height: 400px;
    /* width: 700px; */
    /* border: 1px solid; */
    flex: 0.825;
    display: flex;

    img {
        cursor: pointer;
    }

    > div {
        height: 100%;
        flex: 0.75;
        margin-right: 15px;
        
        > img {
            object-fit: fill;
            height: 100%;
            width: 100%;
            border-radius: 5px;
        }
    }
`

const SideBanner = styled.aside`
    flex: 0.25;
    height: 400px;
    display: flex;
    flex-direction: column;

    > img {
        object-fit: fill;
        height: calc(0.48*400px);
        width: 100%;
        border-radius: 5px;
        
        &:nth-of-type(1) {
            margin-bottom: calc(0.04*400px);
        }
    }
`