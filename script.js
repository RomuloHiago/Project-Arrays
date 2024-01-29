
    const list = document.querySelector('ul');   // Seleciona o primeiro elemento <ul> no documento HTML e atribui à variável constante list.
    const buttonShowAll = document.querySelector('.show-all');  // Seleciona o primeiro elemento com a classe "show-all" no documento HTML e atribui à variável constante buttonShowAll.
    const buttonMapAll = document.querySelector('.map-all')
    const sumAll = document.querySelector('.sum-all')
    const filterAll = document.querySelector('.filter-all')


function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); // função pra formatar o valor pra reais R$

    return newValue
}


// Declara uma função chamada showAll. Esta função será chamada quando o botão for clicado e preencherá a lista com elementos com base nos dados em menuOptions.
function showAll(productsArray) {
   myLi ='' // Declara uma variável chamada myLi e a inicializa com uma string vazia.    // Esta variável será usada para acumular o conteúdo HTML que será adicionado à lista.


    productsArray.forEach((product) => {  // Itera sobre cada elemento do array menuOptions.  // O loop usa uma função de callback para criar uma string HTML para cada produto e adicioná-la à variável myLi.
        myLi += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${formatCurrency(product.price)}</p> 
            </li>
         `; //chamei minha função 'formatCurrency' antes do '(product.price)' pra ser formatado o valor
    });

   
    list.innerHTML = myLi;  // Atualiza o conteúdo HTML da lista (<ul>) com a string acumulada em myLi, que foi gerada dentro da função showAll.
}







function mapAllItems(){
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // Dar 10% de desconto

    }))

    showAll(newPrices)

}




function sumAllItems (){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0) // acc -> acumulador / curr -> current (atual)

    list.innerHTML = `
    <li>
        <p> O Valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
    </li>
     `
     

    console.log(totalValue)
}





function filterAllItems (){
    const filterVegan= menuOptions.filter((product) => product.vegan)
        
showAll(filterVegan)
}



buttonShowAll.addEventListener('click', () => showAll (menuOptions));  // Adiciona um ouvinte de evento ao botão "show-all", de modo que, quando o botão for clicado, a função showAll será chamada.
buttonMapAll.addEventListener('click', mapAllItems )
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)