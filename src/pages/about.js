import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import "../style/wall.less";
import "../style/theme.less";

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
                    <div className="container">
                        <div className="align-left">
                            <p>
                                Iniciei com desenvolvimento em 2010, tendo
                                ingressado no curso técnico de Desenvolvimento
                                de Software (hoje reestruturado e chamado de
                                técnico em informática) na Escola Técnica Dr.
                                Solon Tavares no município de Guaíba.
                            </p>
                            <p>
                                Nesta época começei a criar os primeiros sites
                                para a web, utilizando principalmente HTML, CSS
                                e PHP.
                            </p>
                            <p>
                                Após algum tempo envolvido com outras
                                atividades, em 2018 volto a estudar sobre as
                                novas tecnologias para o desenvolvimento web,
                                principalmente sobre front end e todo o ambiente
                                relacionado.
                            </p>
                            <p>
                                Ingressei no primeiro semestre de 2019 no Curso
                                Superior de tecnologia em Sistemas para Internet
                                do IFRS (Instituto Federal de Educação, Ciência
                                e Tecnologia do Rio Grande do Sul.
                            </p>
                        </div>
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
