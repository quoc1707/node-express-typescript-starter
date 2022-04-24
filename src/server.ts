import cors from 'cors'
import express, { json, urlencoded } from 'express'
import { join } from 'path'
import router from './config/router'
import { renderFile } from 'ejs'
;(() => {
    const app = express()
    const PORT = parseInt(process.env.PORT) || 5000

    app.use(cors())
        .use(json())
        .use(urlencoded({ extended: true }))
        .use('/static', express.static(join(__dirname, '../public')))
        .use(router)
        .set('views', join(__dirname, '../src/views'))
        .engine('html', renderFile)
        .set('view engine', 'html')
        .listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
})()
