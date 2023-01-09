import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/index';
import { Episodes } from './Pages/Episodes/index';
import { SpecificEp } from './Pages/SpecificEp/index';
import { Location } from './Pages/Location/index';
import { StarWarsProvider } from './Contexts/contexts';
import { GlobalStyles } from './Constants/global-styles';
import { Header } from './Components/Header';
import { SideBar } from './Components/SideBar';
import { ApolloProvider } from '@apollo/client';
import client from './services';
import { Characters } from './Pages/characters';
import { SpecificLoc } from './Pages/SpecificLoc';

export const PagesRoutes = () => {
  return (
    <Router>
      <StarWarsProvider>
        <ApolloProvider client={client}>
          <Header />
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episode/:id" element={<SpecificEp />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/location/:id" element={<SpecificLoc />} />
          </Routes>
          <GlobalStyles />
        </ApolloProvider>
      </StarWarsProvider>
    </Router>
  );
};
