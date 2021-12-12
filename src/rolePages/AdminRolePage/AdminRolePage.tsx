import React, { FC, useState, useEffect, useContext, useMemo } from "react";
import UserComponent from "../../components/UserComponent/UserComponent";
import { User } from "../../types/user.interface";
import { UserProvider } from "../../UserContext";

const AdminRolePage = () => {
  const [data, setData] = useState<User[]>([]); // read the json file

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/users");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>List Of Users:</h1>
      <br />

      {data &&
        data.map((user: User) => (
          <UserComponent key={user.userName} user={user} />
        ))}
    </div>
  );
};

export default AdminRolePage;
