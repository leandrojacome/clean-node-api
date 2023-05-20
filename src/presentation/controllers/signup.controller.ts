import { InvalidParamError } from '../erros/invalid-param-error'
import { MissingParamError } from '../erros/missing-param-error'
import { ServerError } from '../erros/server-error'
import { badRequest, ok } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type EmailValidator } from '../protocols/email-validator'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}
  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const fieldsValidation = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of fieldsValidation) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      if (!this.emailValidator.isValid(httpRequest.body.email)) {
        return badRequest(new InvalidParamError('email'))
      }
      return ok({})
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}
