// Creating an array of size 5
let grocItem = ["Banana", "Oranges", "Cucumber", "Tomato", "Spinach"];
let grocList = document.getElementById("itemList");

// Function to display items from an array
function displayItems(){ 
// Clear the current list from the display
    document.getElementById("itemList").innerHTML = "";
// wrapped in try catch block for execption handling if any error occur
    try {
        for (let i in grocItem){ 
// Create a list item element
            let grocListItems = document.createElement('li');
// Add grocListItems in to the grocList 
            grocListItems.innerHTML += `<li id = ${"item" + i.toString()} onClick = "setDefaultChecked(this.id);">${grocItem[i]}</li>`;
            grocList.appendChild(grocListItems);
// Creating a span element for each item
            let span = document.createElement("span");
// Giving the class name delete for the span
            span.className = "delete";
// ASCII code for x
            span.innerHTML = "\u00D7";
            grocListItems.appendChild(span);
            let deleteElement = document.getElementsByClassName("delete");
            for (let i = 0; i < deleteElement.length; i++){
                deleteElement[i].addEventListener('click', deleteItem);
            }
        }    
    } catch(err){
        console.log(err);   
    }
}

// Function to set default item
function setDefaultChecked(itemID){
    let item = document.getElementById(itemID);
    item.style.textDecoration = "line-through";
}

// Function to add items
function addItem(){
    console.log(`Add item button clicked`);
// Stroing the input value from the text field 
    let item = document.getElementById("input").value;
// Checking weather the input text field in empty or not
    if (item === "")
    {
        alert('Please enter an item to add in the shopping list!');
// Checking if the item is aready included which also include case sensative comparision
    } else if (grocItem.find(key => key.toUpperCase() === item.toUpperCase()))
    {
        alert('Item already existed!');
    } else 
    {
// Adding the the value in an array
        grocItem.push(item);
        alert(`${item} added on the list`);
    }
    
// This will clear the input text field as soon as the function/operation  
    document.getElementById('input').value = "";
}

function deleteItem(event) {
// Get the index of the item to delete
    let index = event.target.parentElement.index;
  
// Remove the item from the array and update the list display
    grocItem.splice(index, 1);
    alert(`Item deleted succesfully`);
    displayItems();
  }
// Add a click event listener to the item list
document.getElementById("itemList").addEventListener("click", function(event) {
// If the event target is a list item, toggle the checked class
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  });

// Add a keyup event listener to the input field
document.getElementById("input").addEventListener("keyup", function(event) {
// If the keycode is 13 (Enter key), trigger the add button's click event
   if (event.key === "Enter") {
       document.getElementById("addBtn").click();
       }
   });