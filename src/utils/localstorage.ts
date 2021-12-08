import { User } from "../types/user.interface";

export function getUserLS(): User | undefined {
  const value = localStorage.getItem("CurrentlyLoggedUser");
  if (value) {
    return JSON.parse(value);
  } else {
    return undefined;
  }
}

export function setUserLS(user: User) {
  localStorage.setItem("CurrentlyLoggedUser", JSON.stringify(user));
}
