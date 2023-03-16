import React, {useState} from 'react';
import Check from "./Check";
import {BsTrash} from "react-icons/bs";
import {VscEdit} from "react-icons/vsc";
import {GoCheck} from "react-icons/go";
import InputEdit from "../inputEdit/InputEdit";

const TodoItem = ({todo, changeTodo, removeTodo, todos, setTodos}) => {

    const [edit, setEdit] = useState(true)
    const [inputValue, setInputValue] = useState('')

    function valueTask(e) {
        setInputValue(e)
        setEdit(!edit)
    }

    // useEffect(() => {
    //
    // }, [inputValue])

    function editTask(id) {
        const copy = [...todos]

        const current = copy.find((item) => {
            return item.id === id
        })
        current.title = inputValue
        setTodos(copy)
        setEdit(!edit)
    }

    return (
        <div
            className={`flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full`}
        >
            {edit ? <>
                <button
                    onClick={() => changeTodo(todo.id)}
                    className={`flex items-center w-full`}>
                    <Check isCompleted={todo.isCompleted}/>
                    <div className={`text-left ${todo.isCompleted ? 'line-through' : null}`}>{todo.title}</div>
                </button>
                <button onClick={(e) => valueTask(todo.title, todo.id)}>
                    <VscEdit size={22}
                             className={`text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300 mr-3`}/>
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                    <BsTrash size={22}
                             className={`text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300`}/>
                </button>
            </> : <>
                <InputEdit inputValue={inputValue} setInputValue={setInputValue} />
                <button onClick={() => editTask(todo.id)}>
                    <GoCheck size={24}
                             className={`text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300`}/>
                </button>
            </>}
        </div>
    );
};

export default TodoItem;