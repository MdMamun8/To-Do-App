export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        todos: [...state.todos].filter((item) => item.id !== payload),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              data: payload.data,
            };
          }
          return todo
        }),
      };
      case "COMPLETE__TASK":
        console.log(payload)
        return {
          ...state,
          todos: [...state.todos].map((todo) => {
            if (todo.id === payload) {
              return {
                ...todo,
                isComplete: !todo.isComplete,
              };
            }
            return todo
          }),
        };
  
    default:
      return state;
  }
};
