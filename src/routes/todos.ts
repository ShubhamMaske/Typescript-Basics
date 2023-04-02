import { Router } from "express";

import {Todo} from '../models/todo'

type requestBody = {text:string};
type requestParams = {todoId:string};

let todos: Todo[] = [];

const router = Router();
let len = 0;
router.get('/',(req, res, next) => {
    res.status(200).json({todos : todos})
});

router.post('/todo',(req, res, next) => {
    const body = req.body as requestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo);
    len = todos.length;
    res.status(200).json({success:true});
})

router.post('/todo/delete/:todoId',(req, res, next) => {
    const params = req.params as requestParams;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    console.log("len",len);
    console.log("todos len",todos.length);
    if(len > todos.length){
        len--;
     res.status(200).json({message: 'todo Item Deleted',todos});
    }
    else{
        res.status(404).json({message: 'Item not found'});
    }

})

router.post('/todo/edit/:todoId',(req, res, next) => {
    const params = req.params as requestParams;
    const body = req.body as requestBody;
    const todoId = params.todoId;
    const todoIndex = todos.findIndex( todoItem => todoItem.id === todoId);
    if(todoIndex >= 0){
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        }
        return res.status(200).json({message:'todo Item updated',todos: todos})
    }
    res.status(404).json({message: "Item not found"})
})

export default router;