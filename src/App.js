import React, {Suspense} from 'react';
import { MainContainer, PageContent } from './styles';
import { BrowserRouter } from 'react-router-dom'; 
import Routes from './routes';
import LateralMenu from './components/LateralMenu';


function App(props) {


  return (
    <MainContainer>
      <LateralMenu />
      <BrowserRouter>
        <PageContent>
            <Routes/>
        </PageContent>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
