import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import "../style/wall.less";

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
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">
                        <div className="main-title text-primary">
                            <img
                                className="logo"
                                src={this.props.data.site.siteMetadata.icon}
                                alt={this.props.data.site.siteMetadata.title}
                                style={{ width: 60 + "px", height: 60 + "px" }}
                            />
                        </div>
                        <p className="tag-line text-secondary">
                            Em breve!
                        </p>
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
