import Friend from "./Friend.mjs";

document.onreadystatechange = () => {
    if (document.readyState !== "complete") return;
    window.context = {
        friends: [],
        setFriends: (newValue) => {
            window.context.friends = newValue;
            render();
        }
    }
    const firstNameInput = buildInput(
        "firstName", 
        "text", 
        "First Name"
    );
    const lastNameInput = buildInput(
        "lastName", 
        "text", 
        "Last Name"
    );
    const birthdateInput = buildInput(
        "birthdate", 
        "date", 
        "Birthdate"
    );
    const colorInput = buildInput(
        "color", 
        "text", 
        "Color"
    );
    const catchPhraseInput = buildInput(
        "catchPhrase", 
        "text", 
        "Catch phrase"
    );
    const container = document.createElement("div");
    container.classList.add("d-flex", "p-3", "flex-column", "w-100", "align-items-center");
    const app = document.querySelector("#app");
    container.appendChild(firstNameInput);
    container.appendChild(lastNameInput);
    container.appendChild(birthdateInput);
    container.appendChild(colorInput);
    container.appendChild(catchPhraseInput);
    const button = document.createElement("button");
    button.textContent = "Create friend";
    button.classList.add("btn", "btn-primary", "my-4");
    button.addEventListener("click", (event) => {
        const newFriend = new Friend({
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            birthdate: document.querySelector("#birthdate").value,
            color: document.querySelector("#color").value,
            catchPhrase: document.querySelector("#catchPhrase").value
        });
        window.context.setFriends([
            ...window.context.friends,
            newFriend
        ]);
    })
    container.appendChild(button);
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("d-flex", "flex-column", "w-100");
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("d-flex", "wrap");
    cardContainer.id = "card-container";
    mainContainer.appendChild(container);
    mainContainer.appendChild(cardContainer);
    app.innerHTML = "";
    app.appendChild(mainContainer);
}

function buildInput(
    name,
    type,
    placeholder
) {
    const input = document.createElement("input");
    input.classList.add("form-control", "w-50", "m-2");
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    input.id = name;
    return input
};

function render() {
    console.log(window.context);
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#birthdate").value = "";
    document.querySelector("#color").value = "";
    document.querySelector("#catchPhrase").value = "";
    const cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = "";
    for (let friend of window.context.friends) {
        const card = buildCard(friend);
        cardContainer.appendChild(card);
    }
};

function buildCard(friend) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    const cardBody = document.createElement("div");
    card.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = friend.fullName;
    const pAge = document.createElement("p");
    pAge.textContent = friend.age;
    const pCatchPhrase = document.createElement("p");
    pAge.classList.add("card-text");
    pCatchPhrase.classList.add("card-text");
    pCatchPhrase.textContent = friend.catchPhrase;
    const button = document.createElement("button");
    button.classList.add("btn", "btn-success");
    button.textContent = "Presentarse";
    button.addEventListener("click", (event) => {
        console.log(friend.introduce());
    });
    cardBody.appendChild(title);
    cardBody.appendChild(pCatchPhrase);
    cardBody.appendChild(pAge);
    cardBody.appendChild(button);
    card.appendChild(cardBody);
    return card;
};