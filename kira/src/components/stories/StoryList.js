import React, { Component } from 'react';
import { connect } from 'react-redux';
import Story from './Story'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

export const DisplayStories = () => {
    const stories = useSelector(state => state.stories)
    let history = useHistory()

    function handleClick(id){
        history.push(`/story/${id}`)
    }

    return( 
        <React.Fragment>  
            {stories.map(story => 
                <Story
                key={story.id}
                status={story.status}
                priority={story.priority}
                storyPoints={story.storyPoints}
                assignee={story.assigneeId}
                title={story.title}
                onClick={() => handleClick(story.id)}
                /> 
            )}
        </React.Fragment>
    );
};

export const StoryList = () => {

    return (
        <div>
            <table className='table table-hover table-sm border'>
                <thead>
                    <tr>
                        <th className='pl-3 text-center'>Status</th>
                        <th className='text-center'>Priority</th>
                        <th className='text-center'>Points</th>
                        <th className='text-center'>Assignee</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayStories()}
                </tbody>
            </table>
        </div>
    );  
};

export default StoryList
