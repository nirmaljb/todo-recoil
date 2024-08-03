import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { data } from "../store/atoms/data"

export function InputSection() {

    // const [item, setItem] = useState({})
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const todos = useSetRecoilState(data)

    const addToTodo = () => {
        todos((oldtodo) => [
            ...oldtodo,
            {
                id: Math.random(),
                title: title,
                description: description
            }
        ])
        setTitle('')
        setDescription('')
    }

    return <div>
        <label>Title :</label>
        <input id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <br></br>
        <label>Description :</label>
        <input id="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <br></br>
        <button onClick={addToTodo}>Add +</button>
    </div>
}