import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogItems from "./items-blog";
import SectionTitle from "./sectiontitle";

export default function() {
    return (
        <section id="blog" className="container">
            <div className="section-title">
                <SectionTitle title="BLOG" />
            </div>
            <BlogItems data={query} />
        </section>
    );
}
