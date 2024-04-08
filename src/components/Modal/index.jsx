import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import usaflag from '../Navbar/usa.svg'
import uzbflag from '../Navbar/uzb.png'
import rusflag from '../Navbar/rus.webp'
import './Modal.css'
import { useDispatch } from 'react-redux';
import { createRegion } from '../../redux/actionsSlice';
import { useSelector } from 'react-redux'

function Example() {
    const region = useSelector(state => state.actions.region)
    // console.log(region)

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [ country , setCountry ] = useState(localStorage.getItem('country') || 'usa')
    localStorage.setItem('country', country)

    const handleClose = () => (
        setShow(false),
        localStorage.setItem('country', country),
         dispatch(createRegion(country))
    );
    const handleShow = () => setShow(true);


    // console.log(country)
    return (
        <>
            <div className='modal' variant="primary" onClick={handleShow}>
                <img src={country === 'usa' ? usaflag : country === 'uzbekistan' ? uzbflag : rusflag} width={30} alt="" />
                <p>{country === 'usa' ? 'USA' : country === 'uzbekistan' ? 'Uzbekistan' : 'Russia'}</p>
                <p>{country === 'usa' ? 'USD' : country === 'uzbekistan' ? 'UZS' : 'RUB'}</p>
            </div>

            <Modal className='modal-window' show={show} onHide={handleClose}>
                <img className='modal-img' src={country === 'usa' ? usaflag : country === 'uzbekistan' ? uzbflag : rusflag} width={150} alt="" />
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>CHOOSE YOUR SHIPPING COUNTRY/REGION</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>Prices are shown and charged in {country === 'usa' ? 'USD' : country === 'uzbekistan' ? 'UZS' : 'RUB'}.</Modal.Body>
                <select onChange={ e => setCountry(e.target.value)} className='modal-select'>
                    <option selected disabled value={'choose'}>Choose</option>
                    <option value={'usa'} >USA</option>
                    <option value={'uzbekistan'}>Uzbekistan</option>
                    <option value={'russia'}>Russia</option>
                </select>
                <Modal.Footer>
                    <Button className='modal-button'  variant="primary" onClick={handleClose}>
                        Continue shopping
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;