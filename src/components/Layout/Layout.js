import React from "react";
import Navbar from "../Navbar/Navbar";
//import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      {/* <Footer /> */}
      <Loader />
    </>
  );
}

export { Layout };
