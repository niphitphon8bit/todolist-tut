import React, { useState, useEffect } from 'react';
import { Checkbox } from '../components/Checkbox'
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context'


export const Tasks = () => {

    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';

    if (projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    }

    useEffect(() => {
        document.title = `${projectName}: Todo list`;
    }, [projectName])

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-test="project-name">
                {projectName}
            </h2>
            <ul className="tasks__list">
                {tasks.length !== 0 && tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    );
};