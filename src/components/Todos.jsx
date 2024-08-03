import { useRecoilValue } from "recoil"
import { filteredList } from "../store/atoms/data"
import { Todo } from "./Todo"

export function Todos() {
    const todos = useRecoilValue(filteredList)
    return <ul>
        {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </ul>
}