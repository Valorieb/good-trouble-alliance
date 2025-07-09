const navbar = document.querySelector("nav");
const ul = document.createElement("ul");


const menuItems = ["Our Vision","Join Us","Contact"];
const menuIDs = ["vision", "join","contact"];

const renderNav = ()=>{
    menuItems.forEach((item, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${menuIDs[index]}">${item}</a>`;
        ul.appendChild(li);
    }
)}

navbar.appendChild(ul);

renderNav();