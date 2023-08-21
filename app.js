import express, { json } from "express"
import { router } from "./routes/coins.js"

const PORT = process.env.PORT ?? 3000
const app = express()
app.use(json())
app.disable("x-powered-by")

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})