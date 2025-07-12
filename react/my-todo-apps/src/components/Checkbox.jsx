import { useState } from 'react'
import { checkTodoItem } from '../api/Todo.jsx'
import { useAllTodoListContext } from '../context/TodoContext.jsx'
export default function CheckBox({state, id}) {
    const [isChecked, setIsChecked] = useState(state)
    const style = {
        width: '25px',
        height: '25px',
        borderRadius: '50px',
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: isChecked ? '#2680DA' : '#ffffff',
    }

    const { forceUpdate } = useAllTodoListContext()

    const handleOnClick = () => {
        setIsChecked(!isChecked)
        checkTodoItem({ id, isChecked })
        forceUpdate()        
    }

    return (
        <div style={style} className='checkbox-container' onClick = {handleOnClick}></div>        
    )
}