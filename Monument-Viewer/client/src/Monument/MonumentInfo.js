import { Row } from "react-bootstrap";
import { SeeMonumentButton } from "./SeeInfoMonumentButton";
import RecognizedImage from "../images/RecognizedImage";
import './MonumentInfo.css';

function MonumentInfo(props) {

	function goBack() {
		setTimeout(() => {
			document.getElementById("myInfo").style.bottom = "0px";
		}, "00")
	}

	return (
		<>
			<RecognizedImage monument={props.monument} />
			<Row>
				<h1 className='titleMonument title-forward text-center'>{props.monument.name}</h1>
				<h4 className='sub-title title-forward text-center'>{props.monument.currentYear + ' ' + (props.monument.currentYear < 0 ? 'BC' : 'AD')}</h4>
			</Row>
			<Row id="myInfo" className="overlayText d-flex justify-content-center">
				<MonumentInfoBox className="overlay-contentText" monument={props.monument} />
			</Row>
			{goBack()}
			
			<Row>
				<SeeMonumentButton monument={props.monument} />
			</Row>
		</>
	);
}

function MonumentInfoBox(props) {
	return (
		<div className='d-flex justify-content-center'>
			<div className="info-text">
				{
					props.monument.descriptions[props.monument.currentYear].map(element => {
						return (
							<p key={element}>{element}</p>
						);
					}
					)
				}
			</div>

		</div>
	);
}

export default MonumentInfo;