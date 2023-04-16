import './Nav.scss';
import Search from './Search';
import { Link } from 'react-router-dom';

function Nav(props) {

  let categories = props.categories
  console.log(props.categories)

  return (
    <div className='nav nav-bar'>
      <div className="nav top-nav">
        <div className="nav logo btn mb1 bg-black">
          <Link to={'/'}>
          <h1>SFBS</h1></Link>
        </div>
        <div className="nav search"><Search items={props.items}/></div>
        <div className="nav right-nav">
          <div className='btn mb1 bg-black'><Link to={'/items/new'}>
          Sell Now</Link></div>  
          <div className='btn mb1 bg-black'>Profile</div>
          <div className='btn mb1 bg-black'>My Bids</div>
      </div>
      </div>
      <div className="nav bottom-nav"> 
        <div className="nav categories">
          {categories.map(category => (
              <Link
              to={`/categories/${category.id}`}
              className='btn mb1 bg-black'
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
