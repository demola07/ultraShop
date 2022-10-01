import express from 'express'

const router = express.Router()

import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').get(protect, updateOrderToPaid)

export default router
