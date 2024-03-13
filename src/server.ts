import express, { Request, Response, urlencoded } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

import mustache from "mustache-express";
import mainRoutes from "./routes/index";

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(urlencoded({ extended: true }));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Not found");
});

server.listen(process.env.PORT);
