import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            });
    };

    return (
        <div
            aria-label="Checking Task"
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTask()}
            onKeyDown={() => archiveTask()}
            role="button"
            tabIndex={0}
        >
            <span className="checkbox"></span>
        </div>
    )
}