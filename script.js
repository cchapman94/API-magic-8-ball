//API 
const API_ENDPOINT = 'https://yesno.wtf/api';
 

 //Output API's response
 /*
 const showAnswer = answer => {
 	document.querySelector('#answer').innerHTML = '<p>${answer}</p>';
 };
 */


//fetchAnswer function and call API 
const fetchAnswer = () => {
	fetch(API_ENDPOINT)
		.then(data => data.json())
		.then(data => console.log(data.answer));
};

fetchAnswer();



/* 
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
 */




//Attach fetchAnswer to event listener

//Clear output after 3 seconds

//Add loading/error states