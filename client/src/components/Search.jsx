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
      return item.title.match(searchInput);
    });
  }
  console.log("filtered", filteredItems)

  return (
    <div>
      <input
        type="text"
        placeholder="Search items ..."
        onChange={handleChange}
        value={searchInput}
      />
      <button type={'submit'}>
        <FontAwesomeIcon icon={icon({ name: 'magnifying-glass' })} />
      </button>
      <div>
        {/* {filteredItems.map(item => {
          return(
          <div>
            <p>{item.title}</p>
          </div>
        )})} */}
          </div>
    </div>
  );
}

export default Search;