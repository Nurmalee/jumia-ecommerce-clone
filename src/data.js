import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export const userSubmenu = [
    {
        name: "account",
        Icon: PersonOutlineOutlinedIcon,
    },
    {
        name: "orders",
        Icon: StorefrontIcon,
    },
    {
        name: "saved items",
        Icon: FavoriteBorderIcon,
    },
    {
        name: "jumia coupon",
        Icon: LocalAtmIcon,
    }
]

export const helpSubmenu = ["help center", "place & track order", "order cancellation", "returns & refunds", "payment & jumia account"]