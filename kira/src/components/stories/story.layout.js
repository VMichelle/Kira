import React from 'react';
import { connect } from "react-redux";
import {useParams} from 'react-router-dom'

export const StoryLayout = ({stories}) => {

    let {id} = useParams();
    let selectedStory = [];

    for (let i = 0; i < stories.length; i++) {
        if(parseInt(id) === stories[i].epicId){
            let story = stories[i]
            selectedStory.push(story)
            
        }
        
    }

    return (
        <div>
           <table className='table table-hover'>
           <thead>
                <tr>
                    <th>Priority</th>
                    <th>Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {selectedStory.map(story => (
                    <tr id={story.id} key={story.id}>
                        <td>{story.priority}</td>
                        <td>{story.name}</td>
                        
                        <td>{story.storyPoints}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      themes: state.themes,
      initiatives: state.initiatives,
      epics: state.epics,
      stories: state.stories
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(StoryLayout);
