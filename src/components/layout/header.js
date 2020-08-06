import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = ({
    darkMode,
    setDarkMode
}) => {
    
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todolist"></img>
                </div>
                <div className="settings">
                    <ul>
                        <li
                            data-testid="quick-add-task-action"
                            className="settings__add"
                        >
                            +
                        </li>
                        <li
                            data-testid="dark-mode-acion"
                            className="settings__darkmode"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <FaPizzaSlice />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
