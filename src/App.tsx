import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

/*const FetchUser = () => {
  const [userData, setUserData] = useState<User[]>([]);
  console.log("User data", userData);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5000/users")
      .then((response: AxiosResponse) => {
        setUserData(response.data);
      });
  }, []);

  return <div>{userData.length > 0 && <h1>{userData[1]._id}</h1>}</div>;
};
*/
