import { Navbar, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { List, PencilSquare } from 'react-bootstrap-icons';
import './Sidebar.css';
import imgTutorial from '../images/webinar.png'


/* Open when someone clicks on the span element */
/*
function openNav() {
	document.getElementById("myNav").style.left = "0px";
}
function closeNav() {
	document.getElementById("myNav").style.left = "-75%";
}
*/
function CustomNavbar(props) {
	return (
		<>
			<Navbar >
				<Button onClick={() => { props.setGoRight(true); props.setSeeButton(false) }} style={{ backgroundColor: 'transparent', color: 'black', borderColor: 'transparent' }}>
					<List className='hamburger-menu' height={40} width={40}></List>
				</Button>
			</Navbar>

		</>
	);
}

function Sidebar(props) {
	const navigate = useNavigate();
	return (
		<>
			<div className={props.goRight ? "overlayFinal d-flex justify-content-center" : "overlayInitial d-flex justify-content-center"}>
				<a className="closebtn" onClick={() => { props.setGoRight(false); props.setSeeButton(true) }}>&times;</a>
				<div className="overlay-content">
					<Row>
						<h3 className='title sidebar-title'>Monument Viewer</h3>
					</Row>
					<Button className='Suggest' onClick={() => { navigate('/monument/1/edit'); props.setSeeButton(true) }} >
						<Row className='d-flex align-items-center'>
							<Col className='col-2'>
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
									<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
									<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
								</svg>
							</Col>
							<Col className='col-10'>
								<h3 className='no-padding'>Suggest an edit</h3>
							</Col>
						</Row>

					</Button>
					<Button className='Suggest mt-4' onClick={()=>{props.setShowTutorial(true);props.setGoRight(false)}}>
						<Row className='d-flex align-items-center'>
							<Col className='col-2'>
								<img src={imgTutorial} alt="Tutorial" style={{height:'30px',width:'30px'}}/>
							</Col>
							<Col className='col-10'>
								<h3 className='no-padding'>Tutorial</h3>
							</Col>
						</Row>
					</Button>
				</div>
			</div>
		</>
	);
}

function SuggestAnEditBar(props) {
	const navigate = useNavigate();
	return (
		<>
			<Navbar style={{ zIndex: 1 }}>
				<Button onClick={() => { navigate('/monument/1/edit'); props.setSeeButton(true) }} style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'transparent' }}>
					<PencilSquare height={36} width={36}></PencilSquare>
				</Button>
			</Navbar>

		</>
	);
}

export { CustomNavbar, Sidebar, SuggestAnEditBar };