import React from 'react';
import './App.css';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

const App: React.FC = () => {
   return <>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
   </>
}

export default App;
