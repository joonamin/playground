
export function fetchTodoItems(category) {
    const result = JSON.parse(localStorage.getItem('todos'))
    
    if (category && category !== 'all')
        return result?.filter(obj => obj.category === category)
    return result || {}
}

export function saveTodoItems(todoItem) {
    const savedItem = JSON.parse(localStorage.getItem('todos'))
    if (!savedItem) {
        todoItem['id'] = 1
        localStorage.setItem('todos', JSON.stringify([todoItem]))   
        return
    }
    todoItem['id'] = savedItem[savedItem.length - 1].id + 1
    const newItem = [...savedItem, todoItem]
    localStorage.setItem('todos', JSON.stringify(newItem))
}

export function updateTodoItem({ id, description }) {
    const savedItems = JSON.parse(localStorage.getItem('todos'))
    for (const item of savedItems) {
        if (item.id === id) {
            item['description'] = description
        }
    }
    localStorage.setItem('todos', JSON.stringify(savedItems))
}

export function checkTodoItem({ id, isChecked }) {
    const savedItems = JSON.parse(localStorage.getItem('todos'))
    const left = []
    let tgt = null
    const right = []
    for (const savedItem of savedItems) {
        if (savedItem.id !== id && !tgt) {
            left.push(savedItem)
        } else if (savedItem.id !== id && tgt) {
            right.push(savedItem)
        } else {
            tgt = savedItem
            tgt['category'] = isChecked ? 'todo' : 'done'
        }
    }
    console.log(`mutate!!! >>> ${JSON.stringify([...left, tgt, ...right])}`)
    localStorage.setItem('todos', JSON.stringify([...left, tgt, ...right]))
}

export function deleteTodoItem({ id }) {
    const savedItem = JSON.parse(localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify(savedItem.filter(item => item.id !== id)))
}