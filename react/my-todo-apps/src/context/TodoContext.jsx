import { useContext, createContext, useState } from 'react'
const TodoListContext = createContext()
const AllTodoListContext = createContext()

export function useTodoListContext() {
    const context = useContext(TodoListContext)
    if (!context) throw new Error('TodoListContext로 감싸야합니다.')
    return context;
}

export function TodoListContextProvider({ children }) {
    const [isOpened, setIsOpened] = useState(true)
    const [todoItems, setTodoItems] = useState([])
    const [refreshCount, setRefreshCount] = useState(0)

    const forceUpdate = () => {
        setRefreshCount(refreshCount + 1)
    }
    return (
        <TodoListContext.Provider value={{ isOpened, setIsOpened, todoItems, setTodoItems, refreshCount, forceUpdate }}>
            { children }
        </TodoListContext.Provider>
    )
}

export function useAllTodoListContext() {
    const context = useContext(AllTodoListContext)
    if (!context) throw new Error('AllTodoListContext로 감싸야합니다')
    return context
}

export function AllTodoListContextProvider({ children }) {
    const [refreshCount, setRefreshCount] = useState(0)
    const forceUpdate = () => {
        setRefreshCount(refreshCount + 1)
    }
    
    return (
        <AllTodoListContext.Provider value={{ refreshCount, forceUpdate }}>
            { children }
        </AllTodoListContext.Provider>
    )
}