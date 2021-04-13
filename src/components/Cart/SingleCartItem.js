import {useState} from 'react'

import {Delete} from '@material-ui/icons'
import {useAppContext} from '../../context'

const SingleCartItem = ({ id, qty, name, desc, image, price, discount, eligibility_statement }) => {

    const [quantity, setQuantity] = useState(qty)
    const {removeItem, updateItemQuantity} = useAppContext()
    const old_price = Number(price) + parseInt(Number(price) * Number(discount))
    const subtotal = quantity * price

    // useEffect(() => {
    //     if(quantity >= 12){
    //         setQuantity(12)
    //     }

    //     if(quantity <= 1){
    //         setQuantity(1)
    //     }

    // }, [quantity])

    // useEffect(() => {
    //     updateItemQuantity(id, quantity)
    // }, [id, quantity, updateItemQuantity])

    const inputQuantityHandler = (e) => {
        const input = e.target.value
        setQuantity(input)
        updateItemQuantity(id, input)
    }

    // const increaseQuantityHandler = () => {
    //     setQuantity(quantity + 1)
    //      if(quantity >= 12){
    //         setQuantity(12)
    //     }
    //     updateItemQuantity(id, quantity)
    // }

    // const decreaseQuantityHandler = () => {
    //     setQuantity(quantity - 1)
    //     if(quantity <= 1){
    //         setQuantity(1)
    //     }
    //     updateItemQuantity(id, quantity)
    // }

    return (
        <tr>
            <td> 
                <div>
                    <img src={image} alt={name}/>
                </div>
                <div>
                    <p>{desc}</p>
                    <p>{eligibility_statement}</p>
                    <button onClick={() => removeItem(id)}> <Delete style={{fontSize: "17px", marginRight: "7px"}} /> remove</button>
                </div>
            </td>
            <td>
                {/* <button onClick={decreaseQuantityHandler}>-</button>
                {quantity}
                <button onClick={increaseQuantityHandler}>+</button> */}
                <input type="number" min={1} value={quantity} onChange={inputQuantityHandler} />
            </td>
            <td> 
                <p> &#8358; {Number(price).toLocaleString()} </p>
                <p> &#8358; {old_price.toLocaleString()}</p>
                {/* <p> Savings: &#8358; {parseInt(discount * old_price)} </p> */}
                <p> Savings: &#8358; {(old_price - price).toLocaleString()} </p>
            </td>
            <td>  &#8358; {subtotal.toLocaleString()}</td>
        </tr>
    )
}

export default SingleCartItem
