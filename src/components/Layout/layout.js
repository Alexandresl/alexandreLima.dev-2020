import React from "react";
import Head from "../Head/head";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

import * as S from "./styled";
import GlobalStyles from '../styles/global'

const Layout = ({ placeholder, children }) => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Head />
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />
            <S.Wrapper>{children}</S.Wrapper>
            
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
