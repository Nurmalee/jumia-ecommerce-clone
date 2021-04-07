import { useState, useEffect} from 'react'
import styled from 'styled-components'
import { bannerShuffle } from '../data'

import '../extended.css'


const Banner = () => {
    const [bannerList] = useState(bannerShuffle)
    const [imgIndex, setImgIndex] = useState(0)

    useEffect(() => {
            if(imgIndex >= bannerList.length){
                setImgIndex(0)
            }
            if(imgIndex < 0 ){
                setImgIndex(bannerList.length - 1)
            }
    }, [imgIndex, bannerList.length])

    useEffect(() => {
        let shuffleTimer = setInterval(() => {
            setImgIndex(imgIndex + 1)
        }, 7000)
        return () => {
            clearInterval(shuffleTimer)
        }
    }, [imgIndex])

    return (
        <BannerContainer>
            <div>
                {
                    bannerList.map((img, index) => {
                        let position = "nextSlide"

                        if(index === imgIndex){
                            position = "currentSlide"
                        }

                        if(index === imgIndex - 1 || (index < 0 && (index === bannerList.length - 1))){
                            position = "prevSlide"
                        }
                        
                        return (
                            <img className={position} src={img} alt="bannerImage"/>
                        )
                    })
                }
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

        position: relative;
        overflow: hidden;
        
        > img {
            object-fit: fill;
            height: 100%;
            width: 100%;
            border-radius: 5px;

            position: absolute;
            top: 0;
            left: 0;
            transition: 1000ms;
        }
        
        @media screen and (max-width: 1200px) {
            flex: 1;
        }
    }

    @media screen and (max-width: 1200px) {
        flex: 0.78;
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

    @media screen and (max-width: 1200px) {
        display: none;
    }
`