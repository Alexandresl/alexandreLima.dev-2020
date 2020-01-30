import React from "react";
import { Link } from "gatsby";

import * as S from "./styled";

const PostCategoryItem = props => {
    const category = props.category;
    const background = props.background;
    return (
        <>
            <S.CategoryItem background={background}>
                <Link to={`/blog/cat/${category}`}>{category}</Link>
            </S.CategoryItem>
        </>
    );
};

export default PostCategoryItem;
