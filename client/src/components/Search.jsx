import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Search() {
return (
  <div>
    <input
     type="text"
     placeholder="Search items ..."
    //  onChange={handleChange}
    //  value={searchInput} 
    />
    <button type={'submit'}>
     <FontAwesomeIcon icon={icon({name: 'magnifying-glass'})} />
     </button>
  </div>
)
}

export default Search;