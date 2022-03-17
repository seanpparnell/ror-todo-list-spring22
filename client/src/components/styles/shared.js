import styled from 'styled-components';

export const MainHeader = styled.h1`
  background-color: ${ props => props.bg ? "#F2F2F2" : "white"};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
  font-weight: 300;
`

export const AboutHeader = styled.div`
  background-color: ${ props => props.bg ? "#F2F2F2" : "white"};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutH1 = styled.h1`
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
  font-weight: 600;
`

export const AboutP = styled.p`
  color: black;
  text-align: center;
  font-weight: 300;
`