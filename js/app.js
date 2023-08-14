const content = document.querySelector('#content');
const containerStatus = document.querySelector('#container-status');
const containerActions = document.querySelector('#container-actions');
const notificationDiv = document.createElement("div");
const imgCat = document.getElementById('img-cat'); 

let imageUrl = './animations/main.gif'; 

let name = 'Coquinho';
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

const myAudio = document.querySelector("#audio");
const myAudioClick = document.querySelector("#audio-click");

const buttons = document.querySelectorAll('button');
const btnActivateAudio = document.querySelector("#btn-activate-audio");
const btnTurnUpVol = document.querySelector("#btn-up-vol");
const btnTurnDownVol = document.querySelector("#btn-down-vol");
const iconBtnTurnDownVol = document.querySelector("#icon-btn-activate-audio");



let imageInterval = 30000; 

function containerStatusActive() {

  const containerStatusActive = containerStatus.classList;
  containerStatusActive.toggle("container-status");
  containerActions.setAttribute('class', 'container-actions-hidden'); 

};     

function containerActionsActive() {
 
  const containerActionsActive = containerActions.classList;
  containerActionsActive.toggle("container-actions");
  containerStatus.setAttribute('class', 'container-status-hidden'); 

};

btnStatus.addEventListener('click', containerStatusActive);
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

  if (months > 11) {    
    months = 0;
    age += 1;
  } else if (age === lifetime) {    
    clearInterval(ageUpdateInterval);
  };

}; 


function growth() {

  let currentWidth = parseFloat(imgCat.style.width) || 100;

  let incrementedValue = 0;

  if (window.matchMedia("(max-width: 600px)").matches && months <= 6) {

      currentWidth = parseFloat(imgCat.style.width) || 30;
      incrementedValue = 0.12;
      imgCat.style.width = (currentWidth + incrementedValue) + 'vw';

  } else if (months <= 6) {

    currentWidth = parseFloat(imgCat.style.width) || 100;
    incrementedValue = 1;
    imgCat.style.width = (currentWidth + incrementedValue) + 'px'; 
    
  } else {

    clearInterval(growthInterval);

  }; 

};

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
  };  

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
    cleaning = 0; 
    bathroom = 0;        
  }

}; 

function updadeImages() { 
  
  imgCat.src = imageUrl;
  
  if (health == 0 || happy == 0 || alimentation == 0 || hydration == 0 || vitality == 0 || cleaning == 0 || bathroom == 0) {
    imageUrl = './animations/sick.gif';
  } else if (health <= 5 || happy <= 5 || alimentation <= 5 || hydration <= 5 || vitality <= 5 || cleaning <= 5 || bathroom <= 5) {
    imageUrl = './animations/crying.gif';
  } else if (health <= 15 || happy <= 15 || alimentation <= 15 || hydration <= 15 || vitality <= 15 || cleaning <= 15 || bathroom <= 15) {
    imageUrl = './animations/kicking.gif';
  } else if (health <= 30 || happy <= 30 || alimentation <= 30 || hydration <= 30 || vitality <= 30 || cleaning <= 30 || bathroom <= 30) {
    imageUrl = './animations/thoughtful.gif';
  } else if (health <= 70 || happy <= 70 || alimentation <= 70 || hydration <= 70 || vitality <= 70 || cleaning <= 70 || bathroom <= 70) {
    imageUrl = './animations/angry.gif';
  } else {
    imageUrl = './animations/quiet.gif';
  }

}; 

function updateBar(barElement, value) {

  if (value >= 90) {
    barElement.style.backgroundColor = '#006400';
  } else if (value >= 80) {
    barElement.style.backgroundColor = '#008000';
  } else if (value >= 70) {
    barElement.style.backgroundColor = '#228B22';
  } else if (value >= 60) {
    barElement.style.backgroundColor = '#FFD700';
  } else if (value >= 50) {
    barElement.style.backgroundColor = '#FFA500';
  } else if (value >= 40) {
    barElement.style.backgroundColor = '#FF8C00';
  } else if (value >= 30) {
    barElement.style.backgroundColor = '#FF4500';
  } else if (value >= 20) {
    barElement.style.backgroundColor = '#FF0000';
  } else if (value >= 10) {
    barElement.style.backgroundColor = '#8B0000';
  } else if (value >= 5) {
    barElement.style.backgroundColor = '#141414';
  } else if (value >= 0) {
    barElement.style.backgroundColor = '#000000';
  };

};

function updateAllBars() {

  updateBar(healthBar, health);
  updateBar(happyBar, happy);
  updateBar(alimentationBar, alimentation);
  updateBar(hydrationBar, hydration);
  updateBar(vitalityBar, vitality);
  updateBar(cleaningBar, cleaning);
  updateBar(bathroomBar, bathroom);

};

const run = document.createElement("button");
const play = document.createElement("button");
const sleep = document.createElement("button"); 
const toilet = document.createElement("button");
const kindness = document.createElement("button");
const littleSnack = document.createElement("button"); 
const eat = document.createElement("button");
const drink = document.createElement("button");
const relax = document.createElement("button");
const bath = document.createElement("button");
const brushTeeth = document.createElement("button");
const futebol = document.createElement("button");

function createActionsButtons() {
   
   run.innerText = "Correr";  
   run.setAttribute("id", "btn-run");
  
   play.innerText = "Brincar";
   play.setAttribute("id", "btn-play");
   
   sleep.innerText = "Dormir";
   sleep.setAttribute("id", "btn-sleep");
    
   toilet.innerText = "Banheiro";
   toilet.setAttribute("id", "btn-toilet");
 
   kindness.innerText = "Carinho";
   kindness.setAttribute("id", "btn-kindness");

   littleSnack.innerText = "Lanchinho";
   littleSnack.setAttribute("id", "btn-little-snack");

   eat.innerText = "Comer";
   eat.setAttribute("id", "btn-eat");
 
   drink.innerText = "Beber agua";
   drink.setAttribute("id", "btn-drink");
  
   relax.innerText = "Relaxar";
   relax.setAttribute("id", "btn-relax");

   bath.innerText = "Banho";
   bath.setAttribute("id", "btn-bath"); 

   brushTeeth.innerText = "Escovar os dentes";
   brushTeeth.setAttribute("id", "btn-brush-teeth");

   futebol.innerText = "Futebol";
   futebol.setAttribute("id", "btn-futebol");

   containerActions.appendChild(run); 
   containerActions.appendChild(play);
   containerActions.appendChild(sleep); 
   containerActions.appendChild(toilet);
   containerActions.appendChild(kindness);
   containerActions.appendChild(littleSnack);
   containerActions.appendChild(eat);
   containerActions.appendChild(drink);
   containerActions.appendChild(relax); 
   containerActions.appendChild(bath);
   containerActions.appendChild(brushTeeth);
   containerActions.appendChild(futebol);

} 

createActionsButtons();

const btnRun = document.querySelector('#btn-run');
const btnPlay = document.querySelector('#btn-play');
const btnSleep = document.querySelector('#btn-sleep');
const btnToilet = document.querySelector('#btn-toilet');
const btnKindness = document.querySelector('#btn-kindness');
const btnLittleSnack = document.querySelector('#btn-little-snack');
const btnEat = document.querySelector('#btn-eat');
const btnDrink = document.querySelector('#btn-drink');
const btnRelax = document.querySelector('#btn-relax');
const btnBath = document.querySelector('#btn-bath');
const btnBrushTeeth = document.querySelector('#btn-brush-teeth');
const btnFutebol = document.querySelector('#btn-futebol');

let randomNumberActions = Math.floor(Math.random() * (10 - 5 + 1)) + 5; 

function disableAndEnabledActionButtons() {

      if (health <= 0) {

      run.setAttribute('id', 'not-clickable');
      play.setAttribute('id', 'not-clickable');
      sleep.setAttribute('id', 'not-clickable');
      toilet.setAttribute('id', 'not-clickable');
      kindness.setAttribute('id', 'not-clickable');
      littleSnack.setAttribute('id', 'not-clickable');
      eat.setAttribute('id', 'not-clickable');
      drink.setAttribute('id', 'not-clickable');
      relax.setAttribute('id', 'not-clickable');
      bath.setAttribute('id', 'not-clickable');
      brushTeeth.setAttribute('id', 'not-clickable');
      futebol.setAttribute('id', 'not-clickable');

      randomNumberActions = 0;
      btnActions.setAttribute('id', 'not-clickable');
      btnStatus.setAttribute('id', 'not-clickable');     
      btnActions.disabled = true;
      btnStatus.disabled = true; 

      return 

    }; 

    if (vitality <= 30 || alimentation <= 30 || bathroom <= 30|| hydration <= 30) {

      run.setAttribute('id', 'not-clickable');
      run.disabled = true; 

    } else {

      run.setAttribute('id', 'btn-run');
      run.disabled = false;    

    };

    if (vitality <= 30 || alimentation <= 30 || bathroom <= 30|| hydration <= 30) {

      play.setAttribute('id', 'not-clickable'); 
      play.disabled = true;   
      
    } else {

      play.setAttribute('id', 'btn-play'); 
      play.disabled = false;    
      
    };

    if (vitality >= 100 || alimentation <= 30 || bathroom <= 30 || hydration <= 30) {

      sleep.setAttribute('id', 'not-clickable');  
      sleep.disabled = true;     
      
    } else {

      sleep.setAttribute('id', 'btn-sleep');  
      sleep.disabled = false;   
      
    }; 

    if (bathroom >= 100) {

      toilet.setAttribute('id', 'not-clickable');
      toilet.disabled = true;      
      
    } else {

      toilet.setAttribute('id', 'btn-toilet');
      toilet.disabled = false;       
      
    };

    if (happy >= 100) {

      kindness.setAttribute('id', 'not-clickable');  
      kindness.disabled = true;
      
    } else {

      kindness.setAttribute('id', 'btn-kindness');     
      kindness.disabled = false;
      
    };

    if (alimentation >= 100 || bathroom <= 30) {

      littleSnack.setAttribute('id', 'not-clickable');
      littleSnack.disabled = true;    
      
    } else {

      littleSnack.setAttribute('id', 'btn-little-snack');
      littleSnack.disabled = false;     
      
    };

    if (alimentation >= 100 || bathroom <= 30) {

      eat.setAttribute('id', 'not-clickable'); 
      eat.disabled = true;      
      
    } else {

      eat.setAttribute('id', 'btn-eat'); 
      eat.disabled = false;     
      
    };

    if (hydration >= 100 || bathroom <= 30) {

      drink.setAttribute('id', 'not-clickable'); 
      drink.disabled = true;       
      
    } else {

      drink.setAttribute('id', 'btn-drink'); 
      drink.disabled = false;    
      
    };

    if (vitality >= 90 || alimentation <= 30 || bathroom <= 30 || hydration <= 30) {

      relax.setAttribute('id', 'not-clickable');  
      relax.disabled = true;       
      
    } else {

      relax.setAttribute('id', 'btn-relax');  
      relax.disabled = false;   
      
    };

    if (cleaning >= 100 || bathroom <= 30 || hydration <= 30 || alimentation <= 30) {

      bath.setAttribute('id', 'not-clickable');  
      bath.disabled = true;       
      
    } else {

      bath.setAttribute('id', 'btn-bath');  
      bath.disabled = false;   
      
    };

    if (cleaning >= 100 || bathroom <= 30 || hydration <= 30 || alimentation <= 30) {

      brushTeeth.setAttribute('id', 'not-clickable');  
      brushTeeth.disabled = true;       
      
    } else {

      brushTeeth.setAttribute('id', 'btn-brush-teeth');  
      brushTeeth.disabled = false;   
      
    }; 

    if (vitality <= 30 || alimentation <= 30 || bathroom <= 30|| hydration <= 30) {

      futebol.setAttribute('id', 'not-clickable');  
      futebol.disabled = true;       
      
    } else {

      futebol.setAttribute('id', 'btn-futebol');  
      futebol.disabled = false;   
      
    };

}; 

const delayRunButton = setTimeout(() => {run.setAttribute('id', 'btn-run'); run.disabled = false;}, 30000);
const delayPlayButton = setTimeout(() => {play.setAttribute('id', 'btn-play'); play.disabled = false;}, 30000);
const delaySleepButton = setTimeout(() => {sleep.setAttribute('id', 'btn-sleep'); sleep.disabled = false;}, 30000);
const delayToiletButton = setTimeout(() => {toilet.setAttribute('id', 'btn-toilet'); toilet.disabled = false;}, 30000);
const delayKindnessButton = setTimeout(() => {kindness.setAttribute('id', 'btn-kindness'); kindness.disabled = false;}, 30000);
const delayLittleSnackButton = setTimeout(() => {littleSnack.setAttribute('id', 'btn-little-snack'); littleSnack.disabled = false;}, 30000);
const delayEatButton = setTimeout(() => {eat.setAttribute('id', 'btn-eat'); eat.disabled = false;}, 30000);
const delayDrinkButton = setTimeout(() => {drink.setAttribute('id', 'btn-drink'); drink.disabled = false;}, 30000);
const delayRelaxButton = setTimeout(() => {relax.setAttribute('id', 'btn-relax'); relax.disabled = false;}, 30000); 
const delayBathButton = setTimeout(() => {bath.setAttribute('id', 'btn-bath'); bath.disabled = false;}, 30000);
const delayBrushTeethButton = setTimeout(() => {brushTeeth.setAttribute('id', 'btn-brush-teeth'); brushTeeth.disabled = false;}, 30000);
const delayFutebolButton = setTimeout(() => {futebol.setAttribute('id', 'btn-relax'); futebol.disabled = false;}, 30000);

const callFunctions = (indexStatus, updadeImages, updateAllBars) => {
 
  indexStatus(); 
  updadeImages();
  updateAllBars(); 

};

function toRun() { 

  if(alimentation > 30 || hydration > 30 || vitality > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/running.gif';
    run.setAttribute('id', 'not-clickable');      
    run.disabled = true;     
    delayUpdateImages;
    delayRunButton;
    activateAudioClick(); 

    vitality -= randomNumberActions;
    cleaning -= randomNumberActions;
    hydration -= randomNumberActions;
    alimentation -= randomNumberActions;    
    happy += randomNumberActions;
    health += randomNumberActions - 5; 
    

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };

    if (health >= 95) {
      
      health = 100;  
      health += 0;       

    };             

    callFunctions(indexStatus, updadeImages, updateAllBars);

  };  
   
}; 

function toPlay() { 

  if(alimentation > 30 || hydration > 30 || vitality > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/joking.gif';  
    play.setAttribute('id', 'not-clickable');     
    play.disabled = true;
    delayUpdateImages;
    delayPlayButton;
    activateAudioClick();

    vitality -= randomNumberActions;
    cleaning -= randomNumberActions;
    hydration -= randomNumberActions;
    alimentation -= randomNumberActions;
    happy += randomNumberActions; 
    health += randomNumberActions - 5;     

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    }; 

    if (health >= 95) {
      
      health = 100;  
      health += 0;       

    }; 

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
};  

function toSleep() {   

  if(alimentation > 30 && hydration > 30 && vitality < 100 && bathroom > 30) {     

  containerStatus.setAttribute('class', 'container-status-hidden');
  containerActions.setAttribute('class', 'container-actions-hidden');

  imageUrl = './animations/sleeping.gif';  
  sleep.setAttribute('id', 'not-clickable');     
  sleep.disabled = true;
  delayUpdateImages;
  delaySleepButton;
  activateAudioClick();

  vitality += randomNumberActions;
  health += randomNumberActions - 5; 
  
  callFunctions(indexStatus, updadeImages, updateAllBars); 

  return 

};

  if (vitality >= 95) {

      vitality += 0;
      vitality = 100;      
};

  if (health >= 95) {

      health += 0;
      health = 100;
     
};  
  
  callFunctions(indexStatus, updadeImages, updateAllBars);   

}; 

function toToilet() { 

  if(bathroom < 100) {  

  containerStatus.setAttribute('class', 'container-status-hidden');
  containerActions.setAttribute('class', 'container-actions-hidden');

  imageUrl = './animations/bathroom.gif';  
  toilet.setAttribute('id', 'not-clickable');     
  toilet.disabled = true;
  delayUpdateImages;
  delayToiletButton;
  activateAudioClick();

  bathroom += randomNumberActions;
  health += randomNumberActions - 5;  

}; 

  if (bathroom >= 95) {     
      
    bathroom += 0;
    bathroom = 100;  

  };

  if (health >= 95) {
    
    health = 100;  
    health += 0;       

  }; 

  callFunctions(indexStatus, updadeImages, updateAllBars);

};  

function toKindness() { 

  if(happy < 100) { 

  containerStatus.setAttribute('class', 'container-status-hidden');
  containerActions.setAttribute('class', 'container-actions-hidden');

  imageUrl = './animations/kindness.gif';  
  kindness.setAttribute('id', 'not-clickable');     
  kindness.disabled = true;
  delayUpdateImages;
  delayKindnessButton;
  activateAudioClick();

  happy += randomNumberActions;
  health += randomNumberActions - 5;   

  };

  if (happy >= 95) {

     happy += 0; 
     happy = 100;  
      
  };  

  callFunctions(indexStatus, updadeImages, updateAllBars);

};

function toLittleSnack() { 

  if(alimentation < 100 && vitality > 30 && bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/little-snack.gif';  
    littleSnack.setAttribute('id', 'not-clickable');     
    littleSnack.disabled = true;
    delayUpdateImages;
    delayLittleSnackButton;  
    activateAudioClick();  
    
    happy += randomNumberActions;
    alimentation += randomNumberActions;
    bathroom -= randomNumberActions; 
    hydration -= randomNumberActions;      

    }; 

    if(happy >= 95) {

      happy += 0;
      happy = 100;      
      
    }; 

    if(alimentation >= 95) {

      alimentation += 0;
      alimentation = 100;  
      
    };

    callFunctions(indexStatus, updadeImages, updateAllBars);       
        
  };

 

function toEat() { 

  if(alimentation < 100 && vitality > 30 && bathroom > 30 && hydration) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/eating.gif';  
    eat.setAttribute('id', 'not-clickable');     
    eat.disabled = true;
    delayUpdateImages;
    delayEatButton; 
    activateAudioClick();   
    
    bathroom -= randomNumberActions; 
    hydration -= randomNumberActions;   
    alimentation += randomNumberActions; 
    happy += randomNumberActions;
    health += randomNumberActions - 5;  

    }; 

    if(alimentation >= 95) {

      alimentation += 0;
      alimentation = 100;  
    
    };

    if(happy >= 95) {

      happy += 0;
      happy = 100;      
     
    };  

    if(health >= 95) {

      health += 0;
      health = 100;      
     
    };  

    callFunctions(indexStatus, updadeImages, updateAllBars); 

};

function toDrink() { 

  if(alimentation < 100 && vitality > 30 && bathroom > 30 && hydration) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/drinking.gif';  
    drink.setAttribute('id', 'not-clickable');     
    drink.disabled = true;
    delayUpdateImages;
    delayDrinkButton;  
    activateAudioClick();  
    
    bathroom -= randomNumberActions; 
    hydration += randomNumberActions;  
    health += randomNumberActions - 5;  

    };

    if(hydration >= 95) {

      hydration += 0;
      hydration = 100;      
     
    };  

    if(health >= 95) {

      health += 0;
      health = 100;      
     
    };

    callFunctions(indexStatus, updadeImages, updateAllBars); 

};


function toRelax() {  

    if(alimentation < 100 && vitality > 30 && bathroom > 30 && hydration) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/relax.gif';  
    relax.setAttribute('id', 'not-clickable');     
    relax.disabled = true;
    delayUpdateImages;
    delayRelaxButton; 
    activateAudioClick();   
    
    alimentation -= randomNumberActions;
    bathroom -= randomNumberActions; 
    vitality += randomNumberActions;  
    health += randomNumberActions - 5;  

    };

    if(vitality >= 95) {

      vitality += 0;
      vitality = 100;      
     
    };  

    if(health >= 95) {

      health += 0;
      health = 100;      
     
    };

    callFunctions(indexStatus, updadeImages, updateAllBars);

};

function toBath() { 

  if(cleaning < 100 || hydration > 30 || alimentation > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/bathing.gif';  
    bath.setAttribute('id', 'not-clickable');     
    bath.disabled = true;
    delayUpdateImages;
    delayBathButton;
    activateAudioClick();

    cleaning += randomNumberActions;  
    happy += randomNumberActions; 
    health += randomNumberActions - 5;     

    if (cleaning >= 95) {
      
      cleaning = 100;  
      cleaning += 0;       

    };

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };  

    if (health >= 95) {
      
      healt = 100;  
      healt += 0;       

    };

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
};


function toBrushTeeth() { 

  if(cleaning < 100 || hydration > 30 || alimentation > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/brush-teeth.gif';  
    brushTeeth.setAttribute('id', 'not-clickable');     
    brushTeeth.disabled = true;
    delayUpdateImages;
    delayBrushTeethButton;
    activateAudioClick();

    cleaning += randomNumberActions;  
    happy += randomNumberActions; 
    health += randomNumberActions - 5;     

    if (cleaning >= 95) {   
      
      cleaning = 100;  
      cleaning += 0;       

    };

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };  

    if (health >= 95) {
      
      healt = 100;  
      healt += 0;       

    };

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
};  

function toFutebol() { 

  if(alimentation > 30 || hydration > 30 || vitality > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/fut.gif';  
    futebol.setAttribute('id', 'not-clickable');     
    futebol.disabled = true;
    delayUpdateImages;
    delayFutebolButton;
    activateAudioClick();

    vitality -= randomNumberActions;
    cleaning -= randomNumberActions;
    hydration -= randomNumberActions;
    alimentation -= randomNumberActions;
    happy += randomNumberActions; 
    health += randomNumberActions - 5;      

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };

    if (health >= 95) {
      
      healt = 100;  
      healt += 0;       

    };  

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
}; 

const delayUpdateImages = setTimeout(() => {

    updadeImages();    

    setTimeout(() => {      

      updadeImages();        

    }, 15000);     

}, 3000);    
 
function notifications() {

  let messageHealth = null; 
  let messageHappy = null;
  let messageAlimenation = null;
  let messageHydration = null;
  let messageVitality = null;
  let messageCleaning = null;
  let messageBathroom = null;   
 
  notificationDiv.setAttribute("id", "notification");

  const receiveMessageHealth = document.createElement("span");  
  const receiveMessageHappy = document.createElement("span");  
  const receiveMessageAlimenation = document.createElement("span");
  const receiveMessageHydration = document.createElement("span");    
  const receiveMessageVitality = document.createElement("span");  
  const receiveMessageCleaning = document.createElement("span");  
  const receiveMessageBathroom = document.createElement("span"); 

  receiveMessageHealth.classList.add("notification-health");
  receiveMessageHappy.classList.add("notification-happy");
  receiveMessageAlimenation.classList.add("notification-alimentation");
  receiveMessageHydration.classList.add("notification-hydration");  
  receiveMessageVitality.classList.add("notification-vitality");
  receiveMessageCleaning.classList.add("notification-cleaning");
  receiveMessageBathroom.classList.add("notification-bathroom");

  notificationDiv.appendChild(receiveMessageHealth);
  notificationDiv.appendChild(receiveMessageHappy);
  notificationDiv.appendChild(receiveMessageAlimenation);
  notificationDiv.appendChild(receiveMessageHydration);
  notificationDiv.appendChild(receiveMessageVitality);
  notificationDiv.appendChild(receiveMessageCleaning);
  notificationDiv.appendChild(receiveMessageBathroom); 

  const showMessage = () => {
    document.body.appendChild(notificationDiv);
    notificationDiv.classList.add("notification-container");
    receiveMessageHealth.innerText = messageHealth;
    receiveMessageHappy.innerText = messageHappy;
    receiveMessageAlimenation.innerText = messageAlimenation;
    receiveMessageHydration.innerText = messageHydration;
    receiveMessageVitality.innerText = messageVitality;
    receiveMessageCleaning.innerText = messageCleaning;
    receiveMessageBathroom.innerText = messageBathroom;
  };

  const deleteMessage = setTimeout(() => {   
    
    receiveMessageHealth.remove();
    receiveMessageHappy.remove();
    receiveMessageAlimenation.remove();
    receiveMessageHydration.remove(); 
    receiveMessageVitality.remove(); 
    receiveMessageCleaning.remove(); 
    receiveMessageBathroom.remove();

    messageHealth = null; 
    messageHappy = null;
    messageAlimenation = null;
    messageHydration = null;
    messageVitality = null;
    messageCleaning = null;
    messageBathroom = null;     
    
  }, 60000);

  if (health <= 0) {
    messageHealth = `O ${name} morreu!`;
    showMessage(); 
    return       
  } else { 
    deleteMessage    
    messageHealth = null;    
  };

  if (health < 95) {

    messageHealth = `O ${name} não está se sentindo bem!`;
    showMessage();

  } else { 

    receiveMessageHealth.remove();
    messageHealth = null;   

  };

  if (happy < 95) {

    messageHappy = `O ${name} está triste!`;
    showMessage();  

  } else {

    receiveMessageHappy.remove();
    messageHappy = null;

  };

  if (alimentation < 95) {

    messageAlimenation = `O ${name} está com fome!`;
    showMessage(); 

  } else {

    receiveMessageAlimenation.remove();
    messageAlimenation = null;  

  };

  if (hydration < 95) {

    messageHydration = `O ${name} está com sede!`;
    showMessage();   

  } else {

    receiveMessageHydration.remove();
    messageHydration = null;   

  };

  if (vitality < 95) {

    messageVitality = `O ${name} está cansado!`;
    showMessage();

  } else {

    receiveMessageVitality.remove();
    messageVitality = null;    

  };

  if (cleaning < 95) {

    messageCleaning = `O ${name} está sujo!`;
    showMessage();  

  } else {

    receiveMessageCleaning.remove();
    messageCleaning = null; 

  }; 

  if (bathroom < 95) {

    messageBathroom = `O ${name} está apertado!`;
    showMessage();  

  } else {

    receiveMessageBathroom.remove();
    messageCleaning = null;

  };

  if (health >= 95 && happy >= 95 && alimentation >= 95 && hydration >= 95 
    && vitality >= 95 && cleaning >= 95 && bathroom >= 95){

    notificationDiv.remove(); 

  }; 
  
  deleteMessage;
  
};  

function activateAudio() {

  if (myAudio.paused) {
    myAudio.play();    
    iconBtnTurnDownVol.setAttribute('src', './imgs/volume-high-solid.svg')
  } else {
    myAudio.pause();    
    iconBtnTurnDownVol.setAttribute('src', './imgs/volume-xmark-solid.svg')
  }
} 

function turnUpVol() {

  if (myAudio.volume < 1) {
    myAudio.volume = Math.min(myAudio.volume + 0.1, 1);     
  }
}

function turnDownVol() {

  if (myAudio.volume > 0) {
    myAudio.volume = Math.max(myAudio.volume - 0.1, 0);     
  }
} 

function clickSoundEffect() {   

  if (myAudioClick.paused) {
    myAudioClick.play();    
  } else {
    myAudioClick.pause();        
  }
}

 

btnActivateAudio.addEventListener('click', activateAudio);
buttons.forEach(button => {
  button.addEventListener('click', clickSoundEffect);
});

btnTurnUpVol.addEventListener('click', turnUpVol);
btnTurnDownVol.addEventListener('click', turnDownVol);

btnRun.addEventListener('click', toRun);
btnPlay.addEventListener('click', toPlay);
btnSleep.addEventListener('click', toSleep);
btnToilet.addEventListener('click', toToilet);
btnKindness.addEventListener('click', toKindness);
btnLittleSnack.addEventListener('click', toLittleSnack);
btnEat.addEventListener('click', toEat);
btnDrink.addEventListener('click', toDrink);
btnRelax.addEventListener('click', toRelax); 
btnBath.addEventListener('click', toBath);
btnBrushTeeth.addEventListener('click', toBrushTeeth);
btnFutebol.addEventListener('click', toFutebol);

const ageUpdateInterval = setInterval(ageUpdate, oneDay);
const indexStatusUpdateInterval = setInterval(indexStatus, 3000);
const notificationsInterval = setInterval(notifications, 60000); 
const growthInterval = setInterval(growth, 192000);

const healthUpdateInterval = setInterval(healthStatus, 12000);
const happyUpdateInterval = setInterval(happyStatus, 11000);
const alimentationUpdateInterval = setInterval(alimentationStatus, 10000);
const hydrationUpdateInterval = setInterval(hydrationStatus, 9000);
const vitalityUpdateInterval = setInterval(vitalityStatus, 8000);
const cleaningUpdateInterval = setInterval(cleaningStatus, 7000);
const bathroomUpdateInterval = setInterval(bathroomStatus, 6000); 

const updadeImagesInterval = setInterval(updadeImages, imageInterval);
const updateAllBarsInterval = setInterval(updateAllBars, 3000);

const disableAndEnabledActionButtonsInterval = setInterval(disableAndEnabledActionButtons, 3000);
const limiteUpdateStatusInterval = setInterval(limiteStatus, 3000);
const yourCatDiedUpdateInterval = setInterval(yourCatDied, 3000); 