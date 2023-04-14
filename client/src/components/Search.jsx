import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

function Search(props) {

  const items = props.items;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  let filteredItems = items;
  if (searchInput.length > 0) {
    filteredItems = items.filter((item) => {
      return item.title.toLowerCase().includes(searchInput);
    });
  }
  console.log("filtered", filteredItems)

  let results = searchInput > 1 ? filteredItems.map(item => (
    <p>{item.title}</p>
    )) : ""


  return (
    <div className='search-bar-with-results'>
      <div className='search-bar-text'>
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
      <ul>
        {filteredItems.map(item => (
    <p>{item.title}</p>
    ))}
        </ul>
    </div>
  );
}

export default Search;