import React from "react";
import Head from "../Head/head";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Layout = ({ placeholder, children }) => {
    return (
        <React.Fragment>
            <Head />
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />
            <div className="wrapper">{children}</div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
