// yarn add express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
import express from 'express'

const port = 8082
const app = express()

app.listen(port, () => {
    console.log(`Starting with port ${port}`)
})