import { MissingParamError } from '../erros/missing-param-error'
import { badRequest, ok } from '../helpers/http-helper'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const fieldsValidation = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of fieldsValidation) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return ok({})
  }
}
