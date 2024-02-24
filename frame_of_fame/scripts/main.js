import {model} from "./model.js"
import {modelSidebar} from "./model.js"

const $content = document.querySelector(".content"); //$ object of document model
const $sidebar =  document.querySelector(".sidebar");


// Rendering content
if ($content && $sidebar) { // Check if elements are found
    const contentHtml = model.map(b => b.toHTML()).join("");
    const sidebarHtml = modelSidebar.map(b => b.toHTML()).join("");

    // Inserting HTML content into elements
    $sidebar.insertAdjacentHTML("beforeend", sidebarHtml);
    $content.insertAdjacentHTML("beforeend", contentHtml);
    
    // Add an event listener to each button to toggle the underline effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('btn-underlined');
        });
    });
} else {
    console.error("Could not find .content or .sidebar element");
}

