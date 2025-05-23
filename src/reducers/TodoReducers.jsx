// Extract the main logic using reducers

function ToodReducers(state, action) { // reducer take two parameter state and action
    if (action.type == 'add_todo') {
        let todoText = action.payload.todoText // pauload is a object of the reducer
        return [
            ...state, {id: Date.now(), todoData: todoText, finished: false}
        ]
    }
    else if (action.type == 'edit_todo') {
        let todo = action.payload.todo
        let todoText = action.payload.todoText

        const updatedList = state.map((t) =>
            t.id === todo.id ? { ...t, todoData: todoText } : t
          );
          return updatedList
    }

    else if (action.type == 'delete_todo') {
        let todo = action.payload.todo 
        const updatedList = state.filter((t) => t.id !== todo.id);
        return updatedList;
    }

    else if(action.type == 'onchange_todo' ) {
        let todo = action.payload.todo
        let isFinished = action.payload.isFinished

        const updatedList = state.map((t) =>
          t.id === todo.id ? { ...t, isFinished } : t
        );
        return updatedList;
    }
    else {
        return state ;
    }
}

export default ToodReducers;