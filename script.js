const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";
document.querySelector('body').appendChild(h2);


//function addingEventListener() {
    //const input = document.getElementById('flowers');
    //function clickAlert() {
      //alert('I was clicked!');
   // }
    //input.addEventListener('click', clickAlert); 
//}
//addingEventListener();

function addingEventListeners() {
    const inputs = document.getElementById('h2');
    function showMyImage() {
        flowers.src = "flowers.jpg";
        flowers.style.display = 'block';
        
    }
    inputs.addEventListener('click', showMyImage); 
}
addingEventListeners();

function addingMoreEventListeners() {
    const inputs = document.getElementById('h2');
    function showMyImage() {
        flowers.src = "flowerscolors.jpg";
        flowers.style.display = 'block';
        
    }
    inputs.addEventListener('mouseout', showMyImage); 
}
addingMoreEventListeners();





