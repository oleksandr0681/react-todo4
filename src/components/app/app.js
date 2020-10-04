import React, { Component } from 'react';

// components import
import AppTitle from './../app-title';
import SearchPanel from './../search-panel';
import FilterPanel from './../filter-panel';
import TodoList from './../todo-list';
import AddItem from './../add-item';
import Task from './../task';
import Save from './../save';

// css
import './app.css';

// img
import logo from './img/react.png';

// export default означает что экспортируем только одну сущность.
export default class App extends Component {

  // Объект state описывает внутреннее состояние компонента
  // https://metanit.com/web/react/2.4.php
  state = {
    todoList: [
      {id: 1, text: 'Wake up', done: true, important: false}, 
      {id: 2, text: 'Eat breakfast', done: false, important: false},
      {id: 3, text: 'Go to work', done: false, important: false}
    ]
  }

  delItem = (id) => {
    // console.log(id);
    
    // Первый вариант срелочной функции.
    // const index = this.state.todoList.findIndex((item) => {
    //   if (id === item.id) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // });

    // Второй вариант срелочной функции.
    // const index = this.state.todoList.findIndex( (item) => id === item.id );

    // console.log(index);

    // Первый вариант setState.
    // this.setState((state) => {
    //   const index = this.state.todoList.findIndex( (item) => id === item.id );
    // });

    // Второй вариант setState.
    this.setState(({todoList}) => {
      const index = todoList.findIndex( (item) => id === item.id );
      // todoList.splice(index, 1);

      // Первый вариант
      // const before = todoList.slice(0, index);
      // const after = todoList.slice(index + 1);
      // const newTodoList = before.concat(after);

      // Второй вариант
      const newTodoList = [
        ...todoList.slice(0, index), 
        ...todoList.slice(index + 1)
      ];

      return {
        todoList: newTodoList
      }
    });
  }

  addItem = (text) => {
    console.log(text);

    // Первый вариант setState.
    this.setState((state) => {
      // Копия массива.
      const newTodoList = state.todoList.slice();
      // Добавление нового элемента в массив.
      let maxId = -1;
      let itemId;
      if (newTodoList.length > 0) {
        maxId = newTodoList[0].id;
      }
      for (let i = 0; i < newTodoList.length; i++) {
        if (newTodoList[i].id > maxId) {
          maxId = newTodoList[i].id;
        }
      }
      // Если массив пустой.
      if (maxId === -1) {
        itemId = 1;
      }
      // Если массив не пустой.
      else {
        itemId = maxId + 1;
      }
      newTodoList.push({id: itemId, text: text, checked: false});
      // console.log(itemId, newTodoList);

      return {
        todoList: newTodoList
      }
    });

    // Второй вариант setState.
    // this.setState(({todoList}) => {
    //   // Копия массива.
    //   const newTodoList = todoList.slice();
    //   // Добавление нового элемента в массив.
    //   let maxId = -1;
    //   let itemId;
    //   if (newTodoList.length > 0) {
    //     maxId = newTodoList[0].id;
    //   }
    //   for (let i = 0; i < newTodoList.length; i++) {
    //     if (newTodoList[i].id > maxId) {
    //       maxId = newTodoList[i].id;
    //     }
    //   }
    //   // Если массив пустой.
    //   if (maxId === -1) {
    //     itemId = 1;
    //   }
    //   // Если массив не пустой.
    //   else {
    //     itemId = maxId + 1;
    //   }
    //   newTodoList.push({id: itemId, text: 'Added item', checked: true});
    //   console.log(itemId, newTodoList);

    //   return {
    //     todoList: newTodoList
    //   }
    // });
  }

  render() {
    return (
      <div className="app">
        <div>
          <img src="img/react.png" alt="react" className="picture" />
          <AppTitle />
          <SearchPanel />
          <FilterPanel />
          <TodoList todos={this.state.todoList} onDelItem={this.delItem} />
          <AddItem onAddItem={this.addItem} />
          {/* <Task /> */}
          {/* <Save /> */}
          {/* Картинка из компонента */}
          <img src={logo} alt="react" className="picture" />
        </div>
      </div>
    );
  }
}
