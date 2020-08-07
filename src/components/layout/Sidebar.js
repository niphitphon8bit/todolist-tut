import React, { useState } from 'react';
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar
} from 'react-icons/fa';
import { Projects } from '../Project'
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setshowProjects] = useState(true);


    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === 'inbox' ? 'active' : undefined}
                >
                    <div
                        aria-label="Show Inbox Tasks"
                        onClick={() => {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }}
                        onKeyDown={() => {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <span>
                            <FaInbox />
                        </span>
                        <span>
                            Inbox
                        </span>
                    </div>
                </li>
                <li
                    data-testid="today"
                    className={active === 'today' ? 'active' : undefined}
                >
                    <div
                        aria-label="Show Today Tasks"
                        onClick={() => {
                            setActive('today');
                            setSelectedProject('TODAY');
                        }}
                        onKeyDown={() => {
                            setActive('today');
                            setSelectedProject('TODAY');
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <span>
                            <FaRegCalendar />
                        </span>
                        <span>
                            Tody
                        </span>
                    </div>
                </li>
                <li
                    data-testid="next_7"
                    className={active === 'next_7' ? 'active' : undefined}
                >
                    <div
                        aria-label="Show Tasks For The Next 7 Days"
                        onClick={() => {
                            setActive('next_7');
                            setSelectedProject('NEXT_7');
                        }}
                        onKeyDown={() => {
                            setActive('next_7');
                            setSelectedProject('NEXT_7');
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <span>
                            <FaRegCalendarAlt />
                        </span>
                        <span>
                            Next 7 days
                        </span>
                    </div>
                </li>
            </ul>
            <div
                className="sidebar__middle"
                aria-label="Show/Hides Project"
                onClick={() => setshowProjects(!showProjects)}
                onKeyDown={() => setshowProjects(!showProjects)}
                role="button"
                tabIndex={0}
            >
                <span>
                    <FaChevronDown />
                </span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

            {showProjects && <AddProject />}
        </div>
    );
}

