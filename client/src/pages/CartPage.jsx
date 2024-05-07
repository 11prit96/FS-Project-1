import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCartItems } from '../redux-toolkit/features/cartSlice'

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log(cartItems);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])

    return (
        <div>
            Items in the cart are:
            <ul>
                {cartItems.map((item, index) =>
                    <li key={index}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}

export default CartPage
