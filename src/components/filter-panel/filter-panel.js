import React, { Component } from 'react';

// Модульная стилизация.
import classes from './filter-panel.module.scss';

// export default означает что экспортируем только одну сущность.
export default class FilterPanel extends Component {
    state = {
        all: true, 
        todo: false, 
        important: false
    }

    setAll = () => {
        // console.log(this);
        this.setState(() => {
            return {
                all: true, 
                todo: false, 
                important: false
            }
        });
    }

    setTodo = () => {
        this.setState(() => {
            return {
                all: false, 
                todo: true, 
                important: false
            }
        });
    }

    setImportant = () => {
        this.setState(() => {
            return {
                all: false, 
                todo: false, 
                important: true
            }
        });
    }

    render() {
        let allClasses = classes.filterPanel__button, 
            todoClasses = classes.filterPanel__button, 
            importantClasses = classes.filterPanel__button;

        if (this.state.all) {
            allClasses += ` ${classes.filterPanel__button_clicked}`;
        }

        if (this.state.todo) {
            todoClasses += ` ${classes.filterPanel__button_clicked}`;
        }

        if (this.state.important) {
            importantClasses += ` ${classes.filterPanel__button_clicked}`;
        }

        return(
            <div className={classes.filterPanel}>
                <button onClick={this.setAll} className={allClasses}>all</button>
                <button onClick={this.setTodo} className={todoClasses}>todo</button>
                <button onClick={this.setImportant} className={importantClasses}>important</button>
            </div>
        );
    }
}
