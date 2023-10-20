import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";


const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/login' || <Header />}
      <div>
        <Routers />
      </div>
      {location.pathname === '/login' || <Footer />}
    </div>
  );
};

export default Layout;
