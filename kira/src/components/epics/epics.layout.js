import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EpicsLayout extends Component {
    render() {
        return (
            <div>
                <p>An epic is a group of stories that can be broken down.</p>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EpicsLayout)
