import React from "react";

import * as S from "./styled";

const SearchIcon = () => {
    return (
        <S.ListItemSearch>
            <S.ListItemLink to="/search">
                <S.Icon />
            </S.ListItemLink>
        </S.ListItemSearch>
    );
};

export default SearchIcon;
