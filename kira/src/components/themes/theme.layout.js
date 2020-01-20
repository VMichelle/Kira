import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTheme from './AddTheme'
import ThemeList from './ThemeList'
import Container from 'react-bootstrap/Container'

export class ThemeLayout extends Component {
    render() {
        return (
            <Container className='mt-3'>
                <AddTheme/>
                <div className='mt-2'></div>
                <ThemeList/> 
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeLayout)
