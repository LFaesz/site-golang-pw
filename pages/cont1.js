export default () => {
    const container = document.createElement('div');

    const template = `
        <div class="titulo-texto">O que é GO?</div>
        <div class="texto1">
            <div class="paragrafo">
            <p>Golang (ou apenas Go) é uma linguagem de programação criada por funcionários do Google e foi lançada em código livre em novembro de 2009. Ela é uma linguagem compilada e com característica de programação concorrente. O projeto inicial da linguagem foi feito em setembro de 2007 por Robert Griesemer, Rob Pike e Ken Thompson.
            A história conta que o trio que possuía mais de 30 anos de experiência com C, se encontrava descontente com as linguagens existentes e buscaram criar uma linguagem de programação que saciasse seus desejos. Acabou sendo considerada por muitos como a linguagem sucessora do C.
            </p></div>
            <div class="paragrafo">
            <p>Usar “Golang” facilita a pesquisa relacionada a essa linguagem. Boa parte dos artigos no medium e respostas no Stackoverflow usa essa nomenclatura informal para evitar ambiguidade na indexação em sites de busca já que Go é uma palavra em inglês de uso comum ao contrário de Python e Javascript. 
            </p></div>
            <div class="paragrafo">
            <p>Além de Golang, a linguagem do Google, também existe o Flutter, o framework do Google.
            Principalmente, para ter uma opção de linguagem de alto desempenho além do C que representa limitações que não são compatíveis com necessidades mais modernas como:
            Concorrência e evitar uso de gerenciamento de memória em código, por exemplo.
            E, para resolver a situação de forma elegante e com bom desempenho, desenvolveram uma linguagem compilada com características de uma linguagem interpretada e suporte simplificado a concorrência.
            </p></div>
        </div>
    `;

    container.innerHTML = template;

    return container;
}