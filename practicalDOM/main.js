// Creating an array which size is 4
let grocList = document.getElementById("itemList");
var grocItem = ["Banana", "Oranges", "Cucumber", "Tomato", "Spinach"];
// Function to display items in array
function displayItems(){
    try {
    for (let i in grocItem){
        grocItem = document.createElement('li');
        grocItem.innerHTML = grocItem[i];
        grocList.appendChild(grocItem);
    } 
} catch(err){
    console.log(err);
}
}

// Function to set default item
function setDefaultChecked(itemID){
    item = document.getAnimations(itemID);
    item.style.textDecoration = "line-through";
}
