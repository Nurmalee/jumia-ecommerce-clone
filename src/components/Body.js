import styled from 'styled-components'
import Banner from './Banner'
import SideNav from './SideNav'

const Body = () => {
    return (
        <BodyContainer>
            <SideNav />
            <Banner />
            
        </BodyContainer>
    )
}

export default Body

const BodyContainer = styled.main`
    margin: 10px auto;
    padding: 0 10px;
    width: 1200px;
    /* border: 1px solid; */
    display: flex;
`