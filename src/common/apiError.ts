import status from 'http-status'

export class ApiError extends Error {
  constructor(
    public status: number,
    public override message: string
  ) {
    super()
    this.name = 'ApiError'
  }

  public static badRequest(message: string) {
    return new ApiError(status.BAD_REQUEST, message)
  }

  public static unauthorized(message: string) {
    return new ApiError(status.UNAUTHORIZED, message)
  }

  public static forbidden(message: string) {
    return new ApiError(status.FORBIDDEN, message)
  }

  public static notFound(message: string) {
    return new ApiError(status.NOT_FOUND, message)
  }

  public static internalServerError(message: string) {
    return new ApiError(status.INTERNAL_SERVER_ERROR, message)
  }
}
