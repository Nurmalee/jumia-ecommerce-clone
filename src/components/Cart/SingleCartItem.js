import {useState, useEffect} from 'react'
import {Delete} from '@material-ui/icons'

import {useDispatch} from 'react-redux'
import {removeProductFromCart, increaseItemQuantity, decreaseItemQuantity} from '../../redux/actions/cartActionCreators'

const SingleCartItem = ({ id, quantity, name, desc, image, current_price, percentReduct, eligibility_statement }) => {
    
    const dispatch = useDispatch()

    const [disabled, setDisabled] = useState(false)

    const old_price = parseInt(current_price * percentReduct) + current_price
    const subtotal = quantity * current_price

    useEffect(() => {
        setDisabled(false)
        if(quantity <= 1){
            setDisabled(true)
        }
    }, [quantity])

    return (
        <tr>
            <td> 
                <div>
                    <img src={image} alt={name}/>
                </div>
                <div>
                    <p>{desc}</p>
                    <p>{eligibility_statement}</p>
                    <button onClick={() => dispatch(removeProductFromCart(id))}> <Delete style={{fontSize: "17px", marginRight: "7px"}} /> remove</button>
                </div>
            </td>
            <td>
                <button disabled={disabled} onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>
                {quantity}
                <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
            </td>
            <td> 
                <p> &#8358; {current_price.toLocaleString()} </p>
                <p> &#8358; {old_price.toLocaleString()}</p>
                <p> Savings: &#8358; {(old_price - current_price).toLocaleString()} </p>
            </td>
            <td>  &#8358; {subtotal.toLocaleString()}</td>
        </tr>
    )
}

export default SingleCartItem
