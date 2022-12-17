
import {Todo} from '../interfaces/interfaces'
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

interface props {
  todo:Todo
}
export const TodoItem = ({todo}:props) => {
  const {todoState} = useContext(TodoContext);
  console.log(todoState)
  const {toggleTodo}=useContext(TodoContext);
  const handleDbCLick = () => {
    toggleTodo(todo.id);
  }
  
  return (
   <li style={{
    cursor:'pointer',
    textDecoration:todo.completed ?'line-through':''
  }}onDoubleClick={handleDbCLick} >
    {
      todo.desc
    }
   </li>
  )
}
