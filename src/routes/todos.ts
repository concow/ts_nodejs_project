import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos";

const router = Router();
//middleware routes/endpoints for incoming requests.

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
