import {createContext, useState} from 'react';

export const loginContext = createContext();

export default function LoginProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = function(userId) {
   setCurrentUser(userId);
  };

  const logout = function() {
    setCurrentUser(null);
  };

  const userInfo = {currentUser, login, logout};

  return (
    <loginContext.Provider value={userInfo}>
      {props.children}
    </loginContext.Provider>
  );
};