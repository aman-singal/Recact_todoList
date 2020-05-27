import { useState } from 'react';
import getCurrentDate from './GetDate'
const shortid = require('shortid');


export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  const uid = shortid.generate()
  
  return {
    todos,
    addTodo: todo => {
      setTodos([...todos, 
        {
          taskName: todo.title,
          uid: uid,
          refId: '1',
          dateCreated: getCurrentDate(),
          expiry: todo.expiry,
          priority: todo.priority,
          label: todo.label,
          checked: 'false',
          progress: 0,
          milestone:{
            no: 0,
            milestoneComp: 0,
            milestoneData:[{     

               }]
          }
        }]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};



//

