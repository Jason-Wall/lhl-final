import './Nav.scss';
import Search from './Search';
import { Link } from 'react-router-dom';

function Nav(props) {

  let categories = props.categories
  console.log(props.categories)

  return (
    <div className='nav nav-bar'>
      <div className="nav top-nav">
        <div className="nav logo">
          <Link to={'/'}>
          <h1>SFBS</h1></Link>
        </div>
        <div className="nav search"><Search items={props.items}/></div>
        <div className="nav right-nav">
          <div className='nav sell-now'>Sell Now</div>  
          <div className='nav profile'>Profile</div>
          <div className='nav my-bids'>My Bids</div>
      </div>
      </div>
      <div className="nav bottom-nav"> 
        <div className="nav categories">
          {categories.map(category => (
              <Link
              to={`/categories/${category.id}`}
            >
               <h2>{category.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
