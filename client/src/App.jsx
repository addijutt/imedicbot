import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home, Chat, Terms, PrivacyPolicy, Search } from './pages';

const App = () => {

  const location = useLocation();

  return (
    <>
      {location.pathname !== '/chat' && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='chat' element={<Chat />} />
        <Route path='terms' element={<Terms />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
      </Routes>
      {location.pathname !== '/chat' && location.pathname !== '/search' && <Footer />}
    </>
  )
}

export default App
