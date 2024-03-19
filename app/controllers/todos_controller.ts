import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  async index({ view }: HttpContext) {
    return view.render('todos/index')
  }
}
