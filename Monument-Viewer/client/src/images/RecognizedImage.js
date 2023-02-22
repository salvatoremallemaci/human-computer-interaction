import Colosseum80 from './Colosseum_80.png';
import Colosseum80partial from './Colosseum_80_partial.png';
import Colosseum320 from './Colosseum_320.png';
import Colosseum320partial from './Colosseum_320_partial.png';
import Colosseum1200 from './Colosseum_1200.png';
import Colosseum1200partial from './Colosseum_1200_partial.png';
import './RecognizedImage.css';

function RecognizedImage(props) {
	if (props.monument.currentYear === 80 && props.monument.state === "total")
		return (
			<img src={Colosseum80} alt='colosseum-80-ad' className='recognized-image' />
		);
	else if (props.monument.currentYear === 80 && props.monument.state === "partial")
		return (
			<img src={Colosseum80partial} alt='colosseum-80-ad' className='recognized-image' />
		);	
	else if (props.monument.currentYear === 320 && props.monument.state === "total")
		return (
			<img src={Colosseum320} alt='colosseum-320-ad' className='recognized-image' />
		);
	else if (props.monument.currentYear === 320 && props.monument.state === "partial")
		return (
			<img src={Colosseum320partial} alt='colosseum-80-ad' className='recognized-image' />
		);
	else if (props.monument.currentYear === 1200 && props.monument.state === "total")
		return (
			<img src={Colosseum1200} alt='colosseum-1200-ad' className='recognized-image' />
		);
	else if (props.monument.currentYear === 1200 && props.monument.state === "partial")
		return (
			<img src={Colosseum1200partial} alt='colosseum-80-ad' className='recognized-image' />
		);
	else return (<></>);
}

export default RecognizedImage;