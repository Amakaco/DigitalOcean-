import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Login from "../pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;