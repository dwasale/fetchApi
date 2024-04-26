// grabbing the object at the 0 index of the array and setting it to a variable
let selectedElement = document.getElementsByName("test")[0];
// assigning an anonymous function to the onClick method as a callback function
selectedElement.onclick = function(){
    console.log("The paragraph was clicked");
};
window.open('', '_blank', '');
function closeDoc(){
    alert("Your are closing this page!!");
    window.close();
};
