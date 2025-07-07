import { createContext, useState } from 'react';
export const UserContext= createContext();

function context(props) {
  const [users, setuser] = useState([
    {
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    country:"USA"
  },
  {
    id: 2,
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    country:"Germany"
  },{
    id: 3,
    email: "kevin@gmail.com",
    username: "kevinryan",
    password: "kev02937@",
    country:"England"
  }]);
  // console.log(props)
  return<UserContext.Provider value={{users, setuser}}>
    {props.children}
    </UserContext.Provider>
}

export default context