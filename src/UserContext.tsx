import React, { createContext, useState } from "react";
import { User } from "./types/user.interface";

interface UserContextProps {
  loggedInUser: User;
  setLoggedInUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps>({
  loggedInUser: {} as User,
  setLoggedInUser: () => {},
});

interface UserProviderProps {}

export const UserProvider: React.FC<UserProviderProps> = (props) => {
  const [loggedInUser, setLoggedInUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
