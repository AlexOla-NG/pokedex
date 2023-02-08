import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      Home
      <Outlet />
    </div>
  );
};

export default Home;
