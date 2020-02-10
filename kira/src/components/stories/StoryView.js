import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const StoryView = () => {

    const stories = useSelector(state => state.stories)
    console.log(stories)

    useEffect(() => {
        
    })

    let {id} = useParams();
    
    return (
        <div>
            Hello there {id}
        </div>
    )
}

export default StoryView
