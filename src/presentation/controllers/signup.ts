export class SignUpController {
  handle (httpRequest: any): any {
    // if (!(httpRequest.body.name)) {
    //   return {
    //     statusCode: 400,
    //     body: new MissingParamError('name')
    //   }
    // }
    // if (!(httpRequest.body.email)) {
    //   return {
    //     statusCode: 400,
    //     body: new MissingParamError('email')
    //   }
    // }
    return {
      statusCode: 400
    }
  }
}
