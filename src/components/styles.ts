import styled from 'styled-components';

export const HomeHeader = styled.div`
  width: 100%;
  background-color: limegreen;
  height: 5rem;

  h1 {
    color: white;
    padding: 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  margin-top: 4px;
  background-color: green;
  padding: 1rem;
  border: 2px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  color: white;
  border-color: white;

  :hover {
    background-color: white;
    color: green;
  }
`;
