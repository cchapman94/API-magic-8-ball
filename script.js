//Selectors
const ballSelector = document.querySelector('#ball');
const buttonSelector = document.querySelector('#button');
const inputSelector = document.querySelector('#input');
const answerSelector = document.querySelector('#answer');

//API 
const API_ENDPOINT = 'https://yesno.wtf/api';
 
 //Flags
 let isRequestInProgress = false;

//Output API's response
const showAnswer = answer => {
	setTimeout(() => {
		answerSelector.innerHTML = `<p>${answer}</p>`;
		ballSelector.classList.remove('shake-ball');
		cleanupResponse();

	}, 1000);
	
};

//fetchAnswer function and call API 
const fetchAnswer = () => {
	setIsRequestInProgress(true); //isRequestInProgress = true;

	setDisableButtonState(true);
	ballSelector.classList.add('shake-ball');

	fetch(API_ENDPOINT)
		.then(data => data.json())
		.then(data => showAnswer(data.answer));
};

//Clear output after 3 seconds
const cleanupResponse = () => {
	setTimeout(() => {
		answerSelector.innerHTML = '';
		inputSelector.value = '';
		setIsRequestInProgress(false); //isRequestInProgress = false;
		setDisableButtonState(false);
	}, 3000);
	

};

//Manage API requests
const setDisableButtonState = (isDisabling) => {
	if (isDisabling) {
		buttonSelector.setAttribute('disabled', 'disabled');
	} else {
		buttonSelector.removeAttribute('disabled');

	}
	
};

const setIsRequestInProgress = (value) => {
	isRequestInProgress = value;
};

const getAnswer = () => {
	if (isRequestInProgress) {
		return;
	}

	if (!inputSelector.value) {
		return
	}

	fetchAnswer();
};

//Attach fetchAnswer to event listener
const handleKeyEnter = (e) => {
	if (e.keyCode === 13) {
		getAnswer();
	}	 

};

buttonSelector.addEventListener('click', getAnswer); 


//Add loading/error states