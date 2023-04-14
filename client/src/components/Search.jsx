import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Search(props) {

  const items = props.items;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  let filteredItems = [];
  if (searchInput.length > 0) {
    filteredItems = items.filter((item) => {
      return item.title.toLowerCase().includes(searchInput);
    });
  }
  console.log("filtered", filteredItems)


  return (
    <div className='nav search-bar-with-results'>
      <div className='nav search-bar-text'>
      <input
        type="text"
        placeholder="Search items ..."
        onChange={handleChange}
        value={searchInput}
      />
      <button type={'submit'}>
        <FontAwesomeIcon icon={icon({ name: 'magnifying-glass' })} />
      </button>
      </div>
      <ul className='results'>
        {filteredItems.map(item => (
          <Link to={`/items/${item.id}`}>
    <p>{item.title}</p></Link>
    ))}
        </ul>
    </div>
  );
}

export default Search;