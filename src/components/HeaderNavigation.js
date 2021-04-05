import styled from 'styled-components'
import jumia_logo from '../images/jumia-logo.png'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const HeaderNavigation = () => {
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
                    <li>
                        <PersonOutlineOutlinedIcon style={{fontSize: "25px"}} />
                        <h4>hi, nurudeen</h4>
                        <KeyboardArrowDownOutlinedIcon style={{fontSize: "18px"}} />
                    </li>
                    <li>
                        <HelpOutlineOutlinedIcon style={{fontSize: "25px"}} />
                        <h4>help</h4>
                        <KeyboardArrowDownOutlinedIcon style={{fontSize: "18px"}} />
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

        &:hover {
            color: orange;
        }
        
        &:active {
            background-color: #ddd;
        }
        
        > h4 {
            padding: 0 7px;
        }
    }

`


