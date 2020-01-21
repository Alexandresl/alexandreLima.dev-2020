import React from "react";
import Head from "../Head/head";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { GlobalStyles } from "../../style/global";

import * as S from "./styled";

const Layout = ({ placeholder, children }) => {
    return (
        <React.Fragment>
            <Head />
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />

            <S.Wrapper>
                <GlobalStyles />
                {children}
            </S.Wrapper>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
