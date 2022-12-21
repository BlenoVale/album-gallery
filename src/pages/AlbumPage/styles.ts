import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AlbumTitle = styled.div`
    font-size: 35px;
    margin-bottom: 30px;
`;

export const PhotosArea = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 20px;
`;