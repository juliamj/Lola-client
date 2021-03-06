import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { AppContext } from './Context/AppContext';

function Message() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { state, setState } = useContext(AppContext);
  
    useEffect(() => {
      if (!state.user) return;
  
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      fetch(`${process.env.REACT_APP_API}/profiles/${state.user._id}`, requestOptions)
        .then(res => res.json())
        .then(profile =>
          setState(previousState => ({ ...previousState, profile }))
        );
    }, []);

  return (
    <>
      {/* <Button variant="transparent link" onClick={handleShow}>
                Send {`${state.user ? state.user.name : null}`} a Message <i class="far fa-comments"></i> 
            </Button> */}
      <Button  variant='transparent link' onClick={handleShow}>
        Send a message <i class='far fa-comments'></i>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>
            Send {`${state.user ? state.user.name : null}`} a Message
          </Modal.Title> */}
          <Modal.Title>Send a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl as='textarea' aria-label='With textarea' />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>Send</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Message;
