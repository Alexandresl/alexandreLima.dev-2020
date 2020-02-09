import React from "react";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Search from '../components/Search'
import "../style/wall.less";
import "../style/theme.less";

const SearchPage = () => {
    return (
        <Layout placeholder={false}>
            <SEO lang="pt-BR" title="Search" />
            <Search />
        </Layout>
    );
};

export default SearchPage;
