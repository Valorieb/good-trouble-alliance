const navbar = document.querySelector("nav");
const ul = document.createElement("ul");


const menuItems = ["Our Vision","Join Us","Contact", "Resources"];
const menuIDs = ["vision", "join","contact","resources"];

const renderNav = ()=>{
    menuItems.forEach((item, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${menuIDs[index]}">${item}</a>`;
        ul.appendChild(li);
    }
)}

navbar.appendChild(ul);

renderNav();