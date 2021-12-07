import Header from "./Header";
import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
