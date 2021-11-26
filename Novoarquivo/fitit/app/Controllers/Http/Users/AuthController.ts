import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const validations = await schema.create({
      email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string({}, [rules.confirmed()]),
      username: schema.string({}, [rules.unique({ table: 'users', column: 'username' })]),
    })
    const data = await request.validate({ schema: validations })
    const user = await User.create(data)
    return response.created(user)
  }

  //   login function
  public async login({ request, response, auth }: HttpContextContract) {
    const {email,password} = await request.all()

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '24hours',
      })
      return token.toJSON()
    } catch {
      return response
        .status(400)
        .send({ error: { message: 'User with provided credentials could not be found' } })
    }
  }

  //   logout function
  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.status(200)
  }
}
