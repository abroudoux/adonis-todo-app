import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

export default class TodosController {
  async index({ view }: HttpContext) {
    const todos = await Todo.all()
    return view.render('todos/index', { todos })
  }

  async show({ params, view }: HttpContext) {
    const todo = await Todo.find(params.id)
    return view.render('todos/show', { todo })
  }

  async edit({ params, view }: HttpContext) {
    const todo = await Todo.find(params.id)
    return view.render('todos/edit', { todo })
  }

  async create({ view }: HttpContext) {
    return view.render('todos/create')
  }
}
