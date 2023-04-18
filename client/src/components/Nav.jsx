import "./Nav.scss";
import Search from "./Search";
import { Link } from "react-router-dom";

function Nav(props) {
  let categories = props.categories;

  return (
    <div className="nav nav-bar">
      <div className="nav top-nav">
        <div className="nav logo btn mb1 bg-black">
          <Link to={"/"}>
            <h1>SFBS</h1>
          </Link>
        </div>
        <div className="fav">
          sell<br></br>buy
        </div>
        <div className="nav search">
          <Search items={props.items} />
        </div>
        <div className="nav right-nav">
          <div className="btn mb1 bg-black">
            <Link to={"/items/new"}>Sell Now</Link>
          </div>
          <div className="btn mb1 bg-black dropdown">
            Profile
            <div className="dropdown-content">
              <Link to={`/items/${4}`}>My Items</Link>
              <Link to={`/profile/${4}`}>My Profile</Link>
              <Link to={`/logout`}>logout</Link>
            </div>
          </div>
          <div className="btn mb1 bg-black">
            <Link to={`bids/${4}`}>My Bids</Link>
          </div>
        </div>
      </div>
      <div className="nav bottom-nav">
        <div className="nav categories">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="btn mb1 bg-black"
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
