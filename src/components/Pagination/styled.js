import styled from "styled-components";

export const PaginationWrapper = styled.section`
    align-items: center;
    color: #8899a6;
    display: flex;
    padding: 0.5rem 2rem;
    justify-content: space-between;
    font-size: 12px;
    a {
        color: #8899a6;
        text-decoration: none;
        transition: color 0.5s;

        &:hover {
            color: #1fa1f2;
        }
    }
`;
