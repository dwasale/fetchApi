//grabbing the button and paragraph elements and assigning those objects to variables 
let showMoreButton = document.getElementById('showMoreButton');
let information = document.getElementById('info');
//this function will append text to the paragraph element when called 
function showMoreDetails(){
    information.innerHTML += "some more information ";
}
/* we use the addEventListener method to assign the function to the button element to be
triggered when it is clicked. Note that when using an event listener,
we do not use the "on" portion of the onclick method name, but just 'click'*/
showMoreButton.addEventListener('click', showMoreDetails);
