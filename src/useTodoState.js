import { useState } from 'react';



export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  console.log(todos)

  return {
    todos,
    addTodo: todo => {
      setTodos([...todos, todo]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};



//

