import React from 'react'
import { connect } from 'react-redux'

import Initiative from './Initiative';

const InitiativesList = ({initiatives}) => (
        <div>
            <ul>
                {initiatives.map((initiative => (
                    <Initiative key={initiative.id} name={initiative.name}/>
                )))}
            </ul>
        </div>
    )

const mapStateToProps = state => {
    return {
        initiatives: state.initiatives
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(InitiativesList);
