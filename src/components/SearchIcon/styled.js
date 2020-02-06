import styled from "styled-components";
import { Link } from "gatsby";
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2";

export const ListItemSearch = styled.li`
    height: 100%;
    margin-right: 10px;
    justify-content: center;
    line-height: 100%;
    text-align: center;
`;

export const ListItemLink = styled(Link)`
    img {
        color: #3f5bba;
    }
    padding: 0;
    width: 100%;
    margin: 0;
    &:hover {
        background: none;
    }
`;

export const Icon = styled(Search)`
    width: 24px;
`;