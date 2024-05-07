import { Router } from 'express'
import { changeQuantity, addToCart, showAllCartItems, removeItemFromCart } from '../controllers/cart_controller.js'

const router = Router()

router.route('/').get(showAllCartItems).post(addToCart)
router.route('/:id').post(changeQuantity).delete(removeItemFromCart)

export default router