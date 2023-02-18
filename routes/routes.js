import express from 'express';



import { addTodo, getAllTodos, toggleTodoDone ,updateTodo,deleteTodo} from '../controller/todo-controller.js';


const router = express.Router();


router.post('/todos', addTodo);
router.get('/todos',getAllTodos);
router.get('/todos/:id',toggleTodoDone);
router.put('/todos/:id',updateTodo)
router.delete('/todos/:id',deleteTodo)

export default router;