//Selectors
const ballSelector = document.querySelector('#ball');

//API 
const API_ENDPOINT = 'https://yesno.wtf/api';
 

//Output API's response
const showAnswer = answer => {
	setTimeout(() => {
		document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
		ballSelector.classList.remove('shake-ball');

	}, 1000);
	
};

//fetchAnswer function and call API 
const fetchAnswer = () => {
	ballSelector.classList.add('shake-ball');

	fetch(API_ENDPOINT)
		.then(data => data.json())
		.then(data => showAnswer(data.answer));
};


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