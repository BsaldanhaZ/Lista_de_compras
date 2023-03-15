let listaItem = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

form.addEventListener("submit", function(evento){
    evento.preventDefault();
    salvarItem();
})

function salvarItem(){
    const comprasItem = itensInput.value;
    const checarDuplicado = listaItem.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if(checarDuplicado){
        alert('item ja existe');
    } else
    listaItem.push({
        valor: comprasItem
    })
    console.log(listaItem); 
}



/*const listaDeItens = {
    item1: 'bergamota',
    item2: 'laranja',
    item3: 'poca',
    quant1: 2,
    quant2: 3,
    quant3: 4,


    chamaItem: function(){
        alert('o item comprado foi ' + listaDeItens.item1 + ' e sua quantidade foi '+ listaDeItens.quant1);
    }
}

listaDeItens.chamaItem();

const cliente = {
    nome: 'Bruno',
    idade: 33,


    printaIdade: function() {

        
        for( idade = 33; idade <= 100; idade++){
            console.log('sua idade é: '+ idade);
        }
    }
}

cliente.cpf = '02117133096';
cliente.cidade = 'pernambuco';

console.log('Meu nome é: ' + cliente.nome + ' e meu cpf é: ' + cliente.cpf + ' e moro na cidade de ' + cliente.cidade);


cliente.printaIdade();*/

