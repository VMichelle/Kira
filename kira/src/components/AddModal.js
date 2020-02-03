import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


function AddModal(props) {
    const [show, setShow] = useState(false);

    return (
        <>
          <Button variant="primary" onClick={() => setShow(true)}>
            {props.label}
          </Button>
    
          <Modal
            show={show} 
            onHide={() => setShow(false)}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {props.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.body}
            </Modal.Body>
          </Modal>
        </>
      );
}


export default AddModal

