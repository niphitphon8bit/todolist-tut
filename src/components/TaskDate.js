import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = (

    { setTaskDate,
        showTaskDate,
        setShowTaskDate
    }
) => showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
            <li
                data-testid="task-date-overlay"
            >
                <div
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().format('DD/MM/YYYY'));
                    }}
                    onKeyDown={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().format('DD/MM/YYYY'));
                    }}
                    role="button"
                    tabIndex={0}
                >
                    <span>
                        <FaSpaceShuttle />
                        <span>Today</span>
                    </span>
                </div>
            </li>
            <li
                data-testid="task-date-tomorrow"
            >
                <div
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                    }}
                    onKeyDown={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                    }}
                    role="button"
                    tabIndex={0}
                >
                    <span>
                        <FaSun />
                        <span>Tomorrow</span>
                    </span>
                </div>
            </li>
            <li
                data-testid="task-date-next-week"
            >
                <div
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                    }}
                    onKeyDown={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                    }}
                    role="button"
                    tabIndex={0}
                >
                    <span>
                        <FaRegPaperPlane />
                        <span>Next week</span>
                    </span>
                </div>
            </li>
        </ul>
    </div>
)