import styled from "styled-components";

type ContainerProps = {
    wtHover: boolean
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    border: ${props => props.wtHover ? '3px solid #145c8c' : '3px solid #141414'};
    border-radius: 8px;
    cursor: ${props => props.wtHover ? 'auto' : 'pointer'};

    &:hover {
        opacity: ${props => props.wtHover ? '1' : '.8'};
        border:  3px solid #145c8c;
    }
`;

export const IMG = styled.img`
    border-radius: 8px;
`;