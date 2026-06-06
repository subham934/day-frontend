import { createContext } from 'react'

export const userDataContext = createContext();

const UserContext = ({children}) => {
    console.log(children);
    const user = "john";
  return (
    <userDataContext.Provider value={user}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserContext;