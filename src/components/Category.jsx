import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Category() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
 <>
        <div className=''> 
             <button onClick={handleShow} style={{width:'300px'}}  className='btn btn-warning mt-2 ms-1'> {' '}Add new Category</button>
             </div>
             <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Vedio ID" />
       
      

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Enter Vedio Caption" />
      
     

     </Form.Group>
    
     </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
 </>
  )
}

export default Category