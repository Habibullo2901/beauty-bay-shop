import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import britianflag from '../Navbar/greatbritian.jpg'
import canadianflag from '../Navbar/canada.png'
import './Modal.css'

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <div className='modal' variant="primary" onClick={handleShow}>
                <img src={canadianflag} width={30} alt="" />
                <p>CA</p>
                <p>CAD</p>
            </div>

            <Modal className='modal-window' show={show} onHide={handleClose}>
                <img className='modal-img' src={canadianflag} width={150} alt="" />
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>CHOOSE YOUR SHIPPING COUNTRY/REGION</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>Prices are shown and charged in CAD.</Modal.Body>
                <select className='modal-select'>
                    <option>Canada</option>
                    <option>Canada</option>
                    <option>Canada</option>
                </select>
                <Modal.Footer>
                    <Button className='modal-button' variant="primary" onClick={handleClose}>
                        Continue shopping
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;