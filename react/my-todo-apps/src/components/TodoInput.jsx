import Button from './Button.jsx'
import { fetchTodoItems, saveTodoItems } from '../api/Todo.jsx'
import { useTodoListContext } from '../context/TodoContext.jsx'
import { useRef } from 'react'
export default function TodoInput({category}) {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '10px',
    }

    let userInput = ''
    const textAreaRef = useRef(null)
    const { setTodoItems } = useTodoListContext()

    const handleOnChange = e => {
        userInput = e.target.value
    }
    const handleOnClick = () => {
        saveTodoItems({'category': category, 'description': userInput})
        setTodoItems(fetchTodoItems(category))
        if (textAreaRef.current) {
            userInput = textAreaRef.current.value = ''
        }
    }

    return (
        <div style={style}>
            <textarea ref={textAreaRef} onChange={handleOnChange}
                style={{width: '600px', height: '25px', resize: 'none', border: '1px solid #ccc', borderRadius: '6px'}}
            ></textarea>
            <Button label='submit' handleOnClick={handleOnClick}/>
        </div>
        
    )
}