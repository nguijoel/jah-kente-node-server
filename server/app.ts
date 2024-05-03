import * as http from "http";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import userService from "./services/user/user-service";
import staffService from "./services/staff/staff-service";


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/public")));

//Defines the API
app.get("/", async (_:any, res: any) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

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
//API endpoint to return users
app.get("/staff", async (_:any, res:any) => {
  const staff = staffService.allStaff();
  res.send(staff);
});

//API endpoint to return a user by Id
app.get("/staff/:id", async (req:any, res:any) => {

  // Get the id from the request and convert it to a number.
  const id = parseInt(req.params.id),

        // Get the user by id
        staff = staffService.getStaffById(id);
  res.send(staff);
});

function server() {
  http
    .createServer(app)
    .listen(port, () => console.log(`Server listening on port ${port}`));
}

export default server;
