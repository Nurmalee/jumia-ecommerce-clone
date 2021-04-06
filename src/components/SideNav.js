import styled from 'styled-components'
import {sideNavMenu} from '../data'

const SideNav = () => {
    return (
        <SideNavList>
            {
                sideNavMenu.map((item, index) => {
                    const {Icon, name} = item
                    return (
                        <li key={index}> 
                            <Icon /> 
                            <p>{name}</p> 
                        </li>
                    )
                })
            }
        </SideNavList>
    )
}

export default SideNav

const SideNavList = styled.ul`
    list-style-type: none;
    background-color: white;
    border-radius: 3px;

    &:hover {
        box-shadow: 0 0 5px #ddd;
    }

    > li {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 100;
        font-size: 12px;
        /* border: 1px solid; */
        padding: 2px 5px;
        

        &:hover {
            color: orange;
        }

        > p {
            margin-left: 5px;
        }
    }
`