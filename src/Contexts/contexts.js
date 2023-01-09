import { createContext, useContext, useState } from 'react';
import P from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const starWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const [diffSearch, setDiffSearch] = useState('');
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchLoc, setSearchLoc] = useState('');
  const [disabled, setDisabled] = useState(false);

  const starWarsObject = {
    setDiffSearch,
    diffSearch,
    setSearchLoc,
    searchLoc,
    disabled,
    setDisabled,
    page,
    searchValue,
    setSearchValue,
    setPage,
    openMenu,
    setOpenMenu,
    navigate,
    characters,
    setCharacters,
  };

  return (
    <starWarsContext.Provider value={starWarsObject}>
      {children}
    </starWarsContext.Provider>
  );
};

export const useStarContext = () => {
  const context = useContext(starWarsContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
};

StarWarsProvider.propTypes = {
  children: P.node.isRequired,
};
