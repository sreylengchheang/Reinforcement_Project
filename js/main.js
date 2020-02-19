
/**
* @variable {addButtonClick, filterButtonClick, addInput, filterInput, listElement}
* @description declare variable for use with any function below
*/
const addButtonClick = document.querySelector("#btn-add");
const filterButtonClick = document.querySelector("#btn-filter");
const addInput = document.querySelector("#add");
const filterInput = document.querySelector("#filter");
const listElement = document.querySelector("ul");
/**
 * @Noted you can add your code more with addEventListener with button or anything...
 */
addButtonClick.addEventListener("click", () => {
  setActive(addButtonClick);
  clearActive(filterButtonClick);
  randomColor();
  setVisible(addInput, true);
  setVisible(filterInput, false);
});
filterButtonClick.addEventListener("click", () => {
  setActive(filterButtonClick);
  clearActive(addButtonClick);
  randomColor();
  setVisible(filterInput, true);
  setVisible(addInput, false);
});
/**
 * @function setActive
 * @param {*} element 
 * @description this function use for set active color to element
 */
//code here...
function setActive(element) {
  element.classList.add("active");
}

/**
 * @function clearActive
 * @param {*} element 
 * @description this function use for clear active color on element
 */
function clearActive(element) {
  element.classList.remove('active');
}


/**
 * @function setVisible
 * @param {*} element 
 * @param {*} visible boolean
 * @description this function use to hide or show element
 */
// code here...
function setVisible(element, visible) {
  visible ? element.style.display = "block" : element.style.display = "none";
}

/**
 * @function addItem
 * @param {*} item 
 * @description this function use to add new item to the list when keyup event happen on "Enter" key
 */
function addItem(item) {
  let outputHTML = `
        <li><i class="material-icons"> radio_button_checked</i> &nbsp; ${item}</li>
      `;
  listElement.insertAdjacentHTML('beforeend', outputHTML);
}
document.addEventListener('keyup', event => {
  const inputValue = addInput.value;
  if (event.code === "Enter") {
    if (inputValue != "") {
      addItem(inputValue);
      clearInput();
      litmitItem();
    }
  }
});
addButtonClick.addEventListener('click', () => {
  const inputValue = addInput.value;
  if (inputValue != "") {
    addItem(inputValue);
    clearInput();
    litmitItem();
  }
})
/**
 * @function clearInput
 * @description this function use to clear text from add input
 */
function clearInput() {
  addInput.value = "";
}
/**
 * @function filterList
 * @description this function use to filter list information when keyup event happen
 */
function filterList() {
  const FILTER_NOT_FOUND = -1;
  const items = document.querySelectorAll('li');
  let filter = filterInput.value.toUpperCase();
  let text;
  for (let i = 0; i < items.length; i++) {
    text = items[i].textContent || items[i].innerText;
    let isMatchFilter = text.toUpperCase().indexOf(filter) > FILTER_NOT_FOUND;
    if (isMatchFilter) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}
document.addEventListener("keyup", filterList);

/**
 * @array : colorsList
 */
const colorsList = [
  "linear-gradient(90deg, #ffffe5, #f7fcc4, #e4f4ac, #c7e89b, #a2d88a, #78c578, #4eaf63, #2f944e, #15793f, #036034, #036034)",
  "linear-gradient(90deg, #fff7f3, #fde4e1, #fccfcc, #fbb5bc, #f993b0, #f369a3, #e03f98, #c11889, #99037c, #710174, #710174)",
  "linear-gradient(90deg, #ffffe5, #fff8c4, #feeba2, #fed676, #febb4a, #fb9a2c, #ee7919, #d85b0a, #b74304, #8f3204, #8f3204)",
  "linear-gradient(90deg, #f7fcf0, #e5f5df, #d4eece, #bde5bf, #9fd9bb, #7bcbc4, #58b7cd, #399cc6, #1e7eb7, #0b60a1, #0b60a1)",
  "linear-gradient(90deg, #6e40aa, #6154c8, #4c6edb, #368ce1, #24aad8, #1ac7c2, #1ddea3, #30ee83, #52f667, #7ef658, #7ef658)"
];
/**
 * @function randomColor
 * @description this function use to random the color when we click on add button or filter button and change the background of body
 */
// code here...
function randomColor() {
  let indexColor = Math.floor(Math.random() * colorsList.length)
  document.body.style.background = colorsList[indexColor];
}
/**
 * @function limitItem
 * @description this function use to check if item is 10 it will will be stop to allow the user to add more item 
 * and confirm to the use with message "Sorry !! you cannot add item more than 10"
 */
function litmitItem() {
  const items = document.querySelectorAll('li');
  if(items.length > 9){
    alert("Sorry !! you cannot add item more than 10");
  }
   
}
