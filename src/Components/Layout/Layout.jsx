import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Container from "../Shared/Container";

const Layout = () => {
  return (
    <Container>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </Container>
  );
};

export default Layout;
