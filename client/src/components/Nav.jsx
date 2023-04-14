import './Nav.scss';
import Search from './Search';

function Nav() {
  return (
    <div className='nav-bar'>
      <div className="top-nav">
        <div className="logo"><h1>SFBS</h1></div>
        <div className="search"><Search /></div>
        <div className="right-nav">
          <div className='sell-now'>Sell Now</div>  
          <div className='profile'>Profile</div>
          <div className='my-bids'>My Bids</div>
      </div>
      </div>
      <div className="bottom-nav"> 
        <div className="categories">
          <h2>Electronics</h2>
          <h2>Furniture</h2>
          <h2>Vehichles</h2>
          <h2>Sport Equipment</h2>
          <h2>Clothing</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
