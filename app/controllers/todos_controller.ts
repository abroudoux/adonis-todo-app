import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

export default class TodosController {
  async index({ view }: HttpContext) {
    const todos = await Todo.all()
    return view.render('todos/index', { todos })
  }
}
