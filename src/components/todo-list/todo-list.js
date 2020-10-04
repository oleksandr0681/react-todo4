import React from 'react';

import TodoItem from './todo-item';

// css
import './todo-list.css';

// const TodoList = (props) => {
const TodoList = ({todos, onDelItem}) => {
  // console.log(props);
  // console.log(props.todos[0].text);
  console.log(onDelItem);
  const todosEl = todos.map((item) => {
    return <TodoItem 
      key={item.id} 
      text={item.text} 
      checked={item.checked} 
      // onDelItem={() => {console.log('del item', item.id)}}
      // onDelItem={()=>{item.onDelItem(item.id)}}
      onDelItem={()=>{onDelItem(item.id)}}
    />
  });

  return (
    <ul className="todo-list">
      {/* <TodoItem text={todos[0].text} />
      <TodoItem text={todos[1].text} />
      <TodoItem text={todos[2].text} /> */}
      {todosEl}
    </ul>
  );
}

// export default означает что экспортируем только одну сущность.
export default TodoList;
