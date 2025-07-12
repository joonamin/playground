import { useEffect } from 'react';
import TabBar from './TabBar.jsx'
import TodoItem from './TodoItem.jsx'
import TodoInput from './TodoInput.jsx';
import { fetchTodoItems } from '../api/Todo.jsx';
import { useTodoListContext, TodoListContextProvider, useAllTodoListContext } from '../context/TodoContext.jsx';

export default function TodoList({ category }) {
    return (
        <TodoListContextProvider>
            <TodoInput category={category}/>
            <TodoListContent category={category} />
        </TodoListContextProvider>
    )
}

export function TodoListContent({ category }) {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '15px',
        marginBottom: '40px',
        borderBottom: '2px dashed #000000',
    }

    const { isOpened, todoItems, setTodoItems, refreshCount: TodoListRefresh } = useTodoListContext()
    const { refreshCount: AllTodoListRefresh } = useAllTodoListContext()
    
    /* AllTodoList context의 state가 변경되어도,
    fetch되지 않는 데이터가 존재할 경우 todoListContext의 todoItem이
    업데이트가 되지 않으므로 동일한 데이터를 보여주게 된다.
    이를 방지하기 위해서 useEffect의 dependency로 refreshCount를 참조한다
    */
    useEffect(() => {
        setTodoItems(fetchTodoItems(category))
    }, [TodoListRefresh, AllTodoListRefresh, category, setTodoItems])

    return (
        <div style={style}>
            <TabBar label={category}/>
            {isOpened && (todoItems && <ul>{todoItems.map(item => <li key={item.id}><TodoItem description={item.description} category={item.category} id={item.id}/></li>)}</ul>)}
        </div>
    )
}