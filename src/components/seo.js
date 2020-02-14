import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        logo
                        siteUrl
                    }
                }
            }
        `
    )

    

    const metaDescription = description || site.siteMetadata.description;
    
    const url = site.siteMetadata.siteUrl
    
    const ogImage = `${url}${image || site.siteMetadata.logo}`;
    
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={
                title === site.siteMetadata.title
                    ? title
                    : `%s | ${site.siteMetadata.title}`
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`
                },
                {
                    name: `twitter:image:src`,
                    content: ogImage
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: `og:image`,
                    content: ogImage
                }
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `pt-BR`,
    meta: [],
    description: ``
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

export default SEO;
