import {Delete} from '@material-ui/icons'

const SingleCartItem = ({ id, name, desc, image, price, discount, eligibility_statement }) => {
    const old_price = Number(price) + parseInt(Number(price) * Number(discount))
    return (
        <tr>
            <td> 
                <div>
                    <img src={image} alt={name}/>
                </div>
                <div>
                    <p>{desc}</p>
                    <p>{eligibility_statement}</p>
                    <button> <Delete style={{fontSize: "17px", marginRight: "7px"}} /> remove</button>
                </div>
            </td>
            <td>2</td>
            <td> 
                <p> &#8358; {price} </p>
                <p> &#8358; {old_price}</p>
                <p> Savings: &#8358; {parseInt(discount * old_price)} </p>
            </td>
            <td>  &#8358; {2 * price}</td>
        </tr>
    )
}

export default SingleCartItem
