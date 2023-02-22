import { useState } from 'react';
import { Row, Col, Button, Modal, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowRightCircle, ArrowLeftCircle } from 'react-bootstrap-icons';
import YearSelector from '../components/YearSelector';
import { SeeInfoButton } from './SeeInfoMonumentButton';
import RecognizedImage from '../images/RecognizedImage';
import TimelineGIF from '../images/TimelineAnimation.gif';
import PartialMonumentGIF from '../images/PartialMonumentAnimation.gif';
import './MonumentRecognized.css';

function MonumentRecognized(props) {
	const navigate = useNavigate();

	const handle = () => {
		if (props.monument.state == "total") {
			props.setMonument({ ...props.monument, state: "partial" });
		} else {
			props.setMonument({ ...props.monument, state: "total" });
		}
	}

	return (
		<>
			<TutorialModal showTutorial={props.showTutorial} setShowTutorial={props.setShowTutorial} setSeeButton={props.setSeeButton}/>
			<RecognizedImage monument={props.monument} />
			<Row onClick={() => { navigate('/'); props.setMonument({ ...props.monument, state: "total" }) }}>
				<h1 className='title text-center'>{props.monument.name}</h1>
				<h4 className='sub-title text-center'>{props.monument.currentYear + ' ' + (props.monument.currentYear < 0 ? 'BC' : 'AD')}</h4>
			</Row>
			<Row>
				{(props.monument.currentYear === 80 && props.seeButton) &&
					<Col md={6}>
						<Button variant='outline' className='trasparent-button-1' onClick={() => handle()}></Button>
					</Col>
				}
				{(props.monument.currentYear === 320 && props.seeButton) &&
					<Col md={6}>
						<Button variant='outline' className='trasparent-button-2' onClick={() => handle()}></Button>
					</Col>
				}
				{(props.monument.currentYear === 1200 && props.seeButton) &&
					<Col md={6}>
						<Button variant='outline' className='trasparent-button-3' onClick={() => handle()}></Button>
					</Col>
				}
			</Row>
			<Row className='year-selector'>
				<YearSelector monument={props.monument} setMonument={props.setMonument} />
			</Row>
			<Row>
				<SeeInfoButton monument={props.monument} />
			</Row>
		</>
	);
}

function TutorialModal(props) {
	const [page, setPage] = useState(1);
	const handleClose = () => {
		props.setShowTutorial(false);
		props.setSeeButton(true);
	}

	return (
		<Modal show={props.showTutorial} onHide={handleClose} centered className='tutorial-modal'>
			<Modal.Header closeButton>
				<Modal.Title>Welcome to Monument Viewer!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					{page === 1 && <>
						<Row>
							Use the timeline to change the year of the reconstruction!
						</Row>
						<Row>
							<img src={TimelineGIF} alt='timeline-animation' className='timeline-animation' />
						</Row>
						<Row>
							Explore all the differents descriptions for all the different years available to discover the whole story of the monument!
						</Row>
						<Row>
							<div className='d-flex justify-content-center'>
								<Button className='tutorial-button' onClick={() => setPage(2)}><span className='tutorial-text'>Next </span><ArrowRightCircle /></Button>
							</div>
						</Row>
						<Row>
							<div className='d-flex justify-content-center'>
								<PaginationDots page={page} />
							</div>
						</Row>
					</>}
					{page === 2 && <>
						<Row>
							Click on a circle to see only a partial view of the monument to compare it with the current one!
						</Row>
						<Row>
							<img src={PartialMonumentGIF} alt='timeline-animation' className='timeline-animation' />
						</Row>
						<Row>
							<div className='d-flex justify-content-center'>
								<Button className='tutorial-button' onClick={() => setPage(1)}><ArrowLeftCircle /><span className='tutorial-text'> Previous</span></Button>
							</div>
						</Row>
						<Row>
							<div className='d-flex justify-content-center'>
								<PaginationDots page={page} />
							</div>
						</Row>
					</>}
				</Container>
			</Modal.Body>
		</Modal>
	);
}

function PaginationDots(props) {
	return (
		<>
			<div className={'pagination-dot' + (props.page === 1 ? ' selected' : '')}></div>
			<div className={'pagination-dot' + (props.page === 2 ? ' selected' : '')}></div>
		</>
	);
}

export default MonumentRecognized;