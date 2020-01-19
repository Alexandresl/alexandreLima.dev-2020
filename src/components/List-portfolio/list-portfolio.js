import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItems from "./items-portfolio";

export default function() {
    return (
        <section id="portfolio" className="container">
            <PortfolioItems data={query} />
        </section>
    );
}
