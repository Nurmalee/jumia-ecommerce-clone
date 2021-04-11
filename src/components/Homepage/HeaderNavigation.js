import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components'
import jumia_logo from '../../images/jumia-logo.png'

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SmsOutlined from '@material-ui/icons/SmsOutlined';

import { userSubmenu, helpSubmenu } from '../../data'
import {useAppContext} from '../../context'

const HeaderNavigation = () => {

    const {cart} = useAppContext()
    const [cartItemCount, setCartItemCount] = useState(0)

    useEffect(() => {
        // let currentCount = 0;
        let currentCount = cart.reduce((totalCount, item) => {
            totalCount += item.qty
            return totalCount
        }, 0)
        
        setCartItemCount(currentCount)

    }, [cart])

    return (
        <NavContainer>
            <TopBanner>
                <img src="https://ng.jumia.is/cms/Homepage/2020/Top-strip/ts-cheaper-del.jpg" alt="Advert banner"/>
            </TopBanner>

            {/* <TopBannerLinks>

            </TopBannerLinks> */}

            <NavbarWrapper>

                <Navbar>
                    <Link to="/"><img src={jumia_logo} alt="jumia.com.ng logo goes here"/></Link>
                    

                    <NavbarSearch>
                        <div>
                            <SearchOutlinedIcon style={{margin: "0 5px", color: "#444"}} />
                            <input type="text" placeholder="Search products, brands and categories"/>
                        </div>
                        <button>search</button>
                    </NavbarSearch>

                    <NavbarRight>
                        <li>
                            <PersonOutlineOutlinedIcon style={{fontSize: "25px"}} />
                            <h4>hi, nurudeen</h4>
                            <KeyboardArrowDownOutlinedIcon style={{fontSize: "18px"}} />

                            <ul>
                                {
                                    userSubmenu.map((item, index) => {
                                        const {Icon, name} = item
                                        return (
                                            <li key={index}> 
                                                <Icon style={{fontSize: "22px"}}/> 
                                                <p>{name}</p>  
                                            </li>
                                        ) 
                                    })
                                }
                                <button>logout</button>
                            </ul>

                        </li>

                        <li>
                            <HelpOutlineOutlinedIcon style={{fontSize: "25px"}} />
                            <h4>help</h4>
                            <KeyboardArrowDownOutlinedIcon style={{fontSize: "18px"}} />

                            <ul>
                                {
                                    helpSubmenu.map((item, index) => {
                                        return (
                                            <li key={index}> 
                                                <p>{item}</p>  
                                            </li>
                                        )
                                    })
                                }
                                <button> <SmsOutlined style={{marginRight: "15px"}}/> live help</button>
                            </ul>
                        </li>

                        <li>  
                            <Link to="/cart" style={{display: "flex", alignItems: "flex-end", textDecoration: "none", color: "#444"}}>                         
                                <ShoppingCartOutlinedIcon style={{fontSize: "25px"}} />
                                <h4>cart</h4>
                            </Link>
                            {cart.length > 0 && <span>{cartItemCount}</span>}
                        </li>
                        
                    </NavbarRight>
                </Navbar>

            </NavbarWrapper>

        </NavContainer>
    )
}

export default HeaderNavigation

const NavContainer = styled.nav`
    background-color: transparent;
    position: sticky;
    z-index: 500;
    top: -80px;
    left: 0;
    right: 0;
`

const TopBanner = styled.div`
    text-align: center;
    width: 1200px;
    height: 70px;
    margin: 0 auto 10px auto;
    padding: 0 10px;

    > img {
        object-fit: contain;
        width: 100%;
    }

    @media screen and (max-width: 1200px) {
        width: 1000px;
    }
`

// const TopBannerLinks = styled.div`
//     text-align: center;
//     height: 30px;
//     border: 1px solid;
// `

const NavbarWrapper = styled.div`
    background-color: white;
`

const Navbar = styled.nav`
    background-color: white;
    width: 1200px;
    margin: 0 auto;
    height: 80px;   
    display: flex;
    align-items: center;
    padding: 0 10px;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;

    img {
        height: 30px;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
        width: 1000px;
    }
`

const NavbarSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    > div {
        flex: 0.85;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 10px;
        height: 40px;
        padding: 0 5px;

        > input {
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 5px;
            font-size: 16px;
            width: 100%;
            color: #444;
        }
    }

    > button {
        background-color: #EE7600;
        color: white;
        height: 40px;
        padding: 0 17px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
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

const NavbarRight = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: 10px;

    > li {
        display: flex;
        align-items: flex-end;
        text-transform: capitalize;
        cursor: pointer;
        padding: 10px;
        border-radius: 2px;
        color: #444;
        position: relative;

        /* border: 1px solid; */

        &:hover {
            color: #EE7600;
            background-color: #EAEAEA;

            > ul {
                color: #444;
                display: block;
            }
        }
        
        > h4 {
            padding: 0 7px;
        }
        
        > ul {
            position: absolute;
            display: none;
            list-style: none;
            /* border: 1px solid; */
            width: 205px;
            top: 45px;
            left: 0;
            background-color: white;
            box-shadow: 0 0 5px #bbb;
            border-radius: 5px;
            z-index: 500;
            border-bottom: 2px solid #ddd;
            
            &:hover {
                color: black;
            }

            > li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                /* border: 1px solid; */
                padding: 10px;
                font-size: 14px;

                :last-of-type {
                    border-bottom: 1px solid #ddd;
                }

                > p {
                    margin-left: 10px;
                    font-weight: 400;
                }

                &:hover {
                    background-color: #eee;

                    > p {
                        font-weight: 700;
                    }
                }
            }

            > button {
                margin: 10px auto;
                text-transform: uppercase;
                text-align: center;
                color: darkorange;
                border: none;
                outline: none;
                background-color: transparent;
                padding: 7px;
                display: flex;
                align-items: center;
                border-radius: 3px;
                cursor: pointer;
                font-weight: 700;

                &:hover {
                    background-color: #feefe2;
                }
            }
        }

        &:nth-of-type(2) {
            > ul {

                > li {
                    padding: 15px 10px;
                    > p {
                        margin-left: 5px;
                    }
                }

                > button {
                    margin: 10px auto;
                    text-transform: uppercase;
                    text-align: center;
                    color: white;
                    border: none;
                    outline: none;
                    background-color: #EE7600;
                    width: 85%;
                    padding: 10px 15px;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    border-radius: 3px;
                    cursor: pointer;

                    &:hover {
                        background-color: #CC5500;
                    }
                }
            }
        }

        &:nth-of-type(3) {
            position: relative;
            &:hover {
                background-color: transparent;
            }

            > span {
                height: 22px;
                width: 22px;
                padding: 2px;
                border: 2px solid;
                border-radius: 50%;
                font-size: 11px;
                background-color: #EE7600;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                left: 17px;
                top: 0;
            }
        }
    }
`