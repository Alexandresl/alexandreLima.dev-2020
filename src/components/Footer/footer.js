import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Anilink from 'gatsby-plugin-transition-link/Anilink'
import Logo from "../Logo/logo";
import NavlinksFooter from "../NavlinksFooter/navlinksFooter";
import SocialLinks from "../SocialLinks";
import "../../style/footer.less";

export default function() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <Anilink to="/" title={query.site.siteMetadata.title} cover
                        direction="down"
                        duration={1}
                        bg="var(--background)">
                        <Logo />
                    </Anilink>
                </div>
                <div className="navlinks text-secondary">
                    <NavlinksFooter />
                </div>
                <div
                    className="navlinks text-secondary"
                    style={{ marginTop: "20px" }}
                >
                    <SocialLinks />
                </div>
                <p className="text-primary f-d">
                    Copyright &copy; {query.site.siteMetadata.title}{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
