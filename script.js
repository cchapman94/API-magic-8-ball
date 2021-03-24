//API 
const API_ENDPOINT = 'https://yesno.wtf/api';
 

//Output API's response
const showAnswer = answer => {
	document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
}


//fetchAnswer function and call API 
const fetchAnswer = () => {
	fetch(API_ENDPOINT)
		.then(data => data.json())
		.then(data => showAnswer(data.answer));
};


/* 
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
 */


//Attach fetchAnswer to event listener

const handleKeyEnter = (e) => {
	//console.log('handleKeyEnter', {e});
	if (e.keyCode === 13) {
		fetchAnswer();
	}	 

};

document.querySelector('#button').addEventListener('click', () => {
	//console.log('Clicked');
	fetchAnswer();
});

//Clear output after 3 seconds

//Add loading/error states