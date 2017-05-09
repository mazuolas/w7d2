export function allTodos(state){
  let keys = Object.keys(state.todos);
  return keys.map(key => state.todos[key]);
}

export function stepsByTodoId(state, todoId){
  let keys = Object.keys(state.steps).filter(function(key){
    return key === todoId;
  });
  console.log("HELLO");
  console.log(keys);
  return keys.map(key => state.steps[key]);
}

// export default { allTodos, stepsByTodoId };
