import styled from 'styled-components';

export const Form = styled.div`
display: flex;
flex-direction: column;
color: black;
margin: 4rem;
`;

export const OrganizationForm = styled.div`
  display: flex;
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
  margin-top: 2rem;
  display: flex;
  flex-direction: row-reverse;

`;