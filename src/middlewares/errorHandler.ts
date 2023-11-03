import type { NextFunction, Request, Response } from 'express'
import status from 'http-status'
import { ApiError } from '@polioan/api-error'

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  console.error('Internal server error!', err)
  return res
    .status(status.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal server error!' })
}
