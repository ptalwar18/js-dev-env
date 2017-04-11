import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format("$0,0.00");
// debugger;   //get original code because of package sourcemaps
console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console


