import React from 'react';

function Story(props) {
    return (
        <tr onClick={props.onClick}>
            <td className='text-center'>{props.status}</td>
            <td className='text-center'>{props.priority}</td>
            <td className='text-center'>{props.storyPoints}</td>
            <td className='text-center'>{props.assignee}</td>
            <td>{props.title}</td>
        </tr>
    );
};

export default Story

