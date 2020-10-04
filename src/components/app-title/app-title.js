import React from 'react';

//css
import './app-title.css';

const AppTitle = () => {
    const title = 'This is ToDo App';
    return <h1 className="appTitle">{ title }</h1>;
  }
  
// export default означает что экспортируем только одну сущность.
export default AppTitle;
