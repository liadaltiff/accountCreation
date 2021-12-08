export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  favColor: string;
  role: "Admin" | "Male" | "Female" | "Default";
}
