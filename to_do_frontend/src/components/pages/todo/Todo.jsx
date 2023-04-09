import React, {useEffect, useState} from 'react';
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import {readNote} from "../../../routes";
import axios from "axios";

const Todo = () => {

    /*localStorage.setItem('storageArray', JSON.stringify(tdo))*/ /*Скрыть это, и получится синхронизация с localStorage*/

    // const todoArray = JSON.parse(localStorage.getItem('storageArray'))

    const [todos, setTodos] = useState([])

    // useEffect(() => {
    //     localStorage.setItem('storageArray', JSON.stringify(todos))
    // }, [todos])

    const changeTodo = (id) => {
        const copy = [...todos]
        const currentItem = copy.find(item => {
            return item.id === id
        })
        currentItem.isCompleted = !currentItem.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        axios.delete()
            .then((resp) => {
                resp.status === 200 && setTodos(resp.data.items)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        axios.get(readNote)
            .then((resp) => {
                resp.status === 200 && setTodos(resp.data.items)
            })
            .catch((error) => console.log(error))
    }, []);

    // window.addTodo = addTodo
    return (
        <div className="text-white w-full sm:w-1/2  mx-auto">
            <h1 className={`text-2xl font-bold text-center mb-10`}>ToDo</h1>
            {todos && todos.map((todo, index) => {
                return <TodoItem setTodos={setTodos} todos={todos} todo={todo} key={index} index={index} changeTodo={changeTodo} removeTodo={removeTodo}/>
            })}
            <CreateTodoField todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Todo;