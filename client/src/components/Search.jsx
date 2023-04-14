import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import useState from 'react';

function Search(props) {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  if (searchInput.length > 0) {
    props.items.filter((item) => {
      return item.title.match(searchInput);
    });
  }

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
        {props.items.map((item) => {
          <div>
            <p>{item.title}</p>
          </div>
        })};
          </div>
    </div>
  );
}

export default Search;