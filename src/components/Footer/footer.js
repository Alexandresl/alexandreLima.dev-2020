import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Logo from "../Logo/logo";
import Navlinks from "../NavLinks/navlinks";
import FooterLinks from "../Footer-links/footer-links";
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
                    <Link to="/" title={query.site.siteMetadata.title}>
                        <Logo />
                    </Link>
                </div>
                <div className="navlinks text-secondary">
                    <Navlinks />
                </div>
                <div
                    className="navlinks text-secondary"
                    style={{ marginTop: "20px" }}
                >
                    <FooterLinks />
                </div>
                <p className="text-primary f-d">
                    Copyright &copy; {query.site.siteMetadata.title}{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
