// Update the 'Apples' item to say 'Granny Smith Apples'
const repLi = document.querySelectorAll('li')[1].innerHTML = 'Granny Smith Apples';


// Remove 'Oat Milk' from the list
const remOak = document.querySelectorAll('li')[3].remove();
// Add an item 'Kombucha'
const newKamb = document.createElement('li');
newKamb.innerHTML = "Kombucha";
list.appendChild(newKamb);
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']

const clearL = document.querySelector('ul');

clearL.innerHTML = "";

const addNew = ['protein bars', 'almonds', 'peanut butter'];

for (let i = 0; i < addNew.length; i++) {
    const newLi = document.createElement('li');
    newLi.innerHTML = addNew[i];
    list.appendChild(newLi);
}

// Add the class 'important' to the almonds item.

const newAlmClass = document.getElementByTagName('li')[1];
newAlmClass.classList.add('important');
console.log(newAlmClass);



