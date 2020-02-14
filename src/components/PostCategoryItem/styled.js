import styled from "styled-components";

export const CategoryItem = styled.li`
    min-width: 5%;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    background: ${props => (props.background ? props.background : "#1fa1f2")};
    border-radius: 5px;

    a {
        display: block;
        color: var(--textPrimary);
        padding: 0 1rem;

        &:hover {
            background: #33333366;
            border-radius: 5px;
        }
    }
`;
