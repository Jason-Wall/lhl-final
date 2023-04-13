import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Nav() {
  return (
    <div className='nav-bar'>
      <div className="top-nav">
        <div className="logo"><h1>SFBS</h1></div>
        <div className="search"><FontAwesomeIcon icon={icon({name: 'magnifying-glass'})} /></div>
        <div className='profile'>Profile</div>
      </div>
      <div className="bottom-nav"> 
        <div className="categories">
          <h2>Electronics</h2>
          <h2>Furniture</h2>
          <h2>Vehichles</h2>
          <h2>Sport Equipment</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
