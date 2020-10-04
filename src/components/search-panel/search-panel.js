import React from 'react';

// css
import './search-panel.css';

// В данном случае в return должна быть обёртка <div></div>.
const SearchPanel = () => {
  const searchTitle = 'To do:';
  return (
    <div className="search-panel">
      <p className="search-panel__title" >{searchTitle}</p>
      <input type="text" placeholder="search..." className="search-panel__input" />
      <button className="search-panel__button">ПОИСК</button>
    </div>
  );
}

// export default означает что экспортируем только одну сущность.
export default SearchPanel;
