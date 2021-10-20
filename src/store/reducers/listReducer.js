const initialState = {
    todos: [
        {
          id: 1,
          title: "reading a book"
        },
        {
          id: 2,
          title: "workout"
        },
        {
          id: 3,
          title: "kerjaan"
        },
        {
          id: 4,
          title: "tidur"
        },
      ]
}

const listReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_TASK_REQUEST":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            return {
                ...state,
                todos: [...state.todos, newItem]
            }
        case "DEL_TASK_REQUEST":
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}


export default listReducer