import {useRef} from 'react' 
import styled from 'styled-components'
import jumia_logo from '../images/jumia-logo.png'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SmsOutlined from '@material-ui/icons/SmsOutlined';

import { userSubmenu, helpSubmenu } from '../data'

const HeaderNavigation = () => {

    const sublistRef = useRef("")
    const navItemRef = useRef("")

    const sublist2Ref = useRef("")
    const navItem2Ref = useRef("")


    const handleClick = (item) => {
        // item.current.style.backgroundColor = "#ddd"
        // item.current.style.color = "black"
        // if(item === navItemRef){
        //     sublistRef.current.style.display = "block"
        //     sublist2Ref.current.style.display = "none"
        //     navItem2Ref.current.style.backgroundColor = "transparent"
        // } else {
        //     sublistRef.current.style.display = "none"
        //     sublist2Ref.current.style.display = "block"
        //     navItemRef.current.style.backgroundColor = "transparent"
        // }
    }

    return (
        <NavbarContainer>

            <Navbar>
                <img src={jumia_logo} alt="jumia.com.ng logo goes here"/>

                <NavbarSearch>
                    <div>
                        <SearchOutlinedIcon style={{margin: "0 5px", color: "#444"}} />
                        <input type="text" placeholder="Search products, brands and categories"/>
                    </div>
                    <button>search</button>
                </NavbarSearch>

                <NavbarRight>
                    <li ref={navItemRef} onClick={() => handleClick(navItemRef)}>
                        <PersonOutlineOutlinedIcon style={{fontSize: "25px"}} />
                        <h4>hi, nurudeen</h4>
                        <KeyboardArrowDownOutlinedIcon style={{fontSize: "18px"}} />

                        <ul ref={sublistRef}>
                            {
                                userSubmenu.map((item, index) => {
                                    const {Icon, name} = item
                                    return (
                                        <li> 
                                            <Icon style={{fontSize: "22px"}}/> 
                                            <p>{name}</p>  
                                        </li>
                                    ) 
                                })
                            }
                            <button>logout</button>
                        </ul>

                    </li>

                    <li ref={navItem2Ref} onClick={() => handleClick(navItem2Ref)}>
                        <HelpOutlineOutlinedIcon style={{fontSize: "25px"}} />
                        <h4>help</h4>
                        <KeyboardArrowDownOutlinedIcon style={{fontSize: "18px"}} />

                        <ul ref={sublist2Ref}>
                            {
                                helpSubmenu.map((item, index) => {
                                    return (
                                        <li> 
                                            <p>{item}</p>  
                                        </li>
                                    )
                                })
                            }
                            <button> <SmsOutlined style={{marginRight: "15px"}}/> live help</button>
                        </ul>
                    </li>
                    <li>
                        <ShoppingCartOutlinedIcon style={{fontSize: "25px"}} />
                        <h4>cart</h4>
                    </li>
                </NavbarRight>

            </Navbar>

        </NavbarContainer>
    )
}

export default HeaderNavigation

const NavbarContainer = styled.nav`
    background-color: white;
`

const Navbar = styled.nav`
    width: 1200px;
    margin: 0 auto;
    height: 80px;   
    display: flex;
    align-items: center;
    padding: 0 10px;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;

    > img {
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
        /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */

        /* border: 1px solid; */

        &:hover {
            color: darkorange;
            background-color: #ddd;

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
            z-index: 20;
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
            &:hover {
                background-color: transparent;
            }
        }
    }

`