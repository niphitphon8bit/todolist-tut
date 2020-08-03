import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
    const [ SelectedProject, setSelectedProject ] = useState('INBOX');

    return (
        <SelectedProjectContext.Provider
            value={{ SelectedProject, setSelectedProject }}
        >
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
