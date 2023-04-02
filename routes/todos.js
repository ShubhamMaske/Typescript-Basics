"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
let len = 0;
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    len = todos.length;
    res.status(200).json({ success: true });
});
router.post('/todo/delete/:todoId', (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    console.log("len", len);
    console.log("todos len", todos.length);
    if (len > todos.length) {
        len--;
        res.status(200).json({ message: 'todo Item Deleted', todos });
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
});
router.post('/todo/edit/:todoId', (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text
        };
        return res.status(200).json({ message: 'todo Item updated', todos: todos });
    }
    res.status(404).json({ message: "Item not found" });
});
exports.default = router;
