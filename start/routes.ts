/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TodosController = () => import('#controllers/todos_controller')

router.on('/').render('pages/home')

router.get('/todos', [TodosController, 'index'])
router.get('/todos/create', [TodosController, 'create'])
router.get('/todos/:id', [TodosController, 'show'])
router.get('/todos/:id/edit', [TodosController, 'edit'])
router.put('/todos/:id/update', [TodosController, 'update'])

router.post('/todos', [TodosController, 'store'])

router.delete('/todos/:id', [TodosController, 'destroy'])
