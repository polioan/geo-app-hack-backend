import express from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler.js'
import { getEnv } from './common/getEnv.js'
import { getCsvData } from './data/csv.js'
import QRCode from 'qrcode'
import { ApiError } from './common/apiError.js'
import { randomChoice } from '@polioan/common'

const SERVER_URL = getEnv('SERVER_URL')

if (!SERVER_URL) {
  console.error('SERVER_URL is not set.')
  process.exit(1)
}

async function bootstrap() {
  const app = express()

  app.use(cors({ origin: '*' }))
  app.use(express.json({}))
  app.disable('x-powered-by')

  app.get('/qrimg', async (_req, res, next) => {
    try {
      const data = await getCsvData()
      const random = randomChoice(data)!
      const url = await QRCode.toDataURL(
        `https://vk.com/app51775653/#qrid=${encodeURIComponent(random.Name)}`
      )
      return res.send(`<img src="${url}" alt="QR Code" />`)
    } catch (e) {
      return next(e)
    }
  })

  app.get('/random', async (_req, res, next) => {
    try {
      const data = await getCsvData()
      const random = randomChoice(data)!
      return res.send(random)
    } catch (e) {
      return next(e)
    }
  })

  app.get('/byname', async (req, res, next) => {
    try {
      const { name } = req.query
      if (typeof name !== 'string') {
        throw ApiError.badRequest('Неправильное имя!')
      }
      const data = await getCsvData()
      const value = data.find(v => v.Name === name)
      if (!value) {
        throw ApiError.notFound('Имя не найдено!')
      }
      return res.json(value)
    } catch (e) {
      return next(e)
    }
  })

  app.get('/bynameqr', async (req, res, next) => {
    try {
      const { name } = req.query
      if (typeof name !== 'string') {
        throw ApiError.badRequest('Неправильное имя!')
      }
      const data = await getCsvData()
      const value = data.find(v => v.Name === name)
      if (!value) {
        throw ApiError.notFound('Имя не найдено!')
      }
      const url = await QRCode.toDataURL(
        `https://vk.com/app51775653/#qrid=${encodeURIComponent(value.Name)}`
      )
      return res.send(`<img src="${url}" alt="QR Code" />`)
    } catch (e) {
      return next(e)
    }
  })

  app.get('/all', async (_req, res, next) => {
    try {
      const data = await getCsvData()
      return res.json(data)
    } catch (e) {
      return next(e)
    }
  })

  app.use(errorHandler)

  await new Promise<void>(resolve => {
    app.listen(getEnv('PORT') ?? 3000, resolve)
  })
}

bootstrap()
  .then(() => {
    console.log(`Server started at :${getEnv('PORT') ?? 3000}`)
  })
  .catch(e => {
    console.error('Server failed.', e)
    process.exit(1)
  })
