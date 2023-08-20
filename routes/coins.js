import { Router } from "express"
//import { createRequire } from "node:module"
//import { randomUUID } from "node:crypto"
//import zod from "zod"

export const router = Router()

router.get("/", (req, res) => {
    res.send("Hello World!")
    // TODO : Return a json with all available routes
})

router.get("/coins", (req, res) => {
    res.send("/coins")
    // TODO : Return a json with all coins info
})