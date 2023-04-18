import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Item from './Item';
import { loginContext } from "../providers/UserContext";
import('./MyProfile.scss');

const MyProfile = ({ users, items, bids, images }) => {

  const params = useParams();
  const [thisUser, setThisUser] = useState({});
  const { currentUser } = useContext(loginContext);

  const userId = Number(params.userId)

  let itemsForUser = items.filter(item => item.user_id === userId); 
  useEffect(() => {
    setThisUser(users.find(user => user.id === userId))
  }, [params]);

  return <body><div className="profile"> 
  <div className='profile-photo'> <img
    className="item"
    src={"https://i.imgur.com/b0h13kE.jpg"}
    alt="profile picture"
    width="400"
    height="400"
  />
    <h2>{thisUser ? thisUser.name : "Loading..."}</h2>
    </div>
    <div className='personal-info'>
    <p>{thisUser && thisUser.email}</p>
    <p>{thisUser && thisUser.city}, {thisUser && thisUser.country}</p>
    <p>{thisUser && thisUser.bio}</p>
    </div>
    </div>
    <div className="items">
      {currentUser ? (
      <h1>
        Your Items For Sale
        <hr />
      </h1> ) : 
      <h1>
        Items For Sale By User
        <hr />
      </h1> }
      </div>
    <div className='items-info'>
    {itemsForUser.map((item) => {
      let img = images.find(image => image.item_id === item.id)
      return (
        <Link
          to={`/items/${item.id}`}
          key={item.id}>
          <Item photo={img.img_url}></Item>
          <h2>{item.title}</h2>
        </Link>
      );
    })}
  </div>
  </body>
};

export default MyProfile;