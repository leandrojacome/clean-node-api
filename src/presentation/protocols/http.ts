export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any
}

export interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}

export class MissingParamError {
  constructor (paramName: string) {
    this.body = new Error(`Missing param: ${paramName}`)
  }

  statusCode: number
  body: Error
}
