import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const TotalAlbums = styled.div`
    font-size: 25px;
    margin: 10px;
`;

export const PaginationArea = styled.div`
    width: 800px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    font-size: 18px;
    border: 2px solid #000;
    border-radius: 10px;
    cursor:pointer;
    transition: ease all .1s;

    &:hover {
        font-size: 20px;
        font-weight: bold;
        color: #145c8c;
        border: 4px solid #145c8c;
    }
`;