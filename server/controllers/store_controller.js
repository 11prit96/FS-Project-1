import { v4 as uuid } from 'uuid';

let storeItems =
    [
        { id: uuid(), name: "Samsung Galaxy S5", quantity: 45 },
        { id: uuid(), name: "Motorola Game Series", quantity: 10 },
        { id: uuid(), name: "Apple iPhone 13 Pro", quantity: 59 },
        { id: uuid(), name: "Poco X6", quantity: 87 }
    ]

export const storeItemsCopy = [...storeItems]

export const showAllStoreItems = (req, res) => {
    res.status(200).json(storeItems)
}

export const addItem = (req, res) => {
    const { name, quantity } = req.body
    const id = uuid()
    const newItem = { id, name, quantity }
    storeItems.push(newItem)
    // console.log('newItem', newItem);
    res.status(201).json({ message: "New item has been added to the store" })
}

export const removeItem = (req, res) => {
    const { id } = req.params
    const newStoreList = storeItems.filter(item => item.id !== id)
    // console.log('newStoreList', newStoreList);
    storeItems = newStoreList
    res.status(200).json({ message: `Item with id ${id} has been deleted` })
}