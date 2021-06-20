import home from "./pages/home.js"
import sumario from "./pages/sumario.js";
import cont1 from "./pages/cont1.js";
import cont2 from "./pages/cont2.js";
import cont3 from "./pages/cont3.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => { // Essa ação vai verificar o link, exemplo: caso link = #sumario, o main do index.html recebe o template sumario.js
        main.innerHTML = "";
        switch(window.location.hash){ // caso url = #sumario, o main do index.html recebe o template do /pages/sumario.js
            case "":
                main.appendChild(home());
                break;
            case "#sumario":
                main.appendChild(sumario());
                break;
            case "#cont1":
                main.appendChild(cont1());
                break;
            case "#cont2":
                main.appendChild(cont2());
                break;
            case "#cont3":
                main.appendChild(cont3());
                break;
            default:
                main.appendChild(home());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})
