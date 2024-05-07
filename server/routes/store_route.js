import { Router } from "express"
import { addItem, removeItem, showAllStoreItems } from "../controllers/store_controller.js"
const router = Router()

router.route('/').get(showAllStoreItems).post(addItem)
router.route('/:id').delete(removeItem)

export default router