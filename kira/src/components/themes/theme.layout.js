import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTheme from './AddTheme'
import ThemeList from './ThemeList'
import Container from 'react-bootstrap/Container';
import AddModal from '../AddModal'

export class ThemeLayout extends Component {

    addTheme(){
        return(
            <AddModal
                label='Add Theme'
                title='Add a theme'
                body= {<AddTheme />}
            />
        )
    }


    render() {
        return (
            <Container className='mt-3'>
                <div className='d-flex justify-content-center'>{this.addTheme()}</div>
                <div className='mt-2 d-flex justify-content-center'>
                    <ThemeList/>
                </div>
                   
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeLayout)
