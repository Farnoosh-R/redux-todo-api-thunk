"use client"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo } from "../../store/features/todo/todoSlice"

const Card = () => {
    
const todoState = useSelector((state) => state.todos)
const dispatch = useDispatch()

console.log(todoState)

useEffect(() => {
    dispatch(fetchTodo())
}, [])

    return(
        
        <div className="Card">
        <ul>
        {todoState.data.map((todo) => {
            return(
                <li key={todo.id}>{todo.title}</li>
            )
        })}
        </ul>
        </div>
  
    )
}
export default Card;