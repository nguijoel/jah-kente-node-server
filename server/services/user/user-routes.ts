import userService from "./user-service";

export default (app: any) => {
  //API endpoint to return users
  app.get("/users", async (_:any, res:any) => {
    const users = userService.allUsers();
    res.send(users);
  });

  //API endpoint to return a user by Id
  app.get("/users/:id", async (req:any, res:any) => {

    // Get the id from the request and convert it to a number.
    const id = parseInt(req.params.id),

          // Get the user by id
          user = userService.getUserById(id);
    res.send(user);
  });
};