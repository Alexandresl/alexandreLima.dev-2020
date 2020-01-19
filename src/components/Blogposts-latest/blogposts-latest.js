import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogItems from "../items-blog";

export default function(props) {
    return (
        <section id="latest-blogposts" className="container">
            <div className="section-title">
                <h2>Latest Blogposts</h2>
            </div>
            <BlogItems data={query} remove={props.id} />
        </section>
    );
}
