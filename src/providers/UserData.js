import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    image: "",
    email: "",
    password: "",
    token: ""
  });

  const [userProgress, setUserProgress] = useState({
    habitsCount: 0,
    habitsDone: 0
  })

  return (
    <UserContext.Provider value={{userData, setUserData, userProgress, setUserProgress}}>
      {children}
    </UserContext.Provider>
  );
}
