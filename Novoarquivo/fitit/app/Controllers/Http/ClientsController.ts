import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'


export default class ClientsController {
  
  public async register({ request, response }: HttpContextContract) {
    
    const {cpf,name,phone,observation} = await request.all()
    
    
    const user = await Client.create({cpf,name,phone,observation})
    return response.created(user)
  }
  
}
