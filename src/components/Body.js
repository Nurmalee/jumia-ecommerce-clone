import styled from 'styled-components'
import Banner from './Banner'
import ExtendedLinks from './ExtendedLinks'
import SideNav from './SideNav'

const Body = () => {
    return (
        <BodyContainer>
            <section>
                <SideNav />
                <Banner />
            </section>
           
            <ExtendedLinks />
            
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