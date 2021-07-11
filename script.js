const h2 = document.createElement('h2');
h2.textContent = "Thank you for visiting!";
document.querySelector('body').appendChild(h2);

function addingEventListeners() {
    const inputs = document.getElementById('h2flowers');
    function showMyImage() {
        flowers.src = "flowers.jpg";
        flowers.style.display = 'block';
        
    }
    inputs.addEventListener('click', showMyImage); 
}
addingEventListeners();

function addingMoreEventListeners() {
    const inputs = document.getElementById('h2flowers');
    function showMyImage() {
        flowers.src = "flowerscolors.jpg";
        flowers.style.display = 'block';
        
    }
    inputs.addEventListener('mouseout', showMyImage); 
}
addingMoreEventListeners();

//function addingEventListener() {
    //const input = document.getElementById('flowers');
    //function clickAlert() {
      //alert('I was clicked!');
   // }
    //input.addEventListener('click', clickAlert); 
//}
//addingEventListener();





