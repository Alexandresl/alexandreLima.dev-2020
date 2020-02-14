import styled from "styled-components";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const RecommendedWrapper = styled.section`
    border-bottom: 1px solid #38444d;
    border-top: 1px solid #38444d;
    background: var(--background);
    display: flex;
    padding: 0;
    width: 100%;
`;

export const RecommendedBox = styled.div`
    display: flex;
    padding: 3rem;
    width: 50%;
`;

export const RecommendedLink = styled(AniLink)`
    color: #1fa1f2;
    display: flex;
    padding: 3rem;
    text-decoration: none;
    transition: background 0.5s;
    width: 50%;

    &:hover {
        background: var(--recommendedLink);
    }

    &.previous {
        border-right: 1px solid #38444d;
        justify-self: flex-end;
    }

    &.next {
        justify-content: flex-end;
        border-left: 1px solid #38444d;
    }

    &.previous:before {
        content: "←";
        margin-right: 0.5rem;
    }

    &.next:after {
        content: "→";
        margin-left: 0.5rem;
    }
`;
