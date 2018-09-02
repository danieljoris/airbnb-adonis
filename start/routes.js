'use strict'

const Route = use('Route')


// Users
Route.post('/users', 'UserController.create')

// Auth
Route.post('/sessions', 'SessionController.create')


// Properties
Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')

Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')

// Images
Route.get('images/:path', 'ImageController.show')