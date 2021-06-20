export default () => {
    const container = document.createElement('div');

    const template = `
        <div class="titulo-texto">Como funciona?</div>
        <div class="texto1">
            <div class="paragrafo">
            <p>Uma linguagem compilada é uma linguagem que após o programador ter finalizado seu código, ele tem que rodar um programa chamado compilador.
                Este programa além de fazer uma análise sintática procurando por erros na maneira de escrever o código, ele também realiza uma análise semântica, buscando por erros na lógica da construção do código.
                Se houver erros de algum desses tipos, o código não é compilado, isso evita, por exemplo, que esses erros sejam descobertos quando o código estiver em execução (em produção).
                Outra vantagem do código compilado é que depois desse processo de compilação, o compilador cria um binário executável com código de máquina, que tende a ser mais rápido que outras linguagens interpretadas.
                </p></div>
            <div class="paragrafo">
            <p>Estaticamente tipada significa que para cada tipo de váriável que o programador for usar (int, float, string), ele deve tipar, ou seja, declarar de qual tipo é aquela variável que somente aceitará dados desse tipo.
                Isso evita erros comuns em outras linguagens quando um função recebe um dado de um tipo que não é esperado.
                </p></div>
            <div class="paragrafo">
            <p>É relativamente fácil produzir código para outras arquiteturas e sistemas operacionais.
                Com poucos comandos no meu notebook, eu produzo um binário executável para uma Raspberry Pi que possuo para fazer testes.
                Também é possível produzir binários para Windows ou Mac de maneira similar.
                Os executáveis podem ser compilados de maneira estática.
                Isso significa que todas as bibliotecas que aquele binário utilizar estarão dentro desse binário, dispensando assim a instalação de qualquer outro software na máquina que irá executar aquele programa.
                Go foi pensado e arquitetado com concorrência e paralelismo em mente.
                Ela já vem de “fábrica” com goroutines, como são chamadas as chamadas de execução em paralelo da linguagem e também com channels, canais de comunicação entre partes diferentes do seu código trazendo com isso maneiras fáceis de produzir códigos assíncronos.
                A biblioteca padrão da linguagem é bastante completa e vem de fábrica com muitas ferramentas bem úteis para qualquer programador backend entre elas, bibliotecas criptográficas e servidores de http.
                Além disso ainda oferece testes unitários sem precisar de ferramentas externas.
                Só é preciso criar um arquivo com o mesmo nome e adicionar _test ao final para testar um arquivo.
                </p></div>
        </div>
    `;

    container.innerHTML = template;

    return container;
}