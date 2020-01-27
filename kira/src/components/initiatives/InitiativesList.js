import React, {useState} from 'react'
import { connect } from 'react-redux'
import Initiative from './Initiative';
import {Modal, Button} from 'react-bootstrap'

// const selectInitiative = (themeId) => {
//     console.log(themeId)
//     return(
        
//     )
// }

function Example() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>
  
        <Modal
          show={show} 
          onHide={() => setShow(false)}
          dialogClassName="modal-100w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }

const InitiativesList = ({initiatives}) => {
  const [show, setShow] = useState(false);


  return(
      <div>
          <ul className='d-flex flex-wrap'>
              {initiatives.map((initiative => (
                  <Initiative 
                      key={initiative.id}
                      name={initiative.name}
                      themeId={initiative.themeId}
                      //onClick={}
                  />
              )))}
          </ul>
          <Example />
      </div>
  )
}

const mapStateToProps = state => {
    return {
        initiatives: state.initiatives,
        themes: state.themes
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(InitiativesList);
