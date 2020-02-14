import React from "react";

import * as S from "./styled";

const SearchIcon = () => {
    return (
        <S.ListItemSearch>
            <S.ListItemLink to="/search" cover
            direction="down"
            duration={1}
            bg="var(--background)">
                <S.Icon />
            </S.ListItemLink>
        </S.ListItemSearch>
    );
};

export default SearchIcon;
