import { useState } from 'react';
import './YearSelector.css';

function YearSelector(props) {
	const [selectedYear, setSelectedYear] = useState(props.monument.currentYear);

	function handleYearSelect(event) {
		const newYear = findClosest(props.monument.years, event.target.value);

		setSelectedYear(newYear);
		props.setMonument({ ...props.monument, currentYear: newYear });
	}

	return (
		<>
			<input type='range' className='year-selector slider-progress' style={{ '--min': props.monument.years[0], '--max': props.monument.years[props.monument.years.length - 1], '--value': selectedYear }}
				value={selectedYear} list='year-options' min={props.monument.years[0]} max={props.monument.years[props.monument.years.length - 1]} step={1} onChange={event => setSelectedYear(event.target.value)} onMouseUp={handleYearSelect} onTouchEnd={handleYearSelect} />
			<datalist id='year-options'>
				{props.monument.years.map(y => <option key={y} value={y}></option>)}
			</datalist>
			<div className='tick-track'>
				{props.monument.years.map(y => <span className='tick' style={{ '--spazio-da-sx': ((y - 80) / 1943 * 100) + '%' }}>|</span>)}
			</div>
			<div className='years-tick-track'>
				{props.monument.years.map(y => <span className='tick-year' style={{ '--spazio-da-sx': ((y - 80) / 1943 * 100) + '%', '--offset': y < 100 ? '4px' : y < 1000 ? '-1px' : y < 2000 ? '-11px' : '-18px' }}>{y}</span>)}
			</div>
		</>
	);
}

// all following code from https://www.geeksforgeeks.org/javascript-program-to-find-closest-number-in-array/
function findClosest(arr, target) {
	let n = arr.length;

	// Corner cases
	if (target <= arr[0])
		return arr[0];
	if (target >= arr[n - 1])
		return arr[n - 1];

	// Doing binary search
	let i = 0, j = n, mid = 0;
	while (i < j) {
		mid = (i + j) / 2;

		if (arr[mid] === target)
			return arr[mid];

		// If target is less than array
		// element,then search in left
		if (target < arr[mid]) {

			// If target is greater than previous
			// to mid, return closest of two
			if (mid > 0 && target > arr[mid - 1])
				return getClosest(arr[mid - 1], arr[mid], target);

			// Repeat for left half
			j = mid;
		}

		// If target is greater than mid
		else {
			if (mid < n - 1 && target < arr[mid + 1])
				return getClosest(arr[mid], arr[mid + 1], target);
			i = mid + 1; // update i
		}
	}

	// Only single element left after search
	return arr[mid];
}

// Method to compare which one is the closer
// We find the closest by taking the difference
// between the target and both values. It assumes
// that val2 is greater than val1 and target lies
// between these two.
function getClosest(val1, val2, target) {
	if (target - val1 >= val2 - target)
		return val2;
	else
		return val1;
}

export default YearSelector;