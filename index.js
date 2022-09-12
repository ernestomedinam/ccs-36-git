document.onreadystatechange = () => {
    if (document.readyState !== "complete") return;
    const listContainer = document.querySelector("#list-container");
    const liElements = [...listContainer.children[0].children];
    listContainer.removeChild(listContainer.children[0]);
    const ol = document.createElement("ol");
    liElements.forEach(
        (li) => ol.appendChild(li)
    );
    listContainer.appendChild(ol);
    listContainer.parentElement.appendChild(
        myObject.buildButton()
    );
    const body = document.querySelector("body"); // document.body;
    // event listener del body
    body.addEventListener("click", (event) => {
        console.log("Hola, soy el event listener del body");
        console.log(event.eventPhase);
        console.log(event.target);
    });
    // event listener del papa de list container
    listContainer.parentElement.addEventListener("click", (event) => {
        console.log("Hola, soy el event listener del papa de container list");
        console.log(event.eventPhase);
        console.log(event.target);
    });
    // event listener de list container
    listContainer.addEventListener("click", (event) => {
        console.log("Hola, soy el event listener list container");
        console.log(event.eventPhase);
        console.log(event.target);
    });
};


function handleClick(event) {
    console.log("hola yo soy el event listener del div flex");
    console.log(event.eventPhase);
    console.log(event.target);
    event.stopPropagation();
    event.preventDefault();
    event.target.parentElement.removeEventListener("click", handleClick);
}
// devuelve un bot'on centrado en un flex con w-100
const myObject = {
    name: "my object",
    buildButton: () => {
        const button = document.createElement("button");
        // btn btn-primary
        button.className = "btn btn-primary";
        button.textContent = "Hazme click!";
        button.addEventListener("click", (event) => {
            console.log("hola yo soy el even listener del bot'on");
            console.log(event.eventPhase);
            console.log(event.target);
        });
        const flex = document.createElement("div");
        flex.addEventListener("click", handleClick);
        flex.style.display = "flex";
        flex.style.flexFlow = "row nowrap";
        flex.style.justifyContent = "center";
        flex.style.width = "100%";
        flex.appendChild(button);
        return flex;
    }
}