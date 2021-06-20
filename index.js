import home from "./pages/home.js"; //Importando as paginas para fazer a manipulação dos conteudos com o codigo abaixo
import sumario from "./pages/sumario.js";
import cont1 from "./pages/cont1.js";
import cont2 from "./pages/cont2.js";
import cont3 from "./pages/cont3.js";

const main = document.querySelector("#root"); // Está pegando a div com id="root" do index.html 

const init = () => { // Função executada após o load da pagina home
    window.addEventListener("hashchange", () => { // Essa ação vai verificar a hashtag da url, exemplo: caso hashtag = #sumario, a div main do index.html recebe o template sumario.js
        main.innerHTML = ""; // Essa função é para que não fique adicionando template um em baixo do outro, por exemplo, sempre que eu entrar em uma pagina diferente, primeiro vai limpar a tela e depois adicionar esse template na tela
        switch(window.location.hash){ // caso url = #sumario, o main do index.html recebe o template do /pages/sumario.js
            case "":
                main.appendChild(home()); //appendChild -> Adicionando um "filho" no elemento main, que no caso é a div#root do index.html
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
            default: // Essa função é para caso a # não exista, vai diretamente para a pagina home, poderia também ser uma pagina de erro por exemplo
                main.appendChild(home());
        }
    })
}

window.addEventListener("load", () => { // Esse código é para printar na tela o template home ao carregar a pela 1º vez pagina
    main.appendChild(home()); // appendChild -> Adicionando um "filho" no elemento main, que no caso é a div#root do index.html
    init(); // Esse init() é para executar a função la de cima, ou seja, primeiro vai carregar a pagina home e dps executar o codigo de cima
})
