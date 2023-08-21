import { Router } from "express"
import { readFile } from "fs/promises"
import path from "path"
const root = new URL("https://github.com/antonioortegas/coin-images-db/tree/main/coins")
const json = JSON.parse(
    await readFile(
        new URL("../models/coins.json", import.meta.url)
    )
)

export const router = Router()

router.get("/", (req, res) => {
    res.send("routes, /")
})

router.get("/coins", (req, res) => {
    
    json.collection.forEach(coin => {
        const src = path.join(root.toString(), coin.type, coin.year, coin.country + ".jpg")
        coin.src = src
    })
    res.send(json)
})