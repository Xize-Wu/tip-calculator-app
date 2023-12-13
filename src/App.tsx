import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux'

import type { RootState } from './app/store'
import TipPercentageButton from "./component/LeftColumn/TipPercentageButton"
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
  const count = useSelector((state: RootState) => state.counter.value)


  return (
    // <>
    // Hello World
    // <>{count}</>
    // <TipPercentageButton/>
    // </>
    <Wrapper>
    <GlobalStyle/>
    <AppLayout/>
    </Wrapper>

  )
}

export default App
