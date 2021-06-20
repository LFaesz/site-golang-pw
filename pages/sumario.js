export default () => {
    const container = document.createElement('div');

    const template = `
            <div class="container-sumario-pai">

            <div class="container-sumario">
                <ul class="topicos">

                    <div class="container-titulo-h2">
                        <a href="#"><span class="material-icons">
                            home
                            </span></a>
                        <h2>Tópicos: </h2>
                    </div>

                    <li> 
                        <a href="/#cont1">Oque é GO ?</a>
                    </li>
                    <li>
                        <a href="/#cont2">Como funciona</a>
                    </li>
                    <li>
                        <a href="/#cont3">Curiosidades sobre a linguagem</a> 
                    </li>

                </ul>

                <img class= "mascote-topicos"src="/img/mascote-golang.png" alt="">


            </div>
        </div>
    `;

    container.innerHTML = template;

    return container;
}