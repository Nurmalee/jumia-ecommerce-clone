import styled from 'styled-components'
import SideNav from './SideNav'

const Body = () => {
    return (
        <BodyContainer>
            <SideNav />
            
        </BodyContainer>
    )
}

export default Body

const BodyContainer = styled.main`
    margin: 10px auto;
    padding: 0 10px;
    width: 1200px;
    border: 1px solid;
`