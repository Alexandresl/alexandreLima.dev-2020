import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";
import "../style/blog.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    setWindowHeight() {
        this.setState({
            winHeight: window.innerHeight
        });
    }

    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="pt-BR"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="blog"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="container">
                        <PostItem
                            slug="/about/"
                            background="#7aab13"
                            category="MISC"
                            date="21 de Dezembro de 2019"
                            timeToRead="1"
                            title="Em breve..."
                            description="Do que trata este blog?"
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                author
                icon
                logo
                capitalizeTitleOnHome
                titleImage
                introTag
                description
            }
        }
    }
`;
