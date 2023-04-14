import './Nav.scss';
import Search from './Search';

function Nav(props) {

  let categories = props.categories
  console.log(props.categories)

  return (
    <div className='nav nav-bar'>
      <div className="nav top-nav">
        <div className="nav logo"><h1>SFBS</h1></div>
        <div className="nav search"><Search items={props.items}/></div>
        <div className="nav right-nav">
          <div className='nav sell-now'>Sell Now</div>  
          <div className='nav profile'>Profile</div>
          <div className='nav my-bids'>My Bids</div>
      </div>
      </div>
      <div className="nav bottom-nav"> 
        <div className="nav categories">
          {/* {categories.map(category => (
            <h2>{category}</h2>
          ))} */}
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
