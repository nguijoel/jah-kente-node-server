import * as http from "http";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import userRoutes from "./services/user/user-routes";
import staffRoutes from "./services/staff/staff.routes";


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/public")));

//Defines the API
app.get("/", async (_:any, res: any) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

userRoutes(app);
staffRoutes(app);

function server() {
  http
    .createServer(app)
    .listen(port, () => console.log(`Server listening on port ${port}`));
}

export default server;
