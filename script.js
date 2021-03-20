//API 
const API_ENDPOINT = 'https://yesno.wtf/api';

//fetchAnswer function and call API 
const fetchAnswer = () => {
	fetch(API_ENDPOINT)
		.then(response => response.json())
		.then(data => console.log(data));
};

fetchAnswer();


/* 
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
 */


 //Output API's response

//Attach fetchAnswer to event listener

//Clear output after 3 seconds

//Add loading/error states