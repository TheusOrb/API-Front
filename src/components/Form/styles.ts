import styled from 'styled-components';

export const Form = styled.div`
display: flex;
flex-direction: column;
color: black;
margin: 4rem;
`;

export const OrganizationForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Input = styled.input`
  background-color: limegreen;
  text-align: center;
  border-radius:6px;
  width: 20rem;
  height: 2rem;
  margin-top: 1rem;
  overflow: hidden;
  text-align: center;
  color: white;
  border-color: white;
  ::placeholder{
    color: white;
  }
`;

export const OrganizationButoon = styled.div`
  display: flex;
  flex-direction: row-reverse;

`;

export const Add = styled.button`
  background-color: limegreen;
  width: 3rem;
  border-color: white;
  border-radius:6px;
  color: white;
  height: 2rem;
`;
export const Remove = styled.button`
  background-color: red;
  width: 3rem;
  border-color: white;
  border-radius:6px;
  color: white;
  height: 2rem;
`;