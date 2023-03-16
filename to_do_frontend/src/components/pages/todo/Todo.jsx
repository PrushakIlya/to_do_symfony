import React, {useState} from 'react';
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

// const tdo = [
const todoArray = [
    {
        id: 11,
        title: 'Груши яблоки',
        isCompleted: false,
    },
    {
        id: 12,
        title: 'Коврик - длина 1,5-2м, шарина 1.5-1.6м',
        isCompleted: false,
    },
    {
        id: 13,
        title: 'Ремень',
        isCompleted: false,
    },
    {
        id: 14,
        title: 'Папе флешку',
        isCompleted: false,
    },
]


const Todo = () => {

    /*localStorage.setItem('storageArray', JSON.stringify(tdo))*/ /*Скрыть это, и получится синхронизация с localStorage*/

    // const todoArray = JSON.parse(localStorage.getItem('storageArray'))

    const [todos, setTodos] = useState(todoArray ? todoArray : [])

    // useEffect(() => {
    //     localStorage.setItem('storageArray', JSON.stringify(todos))
    // }, [todos])

    const changeTodo = (id) => {
        const copy = [...todoArray]
        const currentItem = copy.find(item => {
            return item.id === id
        })
        currentItem.isCompleted = !currentItem.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(item => {
                return item.id !== id
            })
        )
    }

    // window.addTodo = addTodo
    return (
        <div className="text-white w-full sm:w-1/2  mx-auto">
            <h1 className={`text-2xl font-bold text-center mb-10`}>ToDo</h1>
            {todoArray ? todos.map((todo, index) => {
                return <TodoItem setTodos={setTodos} todos={todos} todo={todo} key={index} index={index} changeTodo={changeTodo} removeTodo={removeTodo}/>
            }) : null}
            <CreateTodoField todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Todo;