import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MonumentRecognized.css';
import '../components/alert.css';
import './HomeScreen.css';

function HomeScreen(props) {
	const navigate = useNavigate();

	return (
		<>
			<Row>
				<h1 className='title text-center' onClick={() => navigate('/loading')}>Monument Viewer</h1>
				<h4 className='sub-title text-center' onClick={() => navigate('/loading')}>History in your pocket</h4>
			</Row>

			{props.showModal &&
				<div className='d-flex justify-content-center'>
					<div className="alert alert-dark">
						<div className="icon__wrapper">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-exclamation-octagon alert_icon" viewBox="0 0 16 16">
								<path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
								<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
							</svg>
						</div>
						<p>Sorry, monument not recognized. Try again.</p>
						<a onClick={() => props.setShowModal(false)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x close" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</a>
					</div>
				</div>
			}

			<div className='d-flex justify-content-center' onClick={() => navigate('/loading')}>
				<p className="prompt text-center">
					Point the camera to the monument to see how it was originally!
				</p>
			</div>
		</>
	);
}

export default HomeScreen;