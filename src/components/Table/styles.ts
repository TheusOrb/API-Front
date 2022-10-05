import styled from 'styled-components';


export const TableHome = styled.table`
    margin: 4rem;
    border-collapse: collapse;
    text-align: center;
    border-radius:8px;
    overflow: hidden;
`;

export const TableHead = styled.thead`
    position: sticky;
    z-index: 100;
    border: 1px solid black;
    
`;

export const HeadRow = styled.tr`
    background-color: limegreen;
`;

export const HeadData = styled.th`
    padding: 8px;
    color: white;
    text-transform: capitalize;
    font-size: 14px;

    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const TableBody = styled.tbody``;

export const BodyRow = styled.tr`
    background: white;
`;

export const TableData = styled.td`
    padding: 16px;
    border: 1px solid black;
    font-size: 14px;
    color: black;
`;
