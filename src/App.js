import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context'


export const App = ({ darkModeDefault = false }) => {

  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <main
          className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </SelectedProjectProvider>
    </ProjectsProvider >
  )

};
