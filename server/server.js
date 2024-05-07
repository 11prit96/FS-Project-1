import express from "express"
import storeRoutes from "./routes/store_route.js"
import cartRoutes from "./routes/cart_route.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

app.get('/api', (req, res) => {
    res.json({ message: "An e-commerce project" })
})

app.use('/api/store', storeRoutes)
app.use('/api/cart', cartRoutes)

const port = process.env.PORT || 5200

app.listen(port, () => {
    console.log("Server is running...");
})