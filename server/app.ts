import * as http from "http";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import userService from "./services/user/user-service";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Defines the API
app.get("/", async (_, res: any) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

//API endpoint to return users
app.get("/users", async (_, res) => {
  const users = userService.allUsers();
  res.send(users);
});

//API endpoint to return a user by Id
app.get("/users/:id", async (req, res) => {
  
  // Get the id from the request and convert it to a number.
  const id = parseInt(req.params.id),
        
        // Get the user by id
        user = userService.getUserById(id);
  res.send(user);
});


function server() {
  http
    .createServer(app)
    .listen(port, () => console.log(`Server listening on port ${port}`));
}

export default server;
