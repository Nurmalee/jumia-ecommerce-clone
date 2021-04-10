import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Body from "./components/Homepage/Body"
import Cart from "./components/Cart/Cart"
import HeaderNavigation from "./components//Homepage/HeaderNavigation"


const App = () => {
    return (
        <Router>
            
            <HeaderNavigation />
           
            <Switch>
                <Route exact path="/" component={Body} />
                <Route exact path="/cart" component={Cart} />
            </Switch>

        </Router>
    )
}

export default App