export default () => {
    const container = document.createElement('div');

    const template = `
        <div class="container-texto1">
        <h1 class="titulohome">SEJA BEM VINDO, PREENCHA O FORMULÁRIO E DIVIRTA-SE</DIVIRTA-SE></h1>
        </div>



    <div class="formm">
        <div class="form">
            <div class="infonome">
                <label for="">Qual é o seu nome?</label>
            </div>

            <input type="text" id="user" placeholder="Digite o seu nome" required>

            <div class="infoemail">
                <label for="">Informe o seu e-mail para receber novidades</label>
            </div>

            <input type="email" placeholder="Digite seu e-mail">
            
            <div class="botao-form"></div>
                <button onclick="enviar()">Enviar Cadastro</a></button>
            </div>
        </div>
    </div>
    `;

    container.innerHTML = template;

    return container;
}