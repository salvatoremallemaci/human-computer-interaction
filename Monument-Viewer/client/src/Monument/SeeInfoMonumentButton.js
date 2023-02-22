import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';
import { useSwipeable } from 'react-swipeable';
import { useState,useEffect } from 'react';
import './SeeInfoMonumentButton.css';





function SeeInfoButton(props) {
	{/*const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
	const [localCoords, setLocalCoords] = useState({x: 0, y: 0});
  
	const handleMouseMove = event => {
	  // 👇️ Get the mouse position relative to the element
	  setLocalCoords({
		x: event.clientX - event.target.offsetLeft,
		y: event.clientY - event.target.offsetTop,
	  });
	};
  
	useEffect(() => {
	  const handleGlobalMouseMove = event => {
		setGlobalCoords({
		  x: event.clientX,
		  y: event.clientY,
		});
	  };
	  window.addEventListener('mousemove', handleGlobalMouseMove);
	}, []);
*/}
	  
	const navigate = useNavigate();
	const handlers = useSwipeable({
		onSwipedUp: ()=>
		{
			
			navigate('/monument/1/info')
		},
		 swipeDuration: 500,
		 preventScrollOnSwipe: true,
		 trackMouse: true
	   });
	 
	return (
	
		<div {...handlers}>
		<Row className='see-info-btn-row no-margin d-flex justify-content-center'>
			<ArrowUpCircle className='see-info-btn' onClick={()=>navigate('/monument/1/info')} />
			<p className='see-info-text text-center'>See info ({props.monument.currentYear} AD)</p>
		</Row >
		</div>
	);
}

function SeeMonumentButton(props) {
	const navigate = useNavigate();
	const handlers = useSwipeable({
		onSwipedDown: ()=>
		{
			document.getElementById("myInfo").style.bottom = "-100%"; 
			
			setTimeout(() => {
				navigate('/monument/1');
			}, "700")
		},
		 swipeDuration: 500,
		 preventScrollOnSwipe: true,
		 trackMouse: true
	   });

	return (
		<div {...handlers}>
		<Row className='see-info-btn-row no-margin d-flex justify-content-center'>
			<ArrowDownCircle className='see-info-btn' id='seeInfo' onClick={() => {
				document.getElementById("myInfo").style.bottom = "-100%"; {
					setTimeout(() => {
						navigate('/monument/1');
					}, "700")
				}
			}} />
			<p className='see-info-text text-center'>See monument ({props.monument.currentYear} AD)</p>
		</Row >
		</div>
	);
}

export { SeeInfoButton, SeeMonumentButton };