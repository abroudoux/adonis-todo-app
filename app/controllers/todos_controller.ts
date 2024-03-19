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

  async update({ params, request, response }: HttpContext) {
    const todo = await Todo.find(params.id)
    if (todo) {
      todo.title = request.input('title')
      todo.description = request.input('description')
      await todo.save()
    }
    return response.redirect().toRoute('todos.index')
  }

  async create({ view }: HttpContext) {
    return view.render('todos/create')
  }

  async store({ request, response }: HttpContext) {
    const todo = new Todo()
    todo.title = request.input('title')
    todo.description = request.input('description')
    await todo.save()
    return response.redirect().toRoute('todos.index')
  }

  async destroy({ params, response }: HttpContext) {
    const todo = await Todo.find(params.id)
    await todo?.delete()
    return response.redirect().toRoute('todos.index')
  }
}
