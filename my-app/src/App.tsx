import React from 'react';

import { Header, Main, Aside, Footer} from './layout'
import {Wrapper, MainWrapper,} from './styledComponents';

const App: React.FC = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <Header/>
        <Main/>
      </MainWrapper>
      <Aside/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
