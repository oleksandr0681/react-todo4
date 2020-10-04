import React, { Component } from 'react';

// css
// import './todo-item.module.css';
// Модульная стилизация.
import classes from './todo-item.module.scss';

export default class TodoItem extends Component {
    state = {
        done: false, 
        important: false, 
        delete: false
    }


    itemDone = () => {
        // console.log(this);
        this.setState((state) => {
            return {
                done: !state.done
                
            }
        });
    }

    setImportant = () => {
        // console.log('Important click');
        // Первый вариант изменения state.
        // this.setState((important) => {
        //     return {                
        //         important: !important
        //     }
        // });
        // Второй вариант изменения state.
        this.setState((state) => {
            return {                
                important: !state.important
            }
        });
    }

    // delItem = () => {
    //     this.setState((state) => {
    //         return {
    //             delete: !state.delete
    //         }
    //     });
    // }
    
    render() {
        // https://uk.reactjs.org/docs/react-dom.html#render
        // https://uk.reactjs.org/docs/react-component.html#props
        // Props представляет коллекцию значений, которые ассоциированы с компонентом.
        // https://metanit.com/web/react/2.3.php

        const {text, onDelItem} = this.props;

        // console.log(classes)
        // const styleLi = {
        //     textDecoration: checked ? 'line-through' : ''
        // };
        
        let itemClasses = classes.todoItem;

        if (this.state.done) {
            itemClasses += ` ${classes.todoItemDone}`;
        }

        if (this.state.important) {
            itemClasses += ` ${classes.todoItemImportant}`
        }

        if (this.state.delete) {
            
            itemClasses += ` ${classes.todoItemDelete}`
        }
        
        // Для второго варианта.
        const {todoItem__buttonGreen, todoItem__buttonRed} = classes;
    
        return (
            // <li onClick={this.itemDone} className={classes.todoItem  + ' ' + classes.todoItemDone}>
            <li className={itemClasses}>
                <div className={classes.todoItem__content}>
                    <span onClick={this.itemDone}>{text}</span>
                    <div>
                        {/* Первый вариант. */}
                        {/* <button className={classes.todoItem__buttonGreen}>i</button>
                        <button className={classes.todoItem__buttonRed}>del</button> */}
                        {/* Второй вариант. */}
                        <button onClick={this.setImportant} className={todoItem__buttonGreen}>i</button>
                        {/* <button onClick={this.delItem} className={todoItem__buttonRed}>del</button> */}
                        <button onClick={onDelItem} className={todoItem__buttonRed}>del</button>
                    </div>
                </div>
            </li>
        );
    }
}
