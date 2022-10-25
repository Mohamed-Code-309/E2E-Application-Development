# E2E-Application-Development

- the application runs on http://localhost:8080
- APIs:
  * GET => /users => list all users
  * GET => /users/:id => get single user
  * POST => /users => create user
  * PUT => /users => update user
  * DELETE => /users/:id => delete user
 - the body of the POST or PUT request, similar to the user model and the _id is not needed in the POST request :
 ```json
 {
    "_id": "6357c54b4396c403b0852879",
    "name": "mohamed Ahmed kamal",
    "email": "moha@sss.com",
    "password": "12390282"
}
 ```
 
 
