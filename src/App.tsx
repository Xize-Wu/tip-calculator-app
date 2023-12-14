import styled from "styled-components";

import AppLayout from './component/AppLayout'
import GlobalStyle from "./styles/GlobalStyles"

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
  }
`;

function App() {


  return (
    <Wrapper>
    <GlobalStyle/>
    <AppLayout/>
    </Wrapper>

  )
}

export default App
