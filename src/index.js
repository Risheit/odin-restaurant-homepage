import "./index.css";
import setHomeContent from "./home.js";
import setMenuContent from "./menu.js";
import setContactContent from "./contact.js"

initBody();


function initBody() {
    const sidebar = initSidebar();
    const main = initMain();

    sidebar.querySelector("#home")
        .addEventListener("change", () => setHomeContent(main));
    sidebar.querySelector("#menu")
        .addEventListener("change", () => setMenuContent(main));
    sidebar.querySelector("#contact")
        .addEventListener("change", () => setContactContent(main));

    document.body.appendChild(sidebar);
    document.body.appendChild(main);

    setHomeContent(main);
}

function initSidebar() {
    const options = document.createElement("form");
    options.classList.add("sidebar");

    const homeOption = initSidebarItem("home", "Home", "", "restarant logo");
    homeOption.querySelector(".sidebar-input").checked = true;
    options.appendChild(
        homeOption
    );
    options.appendChild(
        initSidebarItem("menu", "Menu", "", "picture of food")
    );
    options.appendChild(
        initSidebarItem("contact", "Contact", "", "picture of contact")
    );

    return options;
}

function initSidebarItem(id, content, imgSrc, imgAlt) {
    const img = document.createElement("img");
    img.classList.add("sidebar-image");
    img.src = imgSrc;
    img.alt = imgAlt;
    
    const text = document.createElement("p");
    text.classList.add("sidebar-content");
    text.textContent = content;
    
    const label = document.createElement("label");
    label.classList.add("sidebar-label");
    label.htmlFor = id;
    label.appendChild(img);
    label.appendChild(text);

    const input = document.createElement("input");
    input.classList.add("sidebar-input");
    input.type = "radio";
    input.id = id;
    input.name = "sidebar-item";

    const item = document.createElement("p");
    item.classList.add("sidebar-item");
    item.appendChild(input);
    item.appendChild(label);

    return item;
}

function initMain() {  
    const main = document.createElement("main");
    
    return main
}