import styled from 'styled-components'

import { LocalMall, Flight, Fastfood, Security } from '@material-ui/icons';

const ExtendedLinks = () => {

    const iconStyles = (iconBackground) => {
        return {
            color: "white", 
            padding: "5px", 
            border: "1px solid", 
            height: "40px", 
            width: "40px", 
            borderRadius: "50%", 
            backgroundColor: iconBackground
        }
    }

    return (
        <LinksContainer>
            <div> <LocalMall style={iconStyles("darkred")} /> <p> Official Stores </p> </div>
            <div> <Flight style={iconStyles("blue")} /> <p> Jumia Global </p> </div>
            <div> <Fastfood style={iconStyles("orange")} /> <p> Food Fest </p> </div>
            <div> <Security style={iconStyles("skyblue")} /> <p> Buy Airtime </p> </div> 
        </LinksContainer>
    )
}

export default ExtendedLinks


const LinksContainer = styled.section`
    width: 100%;
    /* border: 1px solid; */
    height: 60px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        margin-right: 10px;
        padding: 0 10px;
        cursor: pointer;
        /* border: 1px solid; */
        width: 25%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 600;
        background-color: white;
        color: #444;

        &:last-of-type {
            margin-right: 0;
        }

        > P {
            margin-left: 10px;
        }
    }
`