food = document.getElementById("food-list");
cart = document.querySelector("#cart-list ul")
itemsUl = $(".items-list");

loadFood();
function loadFood() {
    food.addEventListener("click", addFood);
};

function addFood(e) {
    e.preventDefault();
    if(e.target.classList.contains('add-food')) {
        const item = e.target.parentElement.parentElement.parentElement;
        addItem(item);
        const action = "add";
        itemCount(item, action)
    };
    if(e.target.classList.contains('remove-food')) {
        const item = e.target.parentElement.parentElement.parentElement;
        removeItem(item);
        const action = "sub";
        itemCount(item, action);
    };
    if(e.target.classList.contains('remove-from-list')) {
        const name = e.target.parentElement.textContent.replace("x", "");
        const action = "sub";
        let itemDiv = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        let h4s = itemDiv.querySelectorAll("h4");
        let myh4 = [...h4s].filter(e => e.innerText === name);
        const item = myh4[0].parentElement.parentElement;
        removeItem(item);
        itemCount(item, action);
    };
};

function itemCount(item, action) {
    console.log(item);
    let counterElement = item.querySelector('.item-counter')
    let counter = parseInt(counterElement.textContent);
    action === "add" ? counter++ : counter--;
    counter >= 0 ? counterElement.innerHTML = `${counter}` : null;
};

function addItem(item) {
    let name = item.querySelector('h4').textContent;
    const itemMenu = document.createElement('li');
    itemMenu.setAttribute('class', 'item-list p-2 d-flex align-items-center justify-content-between');
    itemMenu.innerHTML = `${name}<a href="#" class="remove-from-list mr-4 ml-4 pr-3 pl-3 rounded bg-white">x</a>`;
    cart.appendChild(itemMenu);
};
function removeItem(item) {
    let name = item.querySelector('h4').textContent;
    const itemToRemove = `<li class="item-list p-2 d-flex align-items-center justify-content-between">${name}<a href="#" class="remove-from-list mr-4 ml-4 pr-3 pl-3 rounded bg-white">x</a></li>`;
    let itemsList = itemsUl.html();
    itemsList = itemsList.replace(itemToRemove, "");
    itemsUl.html(itemsList);
};

