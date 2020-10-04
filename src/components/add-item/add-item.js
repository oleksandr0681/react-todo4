import React, { Component } from 'react';

// css
import './add-item.css';

// export default означает что экспортируем только одну сущность.
export default class AddItem extends Component {

    state = {
        text: ''
    }

    onTextChange = (event) => {
        console.log(event.target.value);
        
        this.setState({
            text: event.target.value
        });
    }

    onSubmitFunction = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        // https://uk.reactjs.org/docs/react-dom.html#render
        // https://uk.reactjs.org/docs/react-component.html#props
        // Props представляет коллекцию значений, которые ассоциированы с компонентом.
        // https://metanit.com/web/react/2.3.php


        const taskTitle = 'Task';
        const {onAddItem} = this.props;

        const text = this.state.text;
        
        return(
            <form action="#" onSubmit={this.onSubmitFunction}>
                <div className="addItem">
                    <div className="addItem__title">
                        {taskTitle}
                    </div>
                    <input 
                        type="text" 
                        onChange={this.onTextChange} 
                        value={this.state.text}
                        placeholder="What do you need to do?" 
                        className="addItem__input" 
                    />
                </div>
                <div className="addItem__buttonDiv">
                    {/* Первый вариант onAddItem */}
                    {/* <button onClick={ () => this.props.onAddItem(text) } className="addItem__button">Add</button> */}
                    {/* Второй вариант onAddItem */}
                    {/* <button onClick={ () => onAddItem(text) } className="addItem__button">Add</button> */}
                    <button type="submit" className="addItem__button">Save Item</button>
                </div>
            </form>
        );
    }
}
