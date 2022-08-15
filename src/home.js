export default root => {
    root.textContent = ""; // Clear root

    const h1 = document.createElement("h1");
    h1.textContent = "Dummy Restaraunt";
    h1.classList.add("home-h1");

    const h2 = document.createElement("h2");
    h2.textContent = "Grab a bite to eat.";
    h2.classList.add("home-h2");

    root.appendChild(h1);
    root.appendChild(h2);
};