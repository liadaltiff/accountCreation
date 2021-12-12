import axios from "axios";
import { User } from "../../types/user.interface";

interface IUserComponentProps {
  user: User;
}

const UserComponent: React.VFC<IUserComponentProps> = (
  props: IUserComponentProps
) => {
  const user: User = props.user;

  const updateRole = async (role: String) => {
    const res = await axios.patch(`http://localhost:5000/users/${user._id}`, {
      role,
    });
    console.log(res);
  };

  const setMaleRole = async () => {
    console.log("setMaleRole");
    await updateRole("Male");
  };

  const setFemaleRole = async () => {
    console.log("setFemaleRole");
    await updateRole("Female");
  };

  const setAdminRole = async () => {
    console.log("setAdminRole");
    await updateRole("Admin");
  };

  return (
    <div>
      <h1>
        Username: {user.userName}, Current Role:"{user.role}".
        <button onClick={setMaleRole}>Set Male Role</button>
        <button onClick={setFemaleRole}>Set Female Role</button>
        <button onClick={setAdminRole}>Set Admin Role</button>
        <br />
        <br />
        <br />
      </h1>
    </div>
  );
};

export default UserComponent;
