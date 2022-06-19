import express, { json, urlencoded } from 'express'

import cors from 'cors'
import { join } from 'path'
import { renderFile } from 'ejs'
import router from './config/router'

;(() => {
    const app = express()
    const PORT = parseInt(process.env.PORT) || 3000

    app.use(cors())
        .use(json())
        .use(urlencoded({ extended: true }))
        .use(express.static(join(__dirname, '../public')))
        .use(router)
        .set('views', join(__dirname, '../src/views'))
        .engine('html', renderFile)
        .set('view engine', 'html')
        .listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
})()
