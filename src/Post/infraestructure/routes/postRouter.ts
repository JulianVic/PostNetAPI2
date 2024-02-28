import express from "express";

import { createPostControllerInstance } from "../dependencies";

export const postRouter = express.Router();

postRouter.post("/", createPostControllerInstance.run.bind(createPostControllerInstance));