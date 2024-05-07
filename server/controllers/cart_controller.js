import { storeItemsCopy } from "./store_controller.js"
let cart = []

export const showAllCartItems = (req, res) => {
    res.status(200).json({ cart })
}

export const addToCart = (req, res) => {
    const { name } = req.body
    const addedItem = storeItemsCopy.find(item => item.name === name)
    addedItem.quantity = 1
    // console.log('item', item)
    cart.push(addedItem)
    res.status(201).json({ message: 'Item added to cart' })
}

export const changeQuantity = (req, res) => {
    const { quantity } = req.body
    const { id } = req.params
    const changedQuantityItem = cart.find(item => item.id === id)
    changedQuantityItem.quantity = quantity
    res.status(200).json({ message: `Quantity for item with id ${id} has been changed` })
}

export const removeItemFromCart = (req, res) => {
    const { id } = req.params
    const newCart = cart.filter(item => item.id !== id)
    cart = newCart
    res.status(200).json({ message: `Item with id ${id} removed from cart` })
}