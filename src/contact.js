export default root => {
    root.textContent = ""; // Clear root

    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";
    h1.classList.add("contact");

    const h2 = document.createElement("h2");
    h2.textContent = "Get in touch with us here.";
    h2.classList.add("contact");

    root.appendChild(h1);
    root.appendChild(h2);
};