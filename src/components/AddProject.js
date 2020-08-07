import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatePushId();
    const { projects, setProjects } = useProjectsValue();

    const addProject = () =>
        projectName &&
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'HsRPUOk1LNMuptjxPm6T'
            })
            .then(() => {
                setProjects([...projects]);
                setProjectName('');
                setShow(false);
            });

    return (
        <div className='add-project' data-testid="add-project">
            {show && (
                <div className="add-project__input">
                    <input
                        value={projectName}
                        onChange={e => setProjectName(e.target.value)}
                        className="add-project__name"
                        aria-label="Add project name"
                        data-testid="project-name"
                        type="text"
                        placeholder="Name your project" />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        aria-label="Submit Project"
                        data-testid="add-project-submit"
                    >
                        Add Project
                    </button>
                    <span
                        aria-label="Cancel adding project"
                        data-testid="hide-project-overlay"
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                        onKeyDown={() => setShow(false)}
                        role="button"
                        tabIndex={0}
                    >
                        Cancel
                        </span>
                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                aria-label="Add Project"
                data-testid="add-project-action"
                className="add-project__text"
                onClick={() => setShow(!show)}
                onKeyDown={() => setShow(!show)}
                role="button"
                tabIndex={0}
            > Add Project
            </span>
        </div>
    )
}