import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      Home
      <Outlet />
    </>
  );
};

export default Home;
