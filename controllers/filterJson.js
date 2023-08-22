import path from "node:path"
import { readFile } from "fs/promises"
const json = JSON.parse(
    await readFile(
        new URL("../models/coins.json", import.meta.url)
    )
)
const root = new URL("https://github.com/antonioortegas/coin-images-db/tree/main/coins")

export default function getFilteredJson(req) {
    // Copy the json to be filtered
    let filteredJson = JSON.parse(JSON.stringify(json))

    // Read the query params if any are present
    const { country, year, type } = req.query

    // Filter the json
    if (type) {
        filteredJson.collection = filteredJson.collection.filter(coin => coin.type === type)
    }
    if (year) {
        filteredJson.collection = filteredJson.collection.filter(coin => coin.year === year)
    }
    if (country) {
        filteredJson.collection = filteredJson.collection.filter(coin => coin.country.toString().includes(country))
    }

    // Build src and add it to the json to be sent and remove the country digits and underscores
    filteredJson.collection.forEach(coin => {
        const src = path.join(root.toString(), coin.type, coin.year, coin.country + ".jpg")
        coin.src = src
        coin.country = coin.country.replace(/_\d+$/, "")
        coin.country = coin.country.replace(/_/g, " ")
    })

    return filteredJson
}