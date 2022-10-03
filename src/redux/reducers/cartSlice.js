import { createSlice } from '@reduxjs/toolkit'

const cartInLocalStorage = JSON.parse(localStorage.getItem('cart'))

const initialState = {
	cart: cartInLocalStorage || [],
	total: 0,
	quantity: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const isAlreadyInCart = state.cart.indexOf(action.payload.id) !== -1
			const update = isAlreadyInCart
				? state.cart.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
				  )
				: [...state.cart, { ...action.payload, quantity: 1 }]
			state.cart = update
		},

		increaseItemQuantity: (state, action) => {
			const update = state.cart.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
			state.cart = update
		},

		decreaseItemQuantity: (state, action) => {
			const update = state.cart.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
			state.cart = update
		},

		removeItemFromCart: (state, action) => {
			const update = state.cart.filter((item) => item.id !== action.payload)
			state.cart = update
		},

		getTotals: (state, action) => {
			const total = state.cart.reduce(
				(acc, item) => {
					const { current_price, quantity } = item
					acc.amount += current_price * quantity
					acc.quantity += quantity
					return acc
				},
				{
					amount: 0,
					quantity: 0,
				}
			)
			state.quantity = total.quantity
			state.amount = total.amount
		},

		clearCart: (state, action) => {
			state.cart = []
		},
	},
})

const { actions, reducer } = cartSlice
export const { createPost, updatePost, deletePost } = actions
export default reducer
