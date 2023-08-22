import { Router } from "express"
import getFilteredJson from "../controllers/filterJson.js"



export const router = Router()

router.get("/", (req, res) => {
    res.send("routes, /")
})

router.get("/coins", (req, res) => {
    const filteredJson = getFilteredJson(req)
    
    // Send the filtered json
    res.send(filteredJson)
})