import React from 'react';
//import {useParams} from 'react-router-dom';
import StoryList from './stories/StoryList'

function Backlog() {
    // let {id} = useParams();
    // console.log(id)
    return (
        <div className='mt-3'> 
            <StoryList />
        </div>

    )
         
}

export default Backlog
