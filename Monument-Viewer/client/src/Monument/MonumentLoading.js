import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './MonumentLoading.css';
import './MonumentRecognized.css';
import { useEffect } from 'react';

function MonumentLoading(props) {
	const navigate = useNavigate();

	let myTimeout = -1;
	useEffect(() => {
		if (myTimeout === -1)
			myTimeout = setTimeout(monumentNotPresent, 10000);
	}, [])

	function monumentNotPresent() {
		props.setShowModal(true);
		navigate('/');
	}

	return (
		<>
			<Row>
				<h1 className='title text-center' onClick={() => { clearTimeout(myTimeout); navigate('/monument/1') }}>Monument Viewer</h1>
				<h4 className='sub-title text-center' onClick={() => { clearTimeout(myTimeout); navigate('/monument/1') }}>History in your pocket</h4>
			</Row>
			<div className='spinner-container' onClick={() => { clearTimeout(myTimeout); navigate('/monument/1') }}>
				<div className='d-flex justify-content-center'>
					<Spinner animation="grow" />
				</div>
				<h3 className='sub-title text-center loading-text'>Recognizing monument...</h3>
			</div>
		</>
	);
}

export default MonumentLoading;