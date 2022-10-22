import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);

  const [userProgress, setUserProgress] = useState({
    habitsCount: 0,
    habitsDone: 0
  })

  const [userOptions, setUserOptions] = useState(false);


  return (
    <UserContext.Provider value={{userData, setUserData, userProgress, setUserProgress, userOptions, setUserOptions}}>
      {children}
    </UserContext.Provider>
  );
}
