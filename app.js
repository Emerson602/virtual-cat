const content = document.querySelector('#content');
const containerStatus = document.querySelector('#container-status');
const containerActions = document.querySelector('#container-actions');
const imgCat = document.getElementById('img-cat'); 
let imageUrl = './pics/main.gif'; 

let name = '';
let age = 0;
let months = 0;
const oneDay = 12 * 24 * 60 * 60 * 1000;
let health = 100; 
let happy = 100; 
let alimentation = 100; 
let hydration = 100; 
let vitality = 100;
let cleaning = 100;
let bathroom = 100;
const min = 15;
const max = 27;
let lifetime = Math.floor(Math.random() * (max - min + 1)) + min;

const nameBar = document.querySelector('.nameBar');
const ageBar = document.querySelector('.ageBar');
const healthBar = document.querySelector('.healthBar');
const happyBar = document.querySelector('.happyBar');
const alimentationBar = document.querySelector('.alimentationBar');
const hydrationBar = document.querySelector('.hydrationBar');
const vitalityBar = document.querySelector('.vitalityBar');
const cleaningBar = document.querySelector('.cleaningBar');
const bathroomBar = document.querySelector('.bathroomBar');

const healthText = document.querySelector('.healthText');
const happyText = document.querySelector('.happyText');
const alimentationText = document.querySelector('.alimentationText');
const hydrationText = document.querySelector('.hydrationText');
const vitalityText = document.querySelector('.vitalityText');
const cleaningText = document.querySelector('.cleaningText');
const bathroomText = document.querySelector('.bathroomText');

const btnStatus = document.querySelector('.btn-status');
const btnActions = document.querySelector('.btn-actions');



function containerStatusActive() {

  const containerStatusActive = containerStatus.classList;
  containerStatusActive.toggle("container-status");

};

btnStatus.addEventListener('click', containerStatusActive);


function containerActionsActive() {
 
  const containerActionsActive = containerActions.classList;
  containerActionsActive.toggle("container-actions"); 

};

btnActions.addEventListener('click', containerActionsActive); 


function indexStatus() {    
  
  nameBar.innerHTML = `Nome: ${name}`;
  ageBar.innerHTML = `Idade: ${age}, ${months} m`;  
  healthText.innerHTML = `Saude: ${health}%`;  
  happyText.innerHTML = `Felicidade: ${happy}%`;  
  alimentationText.innerHTML = `Alimentado: ${alimentation}%`;  
  hydrationText.innerHTML = `Hidratação: ${hydration}%`;  
  vitalityText.innerHTML = ` Energia: ${vitality}%`;  
  cleaningText.innerHTML = `Limpeza: ${cleaning}%`;  
  bathroomText.innerHTML = `Aliviado: ${bathroom}%`; 

};

function ageUpdate() { 
 
  months += 1;

  if (months > 12) {    
    months = 1;
    age += 1;
  } else if (age === lifetime) {    
    clearInterval(ageUpdateInterval);
  }

}; 

const ageUpdateInterval = setInterval(ageUpdate, oneDay); 


function healthStatus() { 

  const randomNumber = Math.floor(Math.random() * 2);

  if (happy <= 60 || alimentation <= 60 || hydration <= 60 || vitality <= 60 || cleaning <= 60 || bathroom <= 60) {
    health -= randomNumber;
  } else if (happy <= 30 || alimentation <= 30 || hydration <= 30 || vitality <= 30 || cleaning <= 30 || bathroom <= 30) {
    health -= randomNumber * 2;
  } else if (happy === 0 || alimentation === 0 || hydration === 0 || vitality === 0 || cleaning === 0 || bathroom === 0) {
    health -= randomNumber * 3;
  } else if (happy <= 60 && alimentation <= 60 && hydration <= 60 && vitality <= 60 && cleaning <= 60 && bathroom <= 60) {
    health -= randomNumber * 4;
  } else if (happy <= 30 && alimentation <= 30 && hydration <= 30 && vitality <= 30 && cleaning <= 30 && bathroom <= 30) {
    health -= randomNumber * 5;
  } else if (happy === 0 && alimentation === 0 && hydration === 0 && vitality === 0 && cleaning === 0 && bathroom === 0) {
    health -= randomNumber * 6;
  }  

  healthBar.style.width = health + '%';
};



function happyStatus() {
  
  const randomNumber = Math.floor(Math.random() * 2); 

  if (age <= 2) {
    happy -= randomNumber * 3;
  } else if (age <= 10) {
    happy -= randomNumber * 2;
  } else {
    happy -= randomNumber;  	
  }

  happyBar.style.width = happy + '%';

};


function alimentationStatus() {
  
  const randomNumber = Math.floor(Math.random() * 2);

  if (age <= 2) {
    alimentation -= randomNumber * 3;
  } else if (age <= 10) {
    alimentation -= randomNumber * 2;
  } else {
    alimentation -= randomNumber;  	
  }

  alimentationBar.style.width = alimentation + '%';

};


function hydrationStatus() {
    
  const randomNumber = Math.floor(Math.random() * 2);

  if (age <= 2) {
    hydration -= randomNumber * 3;
  } else if (age <= 10) {
    hydration -= randomNumber * 2;
  } else {
    hydration -= randomNumber;  	
  }

  hydrationBar.style.width = hydration + '%';

};


function vitalityStatus() {
  
  const randomNumber = Math.floor(Math.random() * 2);

  if (age <= 2) {
    vitality -= randomNumber;
  } else if (age <= 10) {
    vitality -= randomNumber * 2;
  } else {
    vitality -= randomNumber * 3;  	
  }

  vitalityBar.style.width = vitality + '%';

};


function cleaningStatus() { 

  const randomNumber = Math.floor(Math.random() * 2);

  if (age <= 2) {
    cleaning -= randomNumber * 3;                
  } else if (age <= 10) {
    cleaning -= randomNumber * 2;    
  } else {
    cleaning -= randomNumber; 
  }

  cleaningBar.style.width = cleaning + '%'; 

};


function bathroomStatus() {
  
  const randomNumber = Math.floor(Math.random() * 2);

  if (age <= 2) {
    bathroom -= randomNumber * 3;
  } else if (age <= 10) {
    bathroom -= randomNumber * 2;
  } else {
    bathroom -= randomNumber;   
  }

  bathroomBar.style.width = bathroom + '%';

};


function limiteStatus() {
  
  if (health <= 0) {
    health  = 0;
    clearInterval(healthUpdateInterval);
  } else if (health > 100) {
    health == 100;
  } else {
    healthUpdateInterval
  } 

  if (happy <= 0) {
    happy  = 0;
    clearInterval(happyUpdateInterval);
  } else if (happy > 100) {
     happy == 100;
  } else {
    happyUpdateInterval
  } 

  if (alimentation <= 0) {
    alimentation  = 0;
    clearInterval(alimentationUpdateInterval);
  } else if (alimentation > 100) {
    alimentation == 100;
  } else {
    alimentationUpdateInterval
  }

  if (hydration <= 0) {
    hydration  = 0;
    clearInterval(hydrationUpdateInterval);
  } else if (hydration > 100) {
    hydration == 100; 
  } else {
    hydrationUpdateInterval
  }

  if (vitality <= 0) {
    vitality = 0;
    clearInterval(vitalityUpdateInterval);
  } else if (vitality > 100) {
    vitality == 100; 
  } else {
    vitalityUpdateInterval
  }

  if (cleaning <= 0) {
    cleaning = 0;    
    clearInterval(cleaningUpdateInterval);
  } else if (cleaning > 100) {
    cleaning == 100;
  }else {
    cleaningUpdateInterval
  }

  if (bathroom <= 0) {
    bathroom = 0;
    clearInterval(bathroomUpdateInterval);
  } else if (bathroom > 100) {
    bathroom == 100;
  }else {
    bathroomUpdateInterval
  }

};


function yourCatDied() {

  if (age === lifetime || health === 0){

    health = 0;
    happy = 0; 
    alimentation = 0; 
    hydration = 0;
    vitality = 0;         
  }

}; 


function updadeImages() { 
  
  imgCat.src = imageUrl;

  if (health <= 70 || happy <= 70 || alimentation <= 70 || hydration <= 70 || vitality <= 70 || cleaning <= 70 || bathroom <= 70) {
    imageUrl = './pics/bravo.gif';
  } else if (health <= 60 || happy <= 60 || alimentation <= 60 || hydration <= 60 || vitality <= 60 || cleaning <= 60 || bathroom <= 60) {
    imageUrl = './pics/aborrecido.gif';
  } else if (health <= 30 || happy <= 30 || alimentation <= 30 || hydration <= 30 || vitality <= 30 || cleaning <= 30 || bathroom <= 30) {
    imageUrl = './pics/esperneando.gif';
  } else if (health <= 15 || happy <= 15 || alimentation <= 15 || hydration <= 15 || vitality <= 15 || cleaning <= 15 || bathroom <= 15) {
    imageUrl = './pics/chorando.gif';
  } else if (health <= 5 || happy <= 5 || alimentation <= 5 || hydration <= 5 || vitality <= 5 || cleaning <= 5 || bathroom <= 5) {
    imageUrl = './pics/chorando.gif';
  }

}; 


function updadeColorBars() {

  if (health >= 60) {
    healthBar.style.backgroundColor = '#006400';
  } else if (health >= 30) {
    healthBar.style.backgroundColor = '#FFD700';
  } else if (health >= 0) {
    healthBar.style.backgroundColor = '#FF0000';
  }

  if (happy >= 60) {
    happyBar.style.backgroundColor = '#006400';
  } else if (happy >= 30) {
    happyBar.style.backgroundColor = '#FFD700';
  } else if (happy >= 0) {
    happyBar.style.backgroundColor = '#FF0000';
  }

}; 


const indexStatusUpdateInterval = setInterval(indexStatus, 5000);
const healthUpdateInterval = setInterval(healthStatus, 5000);
const happyUpdateInterval = setInterval(happyStatus, 5000);
const alimentationUpdateInterval = setInterval(alimentationStatus, 5000);
const hydrationUpdateInterval = setInterval(hydrationStatus, 5000);
const vitalityUpdateInterval = setInterval(vitalityStatus, 5000);
const cleaningUpdateInterval = setInterval(cleaningStatus, 5000);
const bathroomUpdateInterval = setInterval(bathroomStatus, 5000);
const limiteStatusUpdateInterval = setInterval(limiteStatus, 5000);
const yourCatDiedUpdateInterval = setInterval(yourCatDied, 5000); 
const updadeImagesInterval = setInterval(updadeImages, 5000);
const updadeColorBarsInterval = setInterval(updadeColorBars, 5000);






