import factory from '@adonisjs/lucid/factories'
import TodosFactory from '#models/todo'

export const TodoFactory = factory
  .define(TodosFactory, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      isCompleted: 0,
    }
  })
  .build()
