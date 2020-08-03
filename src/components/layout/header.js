import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa';

export const Header = () =>{
    // const x =1;

    return (
    <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="Todolist"></img>
            </div>
            <div className="settings">
                <ul>
                    <li data-testid="quick-add-task-action" className="settings__add">+</li>
                    <li data-testid="dark-mode-acion" className="Settings__darkmode">
                        <FaPizzaSlice/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    );
};
    