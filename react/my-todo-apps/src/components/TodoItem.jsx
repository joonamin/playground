import { useRef, useState } from 'react'
import { deleteTodoItem, updateTodoItem } from '../api/Todo.jsx'
import { IconButton } from './Button.jsx'
import CheckBox from './Checkbox.jsx'
import { DeleteItemIcon, EditItemIcon, SaveItemIcon } from './Icon.jsx'
import { useTodoListContext } from '../context/TodoContext'

export default function TodoItem({description, category, id}) {
    const style = {
        display: 'flex',
        flexDirection: 'flex-start',
        alignItems: 'center',
        width: '695px',
        height: '40px',
        borderBottom: '1px solidrgb(79, 43, 43)',
    }

    const [ writable, setWritable ] = useState(false)
    const textAreaRef = useRef(null)
    const { forceUpdate } = useTodoListContext()

    const handleDelete = id => {
        deleteTodoItem({ id })
        forceUpdate()
    }

    const handleEdit = () => {
        setWritable(true)
        forceUpdate()
    }

    const handleSave = id => {
        updateTodoItem({id, description: textAreaRef.current.value})
        setWritable(false)
        forceUpdate()
    }


    return (
        <div style={style}>
            <div style={{marginLeft: '10px', flex: 1}}><CheckBox state={category == 'done'} id={id} /></div>
            {!writable && <div style={{flex: 6, textAlign: 'start'}}>{description}</div>}
            {writable && <textarea defaultValue={description} ref={textAreaRef} style={{flex: 6, textAlign: 'start', height: '80%', resize: 'none'}}></textarea>}
            <div style={{flex: 1, display: 'flex', alignItems: 'center', width: '80%', height: '80%',}}>
                {!writable && <IconButton icon={EditItemIcon} handleOnClick={() => handleEdit()}/>}
                {writable && <IconButton icon={SaveItemIcon} handleOnClick={() => handleSave(id)}/>}
                <IconButton icon={DeleteItemIcon} handleOnClick={() => handleDelete(id)}/>
            </div>
        </div>
    )
}