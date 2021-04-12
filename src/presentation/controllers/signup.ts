import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: badRequest(new MissingParamError('name'))
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: badRequest(new MissingParamError('name'))
      }
    }

    return httpRequest.body
  }
}
