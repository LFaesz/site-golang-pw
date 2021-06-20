export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="titulo-texto">Curiosidades do GO</div>
    <div class="texto1">
        <ol>
            <li class="curiosidades"> Toda documentação é acessível pela linha de comando:
            Isso é possível graças ao GoDoc, um projeto criado pelos desenvolvedores e mantenedores da linguagem, onde tem toda a documentação de Go e dos pacotes mais populares.
            Você consegue acessá-lo pelo terminal, instalando a aplicação ou até mesmo acessar por HTTP para gerar o plain text de todos os dados ou realizar um query sobre ele.
            </li>
            <li class="curiosidades"> Nested structs:
                Nested structs são estrutura(s) escritas dentro de outra estrutura.</li>
            <li class="curiosidades"> Go get suporta custom domains:
                Sim! Nas versões anteriores você podia rodar um go remote help para verificar isso. Com a versão atual já é algo natural.
            </li>
            <li class="curiosidades"> Enviar e receber em uma mesma channel:
                Em Go, você consegue enviar uma estrutura channel de um contexto para outro sem precisar mudar ou aplicar o escopo da estrutura como global.
            </li>
            <li class="curiosidades"> Mock do sistema de arquivos:
                Seu pacote usa e trabalha com sistema de arquivos, porém você não quer que seus testes usem o disco. É possível ”mockar” esses arquivos criando uma interface. Se preferir, também é possível realizar testes usando fixtures.
                Se perdeu no significado de Mock? Objetos Mock são objetos que simulam o comportamento de objetos reais de forma controlada. São normalmente criados para testar o comportamento de outros objetos.
            </li>
        </ol>

    `;

    container.innerHTML = template;

    return container;
}