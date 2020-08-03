import React from 'react';
import { Checkbox } from '../components/Checkbox'
import { useTasks } from '../hooks';
export const Tasks = () => {
    const { tasks } = useTasks("1");

    console.log(tasks)

    let project_name = '';
    return (
        <div className="taks" data-testid="tasks">
            <h2 data-test="project-name">
                {project_name}
            </h2>
            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id="{task.id}" />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}