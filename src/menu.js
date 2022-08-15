export default root => {
    root.textContent = ""; // Clear root

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    h1.classList.add("menu");

    const h2 = document.createElement("h2");
    h2.textContent = "Lot's of things available!";
    h2.classList.add("menu");

    root.appendChild(h1);
    root.appendChild(h2);
};