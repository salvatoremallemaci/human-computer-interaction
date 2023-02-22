import { useState } from 'react';
import { Form, Container, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './SuggestAnEdit.css';

function SuggestAnEdit(props) {
    const navigate = useNavigate();
    // const [name, setName] = useState('');
    const [monument, setMonument] = useState(props.monument.name);
    const [monumentYear, setMonumentYear] = useState('');
    const [monumentYearNumber, setMonumentYearNumber] = useState(80);
    const [topic, setTopic] = useState('');
    const [issue, setIssue] = useState('');
    const [description, setDescription] = useState('');
    // eslint-disable-next-line
    const [photo, setPhoto] = useState('');
    const [show, setShow] = useState(false);
    const [done, setDone] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [monumentDescriptions, setMonumentDescriptions] = useState(props.monument.descriptions);
    const popover = (

        <Popover id="popover-basic">
            <Popover.Header as="h3">Information</Popover.Header>
            <Popover.Body>
                If you want to suggest an edit for a different monument, please <strong>scan</strong> that monument with the app!
            </Popover.Body>
        </Popover>
    );

    const handleShow = async (event) => {
        event.preventDefault();
        setShow(true);
    }

    const handleSubmit = () => {
        setDone(true);
        // setName('');
        setMonument(props.monument.name);
        setMonumentYear('');
        setTopic('');
        setIssue('');
        setDescription('');
        setPhoto('');
        // navigate('/monument/1/')
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className='titleSuggest'>Suggest an edit</h1>
                </Col>
            </Row >
            <Form onSubmit={handleShow}>
                <Row>
                    <Col md={6}>
                        <FloatingLabel controlId="floatingInput" label="Monument" className="mb-3" >
                            <Form.Control required={true} value={monument} onChange={ev => setMonument(ev.target.value)} disabled readOnly />
                        </FloatingLabel>
                        <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
                            <Button className='custom-info-botton'>i</Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FloatingLabel controlId="floatingInput" label="Choose the relative year*" className="mb-3">
                            <Form.Select required={true} value={monumentYear} onChange={ev => {setMonumentYear(ev.target.value); setMonumentYearNumber(ev.target.value.split(" ")[0])}}>
                                <option disabled></option>
                                {props.monument.years.map((y) => <option key={y}>{`${y} AD`}</option>)}
                                <option>All</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FloatingLabel controlId="floatingInput" label="Choose the topic*" className="mb-2">
                            <Form.Select required={true} value={topic} onChange={ev => setTopic(ev.target.value)}>
                                <option disabled></option>
                                <option>Title</option>
                                <option>Model view</option>
                                <option>Monument info</option>
                                <option>Timeline</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                {topic == "Monument info" && monumentYear != "All" && monumentYear != "" &&
                <Row className='mb-3'>
                    <Link className='link' onClick={() => setShowInfo(true)}>See the current info of the monument</Link>
                </Row>}
                {monumentYear !== "" && monumentYear !== "All" ? 
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={showInfo} onHide={ () => setShowInfo(false)} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title className='titleInfoSuggestAnEdit'>{`${props.monument.name} ${monumentYear}`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='textInfoSuggestAnEdit'>{
                                    monumentDescriptions[monumentYearNumber].map(element => {
                                        return (
                                            <p key={element}>{element}</p>
                                        );
                                    }
                                    )
                                }</Modal.Body>
                </Modal> : false}
                <Row>
                    <Col md={6}>
                        <FloatingLabel controlId="floatingInput" label="Issue:*" className="mb-3">
                            <Form.Control required={true} value={issue} onChange={ev => setIssue(ev.target.value)} type="text" placeholder="Some Issue" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FloatingLabel controlId="floatingInput" label="Description:*" className="mb-3">
                            <Form.Control required={true} value={description} onChange={ev => setDescription(ev.target.value)} as="textarea" style={{ height: '130px' }} placeholder="description" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Form.Group controlId="formFile">
                        <Form.Label className='updateImage'>{topic !== 'Model view' ? 'Upload a screen' : 'Upload a photo'}</Form.Label>
                        <Form.Control type="file" accept='.jpg'
                            onChange={(e) => setPhoto(e.currentTarget.files[0])} />
                    </Form.Group>
                </Row>
                <Row className='mt-3'>
                    <div className='d-flex justify-content-evenly'>
                        <Button variant="danger" className='cancelButton' onClick={() => { props.setGoRight(false); navigate('/monument/1/') }} >Cancel</Button>
                        <Button variant="success" type='submit' className="sendButton">Send</Button>
                    </div>
                </Row>
            </Form>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} animation={false}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" className='modalTitleSend'>{"Are you sure?"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalDone'>Your suggestion will be sent</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='buttonModalNotSure' onClick={() => setShow(false)}>
                        Not sure
                    </Button>
                    <Button variant="success" className='buttonModalSure' onClick={() => { props.setGoRight(false); handleSubmit() }}>
                        Sure
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={done} animation={false}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" className='modalTitleDone'>{"Suggested edit successfully sent!"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalDone'>{"Thank you!"}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='buttonDone' onClick={() => navigate('/monument/1/')}>
                        Back to the monument
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default SuggestAnEdit;