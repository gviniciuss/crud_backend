import express from "express";
import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(routes);

app.listen(3000, () => console.log("Server is running on 3000 port"));
