function todoReducer(state = {
    todos: [
        {
            id: 1,
            title: 'tack1',
            completed: false
        },
        {
            id: 2,
            title: 'tack2',
            completed: false
        },
    ]
}, action) {
    switch (action.type) {
        case 'addTodo':
            let a = [...state.todos];
            a.push({
                id: a.length + 1,
                title: action.payload,
                completed: false
            });
            state = {...state, todos: a};
            break;
    }
    return state
}

export default todoReducer